const getWelcome = (req, res) => {
    res.json({ message: 'Bienvenido a la API de Mini Spotify 🎧' });
  };
  
module.exports = { getWelcome };
  