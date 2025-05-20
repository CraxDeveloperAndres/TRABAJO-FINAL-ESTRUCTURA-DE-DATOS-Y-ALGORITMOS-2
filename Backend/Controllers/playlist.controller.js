const DoublyLinkedList = require('../models/doublyLinkedList');

// Creamos una única instancia de la lista y un puntero actual
const playlist = new DoublyLinkedList();
let currentSong = null;

// Obtener la lista completa
const obtenerPlaylist = (req, res) => {
  res.json({ playlist: playlist.toArray() });
};

// Reproducir la canción actual
const obtenerActual = (req, res) => {
  if (!currentSong) {
    return res.status(404).json({ mensaje: 'No hay canciones en la playlist' });
  }

  res.json({ actual: currentSong.data });
};

// Reproducir siguiente canción
const siguienteCancion = (req, res) => {
  if (currentSong && currentSong.next) {
    currentSong = currentSong.next;
    return res.json({ mensaje: 'Siguiente canción', actual: currentSong.data });
  }

  res.status(400).json({ mensaje: 'No hay siguiente canción' });
};

// Reproducir canción anterior
const anteriorCancion = (req, res) => {
  if (currentSong && currentSong.prev) {
    currentSong = currentSong.prev;
    return res.json({ mensaje: 'Canción anterior', actual: currentSong.data });
  }

  res.status(400).json({ mensaje: 'No hay canción anterior' });
};

// Eliminar una canción por título
const eliminarCancion = (req, res) => {
  const { titulo } = req.params;
  const eliminado = playlist.remove({ titulo });

  if (!eliminado) {
    return res.status(404).json({ mensaje: 'Canción no encontrada' });
  }

  if (currentSong && currentSong.data.titulo === titulo) {
    currentSong = currentSong.next || currentSong.prev || null;
  }

  res.json({ mensaje: 'Canción eliminada', titulo });
};

module.exports = {
  obtenerPlaylist,
  obtenerActual,
  siguienteCancion,
  anteriorCancion,
  eliminarCancion
};
