const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const ControllerMusic = require('./Controllers/ControllerMusic')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(ControllerMusic);

// Ruta de prueba para verificar que la API funciona
app.get('/', (req, res) => {
  res.json({ 
    message: 'Music API funcionando correctamente',
    status: 'active',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000; 

// Solo escuchar en desarrollo local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Exportar la app para Vercel
module.exports = app;