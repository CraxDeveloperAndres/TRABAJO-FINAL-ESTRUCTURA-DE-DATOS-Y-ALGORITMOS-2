const { Router } = require('express');
const { escucharSiguiente, verCola , agregarACola} = require('../controllers/queue.controller');

const router = Router();

// Obtener toda la cola de canciones
router.get('/', verCola);

// Escuchar la siguiente canción (dequeue)
router.get('/next', escucharSiguiente);

// Agregar esta línea a tu archivo queue.routes.js
router.post('/add', agregarACola);

module.exports = router;
