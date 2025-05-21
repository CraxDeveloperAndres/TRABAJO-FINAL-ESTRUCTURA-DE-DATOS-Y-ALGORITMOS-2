
const Player = require('../Models/player');
const Queue = require('../Models/queue');
const MusicGraph = require('../Models/graph');
const Song = require('../Models/Song');

class MusicController {
  constructor() {
    // Inicializar componentes
    this.player = new Player();
    this.queue = new Queue();
    this.musicGraph = new MusicGraph();
    
    // Conectar el player con la queue y el graph
    this.player.setQueue(this.queue);
    this.player.setMusicGraph(this.musicGraph);
    
    // Lista para almacenar las canciones que le gustan al usuario
    this.likedSongs = [];
    
    // Cargar datos de muestra
    this.loadSampleData();
  }
  
  // Cargar datos de muestra
  loadSampleData() {
    const sampleSongs = Song.getSampleData();
    
    // Importar canciones al grafo
    this.musicGraph.bulkImport(sampleSongs);
    
    // Log para verificar la carga
    console.log(`Cargadas ${sampleSongs.length} canciones de muestra al grafo.`);
  }
  
  // Inicializar el reproductor con una lista de canciones
  initializePlayer(req, res) {
    const { songList } = req.body;
    
    if (!songList || !Array.isArray(songList)) {
      return res.status(400).json({ error: 'La lista de canciones es inválida' });
    }
    
    this.player.loadSongs(songList);
    
    return res.status(200).json({
      message: 'Reproductor inicializado correctamente',
      currentSong: this.player.currentSong()
    });
  }
  
  // Obtener la canción actual
  getCurrentSong(req, res) {
    const currentSong = this.player.currentSong();
    
    if (!currentSong) {
      return res.status(404).json({ error: 'No hay canción reproduciéndose actualmente' });
    }
    
    return res.status(200).json({ currentSong });
  }
  
  // Pasar a la siguiente canción
  nextSong(req, res) {
    const nextSong = this.player.next();
    
    if (!nextSong) {
      return res.status(404).json({ error: 'No hay más canciones en la lista' });
    }
    
    return res.status(200).json({ currentSong: nextSong });
  }
  
  // Volver a la canción anterior
  previousSong(req, res) {
    const previousSong = this.player.previous();
    
    if (!previousSong) {
      return res.status(404).json({ error: 'No hay canciones anteriores' });
    }
    
    return res.status(200).json({ currentSong: previousSong });
  }
  
  // Agregar una canción a la cola
  addToQueue(req, res) {
    const { song } = req.body;
    
    if (!song || !song.id || !song.title) {
      return res.status(400).json({ error: 'Datos de canción requeridos' });
    }
    
    const success = this.player.addToQueue(song);
    
    if (!success) {
      return res.status(500).json({ error: 'Error al agregar canción a la cola' });
    }
    
    return res.status(200).json({
      message: 'Canción agregada a la cola correctamente',
      queue: this.player.getQueueList()
    });
  }
  
  // Obtener la lista de canciones en cola
  getQueue(req, res) {
    const queue = this.player.getQueueList();
    
    return res.status(200).json({ queue });
  }
  
  // Marcar una canción como "Me gusta"
  likeSong(req, res) {
    const { songId } = req.body;
    
    if (!songId) {
      return res.status(400).json({ error: 'ID de la canción es requerido' });
    }
    
    // Verificar si la canción ya está en la lista de "Me gusta"
    const alreadyLiked = this.likedSongs.some(song => song.id === songId);
    
    if (alreadyLiked) {
      return res.status(400).json({ error: 'La canción ya está en la lista de "Me gusta"' });
    }
    
    // Buscar la canción en el grafo
    const song = this.musicGraph.getSongById(songId);
    
    if (!song) {
      // Alternativamente, podría ser la canción actual
      const currentSong = this.player.currentSong();
      if (currentSong && currentSong.id === songId) {
        this.likedSongs.push(currentSong);
        
        return res.status(200).json({
          message: 'Canción añadida a "Me gusta"',
          likedSongs: this.likedSongs
        });
      }
      
      return res.status(404).json({ error: 'Canción no encontrada' });
    }
    
    this.likedSongs.push(song);
    
    return res.status(200).json({
      message: 'Canción añadida a "Me gusta"',
      likedSongs: this.likedSongs
    });
  }
  
  // Obtener lista de canciones que le gustan al usuario
  getLikedSongs(req, res) {
    return res.status(200).json({ likedSongs: this.likedSongs });
  }
  
  // Nuevo: Activar/desactivar modo aleatorio
  toggleShuffleMode(req, res) {
    const shuffleMode = this.player.toggleShuffleMode();
    
    return res.status(200).json({
      message: `Modo aleatorio ${shuffleMode ? 'activado' : 'desactivado'}`,
      shuffleMode
    });
  }
  
  // Nuevo: Obtener recomendaciones basadas en la canción actual
  getRecommendations(req, res) {
    const { limit } = req.query;
    const limitNum = parseInt(limit) || 5;
    
    const recommendations = this.player.getRecommendations(limitNum);
    
    if (!recommendations || recommendations.length === 0) {
      return res.status(404).json({ 
        error: 'No hay recomendaciones disponibles para la canción actual' 
      });
    }
    
    return res.status(200).json({ recommendations });
  }
  
  // Nuevo: Obtener todas las canciones disponibles
  getAllSongs(req, res) {
    const songs = this.musicGraph.getAllSongs();
    
    return res.status(200).json({ songs });
  }
  
  // Nuevo: Buscar canciones
  searchSongs(req, res) {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Término de búsqueda requerido' });
    }
    
    const searchTerm = query.toLowerCase();
    const songs = this.musicGraph.getAllSongs();
    
    const results = songs.filter(song => 
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm) ||
      song.album.toLowerCase().includes(searchTerm) ||
      song.genre.toLowerCase().includes(searchTerm)
    );
    
    return res.status(200).json({ results });
  }
  
  // Nuevo: Obtener información de una canción
  getSong(req, res) {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'ID de canción requerido' });
    }
    
    const song = this.musicGraph.getSongById(id);
    
    if (!song) {
      return res.status(404).json({ error: 'Canción no encontrada' });
    }
    
    return res.status(200).json({ song });
  }
}

module.exports = new MusicController();