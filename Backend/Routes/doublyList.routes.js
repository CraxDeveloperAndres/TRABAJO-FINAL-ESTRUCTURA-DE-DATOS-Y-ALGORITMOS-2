const express = require('express');
const router = express.Router();

const {
  verHistorial,
  agregarCancion,
  eliminarCancion
} = require('../controllers/doublyLinkedList.controller');

router.get('/', verHistorial);
router.post('/', agregarCancion);
router.delete('/', eliminarCancion);

module.exports = router;
