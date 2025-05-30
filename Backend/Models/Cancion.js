const canciones = [
  {
    id: 1,
    titulo: "BOKéTE",
    artista: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411",
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
    image: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411",
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
    image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
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
    image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
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
    image: "https://i.scdn.co/image/ab67616d0000b2732ea1f035463d11e1fc3b193d",
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
    image: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411",
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
    image: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411",
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
    image: "https://i.scdn.co/image/ab67616d00001e02101337d65122832b36bfc928",
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
    image: "https://i.scdn.co/image/ab67616d00001e022dc18ebdf32bef5e1ffa06de",
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
    image: "https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242",
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
    image: "https://i.scdn.co/image/ab67616d0000b273383ee7319d30024145173544",
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
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Enemy_Imagine_Dragons.jpg",
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
    image: "https://i.scdn.co/image/ab67616d0000b273ad1327360fe3d8d7f14704ab",
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
    image: "https://cdn-images.dzcdn.net/images/cover/f6e3474c7789d01997769d2e400661b7/0x1900-000000-80-0-0.jpg",
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
    image: "https://i.scdn.co/image/ab67616d0000b273472fbc1d5743c7d3c75b9ec0",
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
    image: "https://i.scdn.co/image/ab6761610000f1788ae7f2aaa9817a704a87ea36",
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
    image: "https://i1.sndcdn.com/artworks-UPEAvUqrkz6a-0-t1080x1080.jpg",
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
    image: "https://i.scdn.co/image/ab67616d0000b273d008c52b162f4a26e4bf5ba1",
    album: "Single",
    duracion: 210,
    genero: "Latin ",
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
    image: "https://i.scdn.co/image/ab67616d0000b2735430b6be862e01be82a50bc8",
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
    titulo: "Me tengo que ir",
    artista: "Adolecentes orquesta",
    image: "https://i.scdn.co/image/ab67616d0000b273ff2af592feefb5483b783344",
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
    image: "https://i.scdn.co/image/ab67616d00001e0202bf1057986d3d64dec7e66a",
    album: "¿A Dónde Vamos?",
    duracion: 248,
    genero: "Latin",
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
    image: "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01",
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
    image: "https://i.scdn.co/image/ab67616d0000b273c8cd8e9d4823384868c6cf1b",
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
    image: "https://i.scdn.co/image/ab67616d0000b273e3f4d9cba32124a0afd8261f",
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
    titulo: "Sunflower",
    artista: "Post Malone & Lee Sunflower",
    image: "https://i1.sndcdn.com/artworks-V49NaARAJOZl-0-t500x500.jpg",
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
    image: "https://i.scdn.co/image/ab67616d0000b273edbb4fdbd873767ddac155ef",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFygk4Z-mIJK6Oko6-b-bXTM9Hkj3V0EBXA&s",
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
    image: "https://itsoundsalternative.com/wp-content/uploads/2022/02/Arcane_League_of_Legends_Serie_de_TV-624235408-large-1.jpg",
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
    image: "https://i.scdn.co/image/ab67616d0000b273abe9c2b5f03653d6b87696e6",
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
    image: "https://i.scdn.co/image/ab67616d0000b273d965b2ca138d93811bf72a71",
    album: "Latin",
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
    image: "https://i.scdn.co/image/ab67616d0000b2732df0d98a423025032d0db1f7",
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
    image: "https://m.media-amazon.com/images/M/MV5BZjJiZDExYzctOWEzMC00ZWZhLWIwODAtZTE1Mzc2ZGRhZjBkXkEyXkFqcGc@._V1_.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2ih7CoWEN0UKm-Ayy11s2limn3X58zM4WA&s",
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