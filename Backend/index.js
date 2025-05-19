const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', require('./Routes/index.routes'));

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});

// Backend/index.js
app.get('/api/songs', (req, res) => {
    res.json([
      { id: 1, title: 'Canción 1' },
      { id: 2, title: 'Canción 2' }
    ]);
});
  