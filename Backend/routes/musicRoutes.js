// routes/musicRoutes.js

const express = require('express');
const router = express.Router();
const musicController = require('../Controllers/ControllerMusic');

// === Rutas del Reproductor ===
// Obtener todas las canciones
router.get('/songs', musicController.obtenerTodasLasCanciones);

// Obtener la canción actual
//router.get('/player/current', musicController.getCurrentSong.bind(musicController));

// === Rutas de Recomendaciones (nuevas) ===
// Obtener recomendaciones basadas en la canción actual
//router.get('/recommendations', musicController.getRecommendations.bind(musicController));

// Pasar a la siguiente canción
//router.get('/player/next', musicController.nextSong.bind(musicController));

// Volver a la canción anterior
//router.get('/player/previous', musicController.previousSong.bind(musicController));



// === Rutas de Cola ===
// Agregar una canción a la cola
//router.post('/queue/add', musicController.addToQueue.bind(musicController));

// Obtener la lista de canciones en cola
//router.get('/queue', musicController.getQueue.bind(musicController));




// === Rutas de Me Gusta ===
// Marcar una canción como "Me gusta"
//router.post('/likes/add', musicController.likeSong.bind(musicController));

// Obtener lista de canciones que le gustan al usuario
//router.get('/likes', musicController.getLikedSongs.bind(musicController));


module.exports = router;