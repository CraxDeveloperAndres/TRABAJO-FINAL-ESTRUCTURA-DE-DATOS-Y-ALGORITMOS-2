const totalSongs = [
  {
    id: 1,
    titulo: "Caminos",
    artista: "Lago Sur",
    image: "https://picsum.photos/60",
    album: "Raíces",
    duracion: 215,
    genero: "Folk",
    año: 2021,
    meGusta: true,
    encolado: true,
    reproducciones: 0,
  },
  {
    id: 2,
    titulo: "Noches",
    artista: "Estrella del Norte",
    image: "https://picsum.photos/60",
    album: "Estrellas Fugaces",
    duracion: 190,
    genero: "Pop",
    año: 2020,
    meGusta: true,
    encolado: true,
    reproducciones: 0,
  },
  {
    id: 3,
    titulo: "Horizonte",
    artista: "Mar Abierto",
    image: "https://picsum.photos/60",
    album: "Amanecer",
    duracion: 230,
    genero: "Indie",
    año: 2019,
    meGusta: false,
    encolado: false,
    reproducciones: 0,
  },
  {
    id: 4,
    titulo: "Silencio",
    artista: "La Bruma",
    image: "https://picsum.photos/60",
    album: "Reflejos",
    duracion: 185,
    genero: "Alternativo",
    año: 2022,
    meGusta: false,
    encolado: false,
    reproducciones: 0,
  },
  {
    id: 5,
    titulo: "Despertar",
    artista: "Amanecer Azul",
    image: "https://picsum.photos/60",
    album: "Nuevos Comienzos",
    duracion: 200,
    genero: "Rock",
    año: 2023,
    meGusta: true,
    encolado: false,
    reproducciones: 0,
  },
];

export const backService = {
  getAll: () => totalSongs,
  getQueue: () => totalSongs.filter((s) => s.encolado),
  getLiked: () => totalSongs.filter((s) => s.meGusta),
  toggleLike: (id) => {
    const song = totalSongs.find((s) => s.id === id);
    if (song) song.meGusta = !song.meGusta;
  },
  toggleQueue: (id) => {
    const song = totalSongs.find((s) => s.id === id);
    if (song) song.encolado = !song.encolado;
  },
  incrementPlayCount: (id) => {
    const song = totalSongs.find((s) => s.id === id);
    if (song) song.reproducciones++;
  },
};