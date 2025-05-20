const express = require('express');
const router = express.Router();

const {
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist
} = require('../controllers/playlist.controller');

// Obtener todas las playlists
router.get('/', getPlaylists);

// Obtener playlist por ID
router.get('/:id', getPlaylistById);

// Actualizar playlist por ID
router.put('/:id', updatePlaylist);

// Eliminar playlist por ID
router.delete('/:id', deletePlaylist);

module.exports = router;
