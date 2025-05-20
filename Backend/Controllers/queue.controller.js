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

const agregarACola = (req, res) => {
  const { cancion } = req.body;
  
  if (!cancion) {
    return res.status(400).json({ msg: 'Datos de canción requeridos' });
  }
  
  queue.enqueue(cancion);
  res.status(201).json({ 
    msg: 'Canción agregada a la cola con éxito', 
    cancion, 
    cola: queue.toArray() 
  });
};

module.exports = {
  escucharSiguiente,
  verCola,
  agregarACola
};
