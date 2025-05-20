const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/queue', require('./routes/queue.routes'));
app.use('/player', require('./routes/player.routes'));
app.use('/doubly', require('./routes/doublyList.routes'));

const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
