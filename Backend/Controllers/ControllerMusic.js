const { Router } = require('express');
const router = Router();
const Cancion = require("../Models/Cancion");
const ListaDoble = require("../Models/Listadoble");
const { obtenerRecomendaciones } = require('../Models/Grafo');
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
  const {cancion}  = req.body;
  const cancionEnculada = {...cancion,encolado:true}
  const nodoCancion = lista.agregar(cancionEnculada);

  res.json(nodoCancion);
});

router.post('/removequeue',(req, res) => {
  const {id}  = req.body;
  const nodoCancion = lista.eliminar(id);

  res.json(nodoCancion);
});

router.get('/likedsongs',(req, res) => {
  const response = Cancion.obtenerFavoritas();
  res.json(response);
});

router.post('/togglelike',(req, res) => {
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

router.get('/graphs', (req, res) => {
  const cancionActual = lista.obtenerCancionActual();

 if (!cancionActual || !cancionActual.id) {
    return res.status(400).json({ error: 'No hay una canción actual seleccionada.' });
  }
  const response = obtenerRecomendaciones(cancionActual.id);
  res.json(response);
});



module.exports = router;