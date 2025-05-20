const Queue = require('../models/queue');
const queue = new Queue();

const escucharSiguiente = (req, res) => {
  const cancion = queue.dequeue();
  if (!cancion) {
    return res.status(404).json({ msg: 'No hay más canciones en la cola' });
  }
  res.json({ msg: 'Reproduciendo canción', cancion });
};

const verCola = (req, res) => {
  res.json({ cola: queue.toArray() });
};

module.exports = {
  escucharSiguiente,
  verCola
};
