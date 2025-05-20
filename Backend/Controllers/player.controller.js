const Player = require('../models/player');
const player = new Player();

const cargarCanciones = (req, res) => {
  const { canciones } = req.body;

  if (!Array.isArray(canciones) || canciones.length === 0) {
    return res.status(400).json({ msg: 'Debes enviar una lista de canciones' });
  }

  player.loadSongs(canciones);
  res.json({ msg: 'Canciones cargadas', cancionActual: player.currentSong() });
};

const cancionActual = (req, res) => {
  const actual = player.currentSong();
  if (!actual) return res.status(404).json({ msg: 'No hay canción cargada' });

  res.json({ cancion: actual });
};

const siguienteCancion = (req, res) => {
  const next = player.next();
  if (!next) return res.status(404).json({ msg: 'No hay siguiente canción' });

  res.json({ cancion: next });
};

const cancionAnterior = (req, res) => {
  const prev = player.previous();
  if (!prev) return res.status(404).json({ msg: 'No hay canción anterior' });

  res.json({ cancion: prev });
};

module.exports = {
  cargarCanciones,
  cancionActual,
  siguienteCancion,
  cancionAnterior
};
