const express = require('express');
const router = express.Router();

const {
  playSong,
  pauseSong,
  stopSong,
  nextSong,
  previousSong
} = require('../controllers/player.controller');

// Reproducir canción
router.post('/play', playSong);

// Pausar canción
router.post('/pause', pauseSong);

// Detener canción
router.post('/stop', stopSong);

// Canción siguiente
router.post('/next', nextSong);

// Canción anterior
router.post('/previous', previousSong);

module.exports = router;
