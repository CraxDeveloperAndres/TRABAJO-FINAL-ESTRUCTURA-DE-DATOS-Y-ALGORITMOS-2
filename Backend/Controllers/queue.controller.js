const Queue = require('../models/queue');

const colaCanciones = new Queue();

// Obtener todas las canciones en la cola
const obtenerCola = (req, res) => {
  res.json({ cola: colaCanciones.toArray() });
};

// Reproducir (sacar) la siguiente canción de la cola
const reproducirSiguienteCancion = (req, res) => {
  if (colaCanciones.isEmpty()) {
    return res.status(400).json({ mensaje: 'No hay canciones en la cola' });
  }

  const cancion = colaCanciones.dequeue();
  res.json({ mensaje: 'Canción reproducida', cancion });
};

// Ver la siguiente canción sin sacarla
const verSiguienteCancion = (req, res) => {
  const cancion = colaCanciones.peek();

  if (!cancion) {
    return res.status(404).json({ mensaje: 'La cola está vacía' });
  }

  res.json({ siguiente: cancion });
};

module.exports = {
  obtenerCola,
  reproducirSiguienteCancion,
  verSiguienteCancion
};
