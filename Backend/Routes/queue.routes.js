const { Router } = require('express');
const { escucharSiguiente, verCola } = require('../controllers/queue.controller');

const router = Router();

// Obtener toda la cola de canciones
router.get('/', verCola);

// Escuchar la siguiente canción (dequeue)
router.get('/next', escucharSiguiente);

module.exports = router;
