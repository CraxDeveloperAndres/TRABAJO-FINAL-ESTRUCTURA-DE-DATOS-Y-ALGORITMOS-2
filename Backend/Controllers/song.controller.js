const songs = require('../data/songs.json');

const getAllSongs = (req, res) => {
  res.json(songs);
};

const getSongById = (req, res) => {
  const song = songs.find(s => s.id === parseInt(req.params.id));
  if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
  res.json(song);
};

const searchSongsByTitle = (req, res) => {
  const { title } = req.query;
  const filtered = songs.filter(s =>
    s.title.toLowerCase().includes(title.toLowerCase())
  );
  res.json(filtered);
};

module.exports = {
  getAllSongs,
  getSongById,
  searchSongsByTitle
};
