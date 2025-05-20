const DoublyLinkedList = require('../models/doublyLinkedList');

const listaCanciones = new DoublyLinkedList();
let cancionActual = null;

// Simulamos canciones precargadas (puedes mover esto a otro lugar si prefieres)
listaCanciones.append({ id: 1, nombre: "Canción A" });
listaCanciones.append({ id: 2, nombre: "Canción B" });
listaCanciones.append({ id: 3, nombre: "Canción C" });

cancionActual = listaCanciones.head;

// Obtener la canción actual
const obtenerCancionActual = (req, res) => {
  if (!cancionActual) {
    return res.status(404).json({ mensaje: "No hay canción actual" });
  }
  res.json({ actual: cancionActual.data });
};

// Pasar a la siguiente canción
const siguienteCancion = (req, res) => {
  if (cancionActual && cancionActual.next) {
    cancionActual = cancionActual.next;
    return res.json({ mensaje: "Siguiente canción", actual: cancionActual.data });
  }
  res.status(400).json({ mensaje: "No hay más canciones adelante" });
};

// Volver a la canción anterior
const anteriorCancion = (req, res) => {
  if (cancionActual && cancionActual.prev) {
    cancionActual = cancionActual.prev;
    return res.json({ mensaje: "Canción anterior", actual: cancionActual.data });
  }
  res.status(400).json({ mensaje: "No hay canciones atrás" });
};

// Mostrar toda la lista de canciones (opcional)
const obtenerListaCompleta = (req, res) => {
  res.json({ lista: listaCanciones.toArray() });
};

module.exports = {
  obtenerCancionActual,
  siguienteCancion,
  anteriorCancion,
  obtenerListaCompleta
};
