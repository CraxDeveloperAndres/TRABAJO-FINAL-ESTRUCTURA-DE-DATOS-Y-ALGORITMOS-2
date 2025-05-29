const canciones = [
  {
    id: 1,
    titulo: "BOKéTE",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 195,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 2,
    titulo: "KETU TeCRÉ",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 180,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 3,
    titulo: "Moscow Mule",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b2734d62d84d77eb89e7b3b1ce97",
    album: "Un Verano Sin Ti",
    duracion: 242,
    genero: "Reggaeton",
    año: 2022,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 4,
    titulo: "Neverita",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 210,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 5,
    titulo: "NO ME QUIERO CASAR",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 185,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 6,
    titulo: "TURISTA",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 198,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 7,
    titulo: "VOY A LLEVARTE PA PR",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273c6e0f73bea99c25e82c5b3e2",
    album: "DeBÍ TiRAR MáS FOToS",
    duracion: 205,
    genero: "Reggaeton",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 8,
    titulo: "Light Switch",
    artista: "Charlie Puth",
    image: "https://i.scdn.co/image/ab67616d0000b273032f8f5c619c1c3bc3af3b2f",
    album: "CHARLIE",
    duracion: 188,
    genero: "Pop",
    año: 2022,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 9,
    titulo: "DO DO",
    artista: "DAHSOL",
    image: "https://i.scdn.co/image/ab67616d0000b273a4b5e5c7b6b8d9f2a3c1e8f4",
    album: "DO DO",
    duracion: 175,
    genero: "K-Pop",
    año: 2025,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 10,
    titulo: "Luna",
    artista: "Feid & ATL Jacob",
    image: "https://i.scdn.co/image/ab67616d0000b2734d62d84d77eb89e7b3b1ce97",
    album: "Ferxxocalipsis",
    duracion: 220,
    genero: "Reggaeton",
    año: 2024,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 11,
    titulo: "tadow",
    artista: "FKJ & Masego",
    image: "https://i.scdn.co/image/ab67616d0000b273e5e7b0b1b2b4c9f8a7d6e3f2",
    album: "tadow",
    duracion: 285,
    genero: "Electronic",
    año: 2017,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 12,
    titulo: "Enemy",
    artista: "Imagine Dragons x J.I.D",
    image: "https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13",
    album: "Mercury - Acts 1 & 2",
    duracion: 174,
    genero: "Pop Rock",
    año: 2021,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 13,
    titulo: "Heartless",
    artista: "Jacob Tillberg",
    image: "https://i.scdn.co/image/ab67616d0000b273b5b2b8c9f4a3d7e6f1c8a9b2",
    album: "Heartless",
    duracion: 195,
    genero: "Electronic",
    año: 2019,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 14,
    titulo: "Woman",
    artista: "Joel Culpepper",
    image: "https://i.scdn.co/image/ab67616d0000b273d4f8b2a1c5e9f6a3b7d2e8c1",
    album: "Sgt. Culpepper",
    duracion: 225,
    genero: "Soul",
    año: 2019,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 15,
    titulo: "Just the two of Us",
    artista: "Bill Withers",
    image: "https://i.scdn.co/image/ab67616d0000b273c8f7b9a2d6e5f4b1a9c3e7d2",
    album: "Just As I Am",
    duracion: 258,
    genero: "Soul",
    año: 1981,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 16,
    titulo: "Peaches",
    artista: "Justin Bieber ft. Daniel Caesar & Giveon",
    image: "https://i.scdn.co/image/ab67616d0000b273e5e7b0b1b2b4c9f8a7d6e3f2",
    album: "Justice",
    duracion: 198,
    genero: "Pop",
    año: 2021,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 17,
    titulo: "Not Like Us",
    artista: "Kendrick Lamar",
    image: "https://i.scdn.co/image/ab67616d0000b273f4b8a2d1c6e9f5a3b7d2e8c1",
    album: "gnx",
    duracion: 274,
    genero: "Hip Hop",
    año: 2024,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 18,
    titulo: "La Noche Mas Linda",
    artista: "La Noche Mas Linda",
    image: "https://i.scdn.co/image/ab67616d0000b273b3c5d7f2a9e8f1c4b6d9a2e5",
    album: "Single",
    duracion: 210,
    genero: "Latin Pop",
    año: 2023,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 19,
    titulo: "Sugar",
    artista: "Maroon 5",
    image: "https://i.scdn.co/image/ab67616d0000b273e6b1a2f5c8d9e4b7a3c6f1d2",
    album: "V",
    duracion: 235,
    genero: "Pop Rock",
    año: 2014,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 20,
    titulo: "Que ir",
    artista: "Me Tengo Que ir",
    image: "https://i.scdn.co/image/ab67616d0000b273a4b5e5c7b6b8d9f2a3c1e8f4",
    album: "Single",
    duracion: 180,
    genero: "Latin",
    año: 2024,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 21,
    titulo: "¿A Dónde Vamos?",
    artista: "Morat",
    image: "https://i.scdn.co/image/ab67616d0000b273d7f2c9a4e6b1f5a8b3c7d2e9",
    album: "¿A Dónde Vamos?",
    duracion: 248,
    genero: "Latin Pop",
    año: 2021,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 22,
    titulo: "OMG",
    artista: "NewJeans",
    image: "https://i.scdn.co/image/ab67616d0000b273f8c1b4a5d9e7f2b6a3c8d1e4",
    album: "Get Up",
    duracion: 195,
    genero: "K-Pop",
    año: 2023,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 23,
    titulo: "Solo Pienso en Ti",
    artista: "Paulo Londra",
    image: "https://i.scdn.co/image/ab67616d0000b273c2e8f4b1a7d5f9b3c6e2a8d1",
    album: "Back",
    duracion: 215,
    genero: "Reggaeton",
    año: 2022,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 24,
    titulo: "Circles",
    artista: "Post Malone",
    image: "https://i.scdn.co/image/ab67616d0000b273b1a5c8f4e7d2f9b6a3c7e1d4",
    album: "Hollywood's Bleeding",
    duracion: 215,
    genero: "Pop",
    año: 2019,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 25,
    titulo: "Sweet but Psycho",
    artista: "Post Malone & Lee Sunflower",
    image: "https://i.scdn.co/image/ab67616d0000b273e5e7b0b1b2b4c9f8a7d6e3f2",
    album: "beerbongs & bentleys",
    duracion: 238,
    genero: "Pop",
    año: 2018,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 26,
    titulo: "Staring",
    artista: "Staring",
    image: "https://i.scdn.co/image/ab67616d0000b273a4b5e5c7b6b8d9f2a3c1e8f4",
    album: "Single",
    duracion: 165,
    genero: "Indie",
    año: 2024,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 27,
    titulo: "Lay It Down",
    artista: "Steelo",
    image: "https://i.scdn.co/image/ab67616d0000b273f2c8b4a1d6e9f5a3b7d2e8c1",
    album: "Lay It Down",
    duracion: 192,
    genero: "R&B",
    año: 2021,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 28,
    titulo: "Coldplay - Ma Maitresse",
    artista: "Stromae",
    image: "https://i.scdn.co/image/ab67616d0000b273c5d7f2a9e8f1c4b6d9a2e5b3",
    album: "Multitude",
    duracion: 225,
    genero: "Electronic",
    año: 2022,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 29,
    titulo: "Lo siento BB",
    artista: "Tiiny & Bad Bunny & Julieta Venegas",
    image: "https://i.scdn.co/image/ab67616d0000b273a7d2e8c1f4b9a5c6d9e2f3b8",
    album: "Bad bunny",
    duracion: 208,
    genero: "Reggaeton",
    año: 2023,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 30,
    titulo: "Tu con El",
    artista: "Frankie Ruiz",
    image: "https://i.scdn.co/image/ab67616d0000b273b8c2e5f1a4d7f9c3b6e9a2d5",
    album: "Single",
    duracion: 185,
    genero: "Latin Pop",
    año: 2024,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 31,
    titulo: "Stressed Out",
    artista: "Twenty One Pilots",
    image: "https://i.scdn.co/image/ab67616d0000b273de03bfc2991fd5bcfde65ba3",
    album: "Blurryface",
    duracion: 202,
    genero: "Alternative Rock",
    año: 2015,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 32,
    titulo: "FANCY MV",
    artista: "TWICE",
    image: "https://i.scdn.co/image/ab67616d0000b273c1f4b8a5d9e7f2b6a3c8d1e4",
    album: "FANCY YOU",
    duracion: 218,
    genero: "K-Pop",
    año: 2019,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
  },
  {
    id: 33,
    titulo: "What You Won't Do for Love",
    artista: "Louis Amstrong",
    image: "https://i.scdn.co/image/ab67616d0000b273f5a3b7d2e8c1a4c7b9e2d5f8",
    album: "Single",
    duracion: 245,
    genero: "Soul",
    año: 1978,
    meGusta: false,
    reproducciones: 0,
    encolado: false,
    audioUrl: "/audio/bad-bunny-moscow-mule.mp3"
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