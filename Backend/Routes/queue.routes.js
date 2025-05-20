const express = require('express');
const router = express.Router();

const { getQueue, addToQueue, removeFromQueue } = require('../controllers/queue.controller');

router.get('/', getQueue);             // debe ser función
router.post('/', addToQueue);          // debe ser función
router.delete('/:id', removeFromQueue);// debe ser función

module.exports = router;
