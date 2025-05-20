const { Router } = require('express');
const { cargarCanciones, cancionActual, siguienteCancion, cancionAnterior } = require('../controllers/player.controller');

const router = Router();

// Cargar lista de canciones al reproductor
router.post('/load', cargarCanciones);

// Obtener la canción actual
router.get('/current', cancionActual);

// Reproducir siguiente canción
router.get('/next', siguienteCancion);

// Reproducir canción anterior
router.get('/prev', cancionAnterior);

module.exports = router;
