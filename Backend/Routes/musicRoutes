// routes/musicRoutes.js

const express = require('express');
const router = express.Router();
const musicController = require('../Controllers/ControllerMusic');

// === Rutas del Reproductor ===
// Inicializar el reproductor con una lista de canciones
router.post('/player/initialize', musicController.initializePlayer.bind(musicController));

// Obtener la canción actual
router.get('/player/current', musicController.getCurrentSong.bind(musicController));

// Pasar a la siguiente canción
router.post('/player/next', musicController.nextSong.bind(musicController));

// Volver a la canción anterior
router.post('/player/previous', musicController.previousSong.bind(musicController));

// Activar/desactivar modo aleatorio (nuevo)
router.post('/player/shuffle', musicController.toggleShuffleMode.bind(musicController));



// === Rutas de Cola ===
// Agregar una canción a la cola
router.post('/queue/add', musicController.addToQueue.bind(musicController));

// Obtener la lista de canciones en cola
router.get('/queue', musicController.getQueue.bind(musicController));




// === Rutas de Me Gusta ===
// Marcar una canción como "Me gusta"
router.post('/likes/add', musicController.likeSong.bind(musicController));

// Obtener lista de canciones que le gustan al usuario
router.get('/likes', musicController.getLikedSongs.bind(musicController));





// === Rutas de Recomendaciones (nuevas) ===
// Obtener recomendaciones basadas en la canción actual
router.get('/recommendations', musicController.getRecommendations.bind(musicController));




//TODO ESTO DE ABAJO FUNCIONA

// === Rutas de Librería (nuevas) ===
// Obtener todas las canciones
router.get('/songs', musicController.getAllSongs.bind(musicController));

// Buscar canciones
router.get('/songs/search', musicController.searchSongs.bind(musicController));

// Obtener información de una canción específica
router.get('/songs/:id', musicController.getSong.bind(musicController));

module.exports = router;