const DoublyLinkedList = require('../models/doublyLinkedList');
const list = new DoublyLinkedList();

const verHistorial = (req, res) => {
  res.json({ historial: list.toArray() });
};

const agregarCancion = (req, res) => {
  const cancion = req.body;
  if (!cancion || !cancion.id) {
    return res.status(400).json({ msg: 'La canción debe tener un id' });
  }
  list.add(cancion);
  res.status(201).json({ msg: 'Canción agregada al historial', historial: list.toArray() });
};

const eliminarCancion = (req, res) => {
  const { id } = req.body;
  const eliminada = list.delete(id);
  if (!eliminada) {
    return res.status(404).json({ msg: 'Canción no encontrada en el historial' });
  }
  res.json({ msg: 'Canción eliminada del historial', historial: list.toArray() });
};

module.exports = {
  verHistorial,
  agregarCancion,
  eliminarCancion
};
