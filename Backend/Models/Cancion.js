const canciones = [
  {
    id: 1,
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    image: "https://via.placeholder.com/60",
    album: "A Night at the Opera",
    duracion: 355,
    genero: "Rock",
    año: 1975,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 2,
    titulo: "Hotel California",
    artista: "Eagles",
    image: "https://via.placeholder.com/60",
    album: "Hotel California",
    duracion: 391,
    genero: "Rock",
    año: 1976,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 3,
    titulo: "Stairway to Heaven",
    artista: "Led Zeppelin",
    image: "https://via.placeholder.com/60",
    album: "Led Zeppelin IV",
    duracion: 482,
    genero: "Rock",
    año: 1971,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 4,
    titulo: "Imagine",
    artista: "John Lennon",
    image: "https://via.placeholder.com/60",
    album: "Imagine",
    duracion: 183,
    genero: "Pop",
    año: 1971,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 5,
    titulo: "Like a Rolling Stone",
    artista: "Bob Dylan",
    image: "https://via.placeholder.com/60",
    album: "Highway 61 Revisited",
    duracion: 370,
    genero: "Folk Rock",
    año: 1965,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 6,
    titulo: "Billie Jean",
    artista: "Michael Jackson",
    image: "https://via.placeholder.com/60",
    album: "Thriller",
    duracion: 294,
    genero: "Pop",
    año: 1982,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 7,
    titulo: "Purple Haze",
    artista: "Jimi Hendrix",
    image: "https://via.placeholder.com/60",
    album: "Are You Experienced",
    duracion: 170,
    genero: "Rock",
    año: 1967,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 8,
    titulo: "What's Going On",
    artista: "Marvin Gaye",
    image: "https://via.placeholder.com/60",
    album: "What's Going On",
    duracion: 233,
    genero: "Soul",
    año: 1971,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 9,
    titulo: "Respect",
    artista: "Aretha Franklin",
    image: "https://via.placeholder.com/60",
    album: "I Never Loved a Man",
    duracion: 147,
    genero: "Soul",
    año: 1967,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 10,
    titulo: "Good Vibrations",
    artista: "The Beach Boys",
    image: "https://via.placeholder.com/60",
    album: "Smiley Smile",
    duracion: 217,
    genero: "Pop",
    año: 1966,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 11,
    titulo: "Sweet Child O' Mine",
    artista: "Guns N' Roses",
    image: "https://via.placeholder.com/60",
    album: "Appetite for Destruction",
    duracion: 356,
    genero: "Rock",
    año: 1987,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 12,
    titulo: "Smells Like Teen Spirit",
    artista: "Nirvana",
    image: "https://via.placeholder.com/60",
    album: "Nevermind",
    duracion: 301,
    genero: "Grunge",
    año: 1991,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 13,
    titulo: "Wonderwall",
    artista: "Oasis",
    image: "https://via.placeholder.com/60",
    album: "(What's the Story) Morning Glory?",
    duracion: 258,
    genero: "Britpop",
    año: 1995,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 14,
    titulo: "Creep",
    artista: "Radiohead",
    image: "https://via.placeholder.com/60",
    album: "Pablo Honey",
    duracion: 238,
    genero: "Alternative Rock",
    año: 1992,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 15,
    titulo: "Enter Sandman",
    artista: "Metallica",
    image: "https://via.placeholder.com/60",
    album: "Metallica",
    duracion: 331,
    genero: "Metal",
    año: 1991,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 16,
    titulo: "I Want to Break Free",
    artista: "Queen",
    image: "https://via.placeholder.com/60",
    album: "The Works",
    duracion: 199,
    genero: "Rock",
    año: 1984,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 17,
    titulo: "Another Brick in the Wall",
    artista: "Pink Floyd",
    image: "https://via.placeholder.com/60",
    album: "The Wall",
    duracion: 399,
    genero: "Progressive Rock",
    año: 1979,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 18,
    titulo: "Don't Stop Believin'",
    artista: "Journey",
    image: "https://via.placeholder.com/60",
    album: "Escape",
    duracion: 251,
    genero: "Rock",
    año: 1981,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 19,
    titulo: "Every Breath You Take",
    artista: "The Police",
    image: "https://via.placeholder.com/60",
    album: "Synchronicity",
    duracion: 253,
    genero: "New Wave",
    año: 1983,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 20,
    titulo: "Beat It",
    artista: "Michael Jackson",
    image: "https://via.placeholder.com/60",
    album: "Thriller",
    duracion: 258,
    genero: "Pop",
    año: 1982,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 21,
    titulo: "Living on a Prayer",
    artista: "Bon Jovi",
    image: "https://via.placeholder.com/60",
    album: "Slippery When Wet",
    duracion: 249,
    genero: "Rock",
    año: 1986,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 22,
    titulo: "Sweet Dreams",
    artista: "Eurythmics",
    image: "https://via.placeholder.com/60",
    album: "Sweet Dreams",
    duracion: 216,
    genero: "Synth-pop",
    año: 1983,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 23,
    titulo: "Take On Me",
    artista: "a-ha",
    image: "https://via.placeholder.com/60",
    album: "Hunting High and Low",
    duracion: 225,
    genero: "Synth-pop",
    año: 1985,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 24,
    titulo: "Girls Just Want to Have Fun",
    artista: "Cyndi Lauper",
    image: "https://via.placeholder.com/60",
    album: "She's So Unusual",
    duracion: 239,
    genero: "Pop",
    año: 1983,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  },
  {
    id: 25,
    titulo: "Eye of the Tiger",
    artista: "Survivor",
    image: "https://via.placeholder.com/60",
    album: "Eye of the Tiger",
    duracion: 246,
    genero: "Rock",
    año: 1982,
    meGusta: false,
    reproducciones: 0,
    encolado: false
  }
];

const obtenerTodas = () => canciones;


const obtenerPorId = (id) => canciones.find(c => c.id === id);

const obtenerFavoritas = () => canciones.filter(c => c.meGusta);

const toggleMeGusta = (id) => {
    const cancion = obtenerPorId(id);
    if (cancion) {
        cancion.meGusta = !cancion.meGusta;
    }
    return cancion;
};

const marcarComoFavorita = (id) => {
    const cancion = obtenerPorId(id);
    if (cancion) {
        cancion.meGusta = true;
    }
    return cancion;
};

const quitarDeFavoritas = (id) => {
    const cancion = obtenerPorId(id);
    if (cancion) {
        cancion.meGusta = false;
    }
    return cancion;
};

const reproducir = (id) => {
    const cancion = obtenerPorId(id);
    if (cancion) {
        cancion.reproducciones++;
    }
    return cancion;
};

const obtenerPorGenero = (genero) => canciones.filter(c => c.genero === genero);

const obtenerPorArtista = (artista) => canciones.filter(c => c.artista === artista);

const buscar = (termino) => {
    const t = termino.toLowerCase();
    return canciones.filter(c =>
        c.titulo.toLowerCase().includes(t) ||
        c.artista.toLowerCase().includes(t)
    );
};

const obtenerGeneros = () => [...new Set(canciones.map(c => c.genero))];

const obtenerArtistas = () => [...new Set(canciones.map(c => c.artista))];

const obtenerAleatoria = () => canciones[Math.floor(Math.random() * canciones.length)];

const obtenerMasReproducidas = (limite = 10) =>
    [...canciones].sort((a, b) => b.reproducciones - a.reproducciones).slice(0, limite);

const obtenerCantidad = () => canciones.length;

const obtenerCantidadFavoritas = () => obtenerFavoritas().length; 

module.exports = {
    obtenerTodas,
    obtenerPorId,
    obtenerFavoritas,
    toggleMeGusta,
    marcarComoFavorita,
    quitarDeFavoritas,
    reproducir,
    obtenerPorGenero,
    obtenerPorArtista,
    buscar,
    obtenerGeneros,
    obtenerArtistas,
    obtenerAleatoria,
    obtenerMasReproducidas,
    obtenerCantidad,
    obtenerCantidadFavoritas
};