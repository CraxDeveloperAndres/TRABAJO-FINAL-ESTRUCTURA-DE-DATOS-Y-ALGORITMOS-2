const { Router } = require('express');
const { getAllSongs, getSongById, searchSongsByTitle } = require('../controllers/song.controller');

const router = Router();

router.get('/', getAllSongs);
router.get('/search', searchSongsByTitle);
router.get('/:id', getSongById);

module.exports = router;
