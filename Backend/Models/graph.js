// models/MusicGraph.js

class MusicNode {
  constructor(songId) {
    this.songId = songId;
    this.connections = new Map(); // Map para almacenar conexiones con peso: songId -> weight
  }

  addConnection(targetSongId, weight = 1) {
    // Si ya existe la conexión, incrementamos el peso
    if (this.connections.has(targetSongId)) {
      this.connections.set(targetSongId, this.connections.get(targetSongId) + weight);
    } else {
      // Si no existe, la creamos con el peso indicado
      this.connections.set(targetSongId, weight);
    }
  }

  // Obtener todas las conexiones ordenadas por peso (de mayor a menor)
  getSortedConnections() {
    return Array.from(this.connections.entries())
      .sort((a, b) => b[1] - a[1]);
  }
}

class MusicGraph {
  constructor() {
    this.nodes = new Map(); // songId -> MusicNode
    this.songs = new Map(); // songId -> songData
  }

  // Agregar canción al grafo
  addSong(songData) {
    const songId = songData.id;
    
    // Guardar los datos de la canción
    this.songs.set(songId, songData);
    
    // Crear el nodo si no existe
    if (!this.nodes.has(songId)) {
      this.nodes.set(songId, new MusicNode(songId));
    }
    
    return songId;
  }

  // Crear relación entre canciones
  createRelationship(songId1, songId2, weight = 1) {
    // Verificar que ambas canciones existan
    if (!this.nodes.has(songId1) || !this.nodes.has(songId2)) {
      return false;
    }
    
    // Crear conexión bidireccional
    this.nodes.get(songId1).addConnection(songId2, weight);
    this.nodes.get(songId2).addConnection(songId1, weight);
    
    return true;
  }

  // Crear relaciones automáticas basadas en metadatos
  autoCreateRelationships() {
    const songIds = Array.from(this.songs.keys());
    
    // Para cada par de canciones
    for (let i = 0; i < songIds.length; i++) {
      const song1 = this.songs.get(songIds[i]);
      
      for (let j = i + 1; j < songIds.length; j++) {
        const song2 = this.songs.get(songIds[j]);
        
        // Calcular similitud
        let similarity = 0;
        
        // Mismo artista
        if (song1.artist === song2.artist) {
          similarity += 3;
        }
        
        // Mismo género
        if (song1.genre === song2.genre) {
          similarity += 2;
        }
        
        // Mismo álbum
        if (song1.album === song2.album) {
          similarity += 4;
        }
        
        // Si tienen suficiente similitud, crear relación
        if (similarity > 0) {
          this.createRelationship(song1.id, song2.id, similarity);
        }
      }
    }
  }

  // Obtener canciones similares
  getSimilarSongs(songId, limit = 5) {
    if (!this.nodes.has(songId)) {
      return [];
    }
    
    // Obtener conexiones ordenadas por peso
    const connections = this.nodes.get(songId).getSortedConnections();
    
    // Devolver las canciones similares (hasta el límite indicado)
    return connections.slice(0, limit).map(([connectedSongId, weight]) => {
      return {
        ...this.songs.get(connectedSongId),
        similarity: weight
      };
    });
  }

  // Método para importar un conjunto de canciones
  bulkImport(songsArray) {
    if (!Array.isArray(songsArray)) return 0;
    
    let count = 0;
    songsArray.forEach(song => {
      if (song && song.id) {
        this.addSong(song);
        count++;
      }
    });
    
    // Crear relaciones automáticas
    this.autoCreateRelationships();
    
    return count;
  }

  // Obtener todas las canciones
  getAllSongs() {
    return Array.from(this.songs.values());
  }

  // Obtener canción por ID
  getSongById(songId) {
    return this.songs.get(songId) || null;
  }

  // Recomendar próxima canción basado en la actual
  recommendNextSong(currentSongId) {
    const similarSongs = this.getSimilarSongs(currentSongId, 3);
    
    // Si no hay canciones similares, devolver null
    if (similarSongs.length === 0) {
      return null;
    }
    
    // Elegir aleatoriamente entre las canciones más similares
    // Con más probabilidad para las más similares
    const totalWeight = similarSongs.reduce((sum, song) => sum + song.similarity, 0);
    let random = Math.random() * totalWeight;
    
    for (const song of similarSongs) {
      random -= song.similarity;
      if (random <= 0) {
        return song;
      }
    }
    
    // En caso de que algo falle, devolver la primera
    return similarSongs[0];
  }
}

module.exports = MusicGraph;