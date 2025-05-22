const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ControllerMusic = require('./Controllers/ControllerMusic')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(ControllerMusic);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
