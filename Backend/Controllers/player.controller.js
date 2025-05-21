// Ejemplo de uso en un controlador de Express

const Player = require('../Models/player');
const Queue = require('../Models/queue');

class MusicController {
  constructor() {
    this.player = new Player();
    this.queue = new Queue();
    
    // Conectar el player con la queue
    this.player.setQueue(this.queue);
    
    // Lista para almacenar las canciones que le gustan al usuario
    this.likedSongs = [];
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
    const songData = req.body.song;
    
    if (!songData || !songData.id || !songData.title) {
      return res.status(400).json({ msg: "Datos de canción requeridos" });
    }
    
    const success = this.player.addToQueue(songData);
    
    if (!success) {
      return res.status(500).json({ msg: "Error al agregar canción a la cola" });
    }
    
    return res.status(200).json({
      msg: "Canción agregada a la cola correctamente",
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
    
    // Obtener los detalles de la canción (aquí podrías buscarla en tu base de datos)
    // Por simplicidad, asumimos que la canción está en el reproductor actual
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
  
  // Obtener lista de canciones que le gustan al usuario
  getLikedSongs(req, res) {
    return res.status(200).json({ likedSongs: this.likedSongs });
  }
}

module.exports = new MusicController();