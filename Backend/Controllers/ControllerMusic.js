const { Router } = require('express');
const router = Router();
const Cancion = require("../Models/Cancion");
const ListaDoble = require("../Models/Listadoble");
const lista = new ListaDoble();

router.get('/songs', (req, res) => {
  const resultado = Cancion.obtenerTodas();
  res.json(resultado);
});

router.get('/queue', (req, res) => {
  const resultado = lista.obtenerTodasLista();
  res.json(resultado);
});

router.post('/addqueue',(req, res) => {
  const cancion  = req.body;
  const nodoCancion = lista.agregar(cancion);

  res.json(nodoCancion);
});

router.get('/likedsongs',(req, res) => {
  const response = Cancion.obtenerFavoritas();
  res.json(response);
});

router.post('/addlike',(req, res) => {
  const {id}  = req.body;
  const response = Cancion.toggleMeGusta(id);
  res.json(response);
});

router.get('/currentsong',(req, res) => {

  const response = lista.obtenerCancionActual();
  res.json(response);

});

router.get('/next',(req, res) => {

  const response = lista.siguienteCancion();
  res.json(response);

});

router.get('/back',(req, res) => {

  const response = lista.cancionAnterior();
  res.json(response);

});

router.get('/graphs',(req, res) => {

  const response ="";
  res.json(response);

});

module.exports = router;