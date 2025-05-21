// models/Player.js

const Node = require('./playerNode');  // Asumiendo que has movido la clase Node a un archivo separado

class Player {
  constructor() {
    this.current = null;
    this.queue = null;
    this.musicGraph = null;
    this.shuffleMode = false;
  }

  setQueue(queue) {
    this.queue = queue;
  }

  setMusicGraph(musicGraph) {
    this.musicGraph = musicGraph;
  }

  loadSongs(songList) {
    if (!Array.isArray(songList) || songList.length === 0) return;

    let prevNode = null;
    songList.forEach((data, index) => {
      const newNode = new Node(data);
      if (index === 0) {
        this.current = newNode;
      } else {
        newNode.prev = prevNode;
        prevNode.next = newNode;
      }
      prevNode = newNode;
    });
  }

  // Activar o desactivar modo aleatorio
  toggleShuffleMode() {
    this.shuffleMode = !this.shuffleMode;
    return this.shuffleMode;
  }

  // Obtener estado del modo aleatorio
  isShuffleMode() {
    return this.shuffleMode;
  }

  next() {
    // Si no hay reproductor actual, no podemos avanzar
    if (!this.current) {
      return null;
    }

    let nextSong = null;

    // En modo aleatorio, usar el grafo para recomendar
    if (this.shuffleMode && this.musicGraph) {
      const currentSongId = this.current.data.id;
      const recommendation = this.musicGraph.recommendNextSong(currentSongId);
      
      if (recommendation) {
        // Crear nuevo nodo para la canción recomendada
        const newNode = new Node(recommendation);
        
        // Mantener la referencia a la canción previa
        newNode.prev = this.current;
        
        // Insertar entre la actual y la siguiente
        if (this.current.next) {
          newNode.next = this.current.next;
          this.current.next.prev = newNode;
        }
        
        this.current.next = newNode;
        this.current = newNode;
        
        return this.current.data;
      }
    }

    // Si no estamos en modo aleatorio o no hay recomendación,
    // seguir con el comportamiento normal
    if (this.current.next) {
      this.current = this.current.next;
      return this.current.data;
    } else if (this.queue && !this.queue.isEmpty()) {
      // Si no hay más canciones en la lista pero hay en la cola
      const nextSong = this.queue.dequeue();
      
      const newNode = new Node(nextSong);
      newNode.prev = this.current;
      this.current.next = newNode;
      this.current = newNode;
      
      return nextSong;
    }
    
    return null;
  }

  previous() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      return this.current.data;
    }
    return null;
  }

  currentSong() {
    return this.current ? this.current.data : null;
  }
  
  addToQueue(song) {
    if (!this.queue) {
      return false;
    }
    
    this.queue.enqueue(song);
    return true;
  }
  
  getQueueList() {
    return this.queue ? this.queue.toArray() : [];
  }

  // Obtener recomendaciones para la canción actual
  getRecommendations(limit = 5) {
    if (!this.current || !this.musicGraph) {
      return [];
    }
    
    return this.musicGraph.getSimilarSongs(this.current.data.id, limit);
  }
}

module.exports = Player;