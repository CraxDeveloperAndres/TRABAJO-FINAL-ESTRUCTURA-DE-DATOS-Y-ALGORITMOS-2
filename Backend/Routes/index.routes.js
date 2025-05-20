// routes/index.routes.js
const express = require('express');
const router = express.Router();

const queueRoutes = require('./queue.routes');
const playlistRoutes = require('./playlist.routes');
const playerRoutes = require('./player.routes');

router.use('/queue', queueRoutes);
router.use('/playlist', playlistRoutes);
router.use('/player', playerRoutes);

module.exports = router;
