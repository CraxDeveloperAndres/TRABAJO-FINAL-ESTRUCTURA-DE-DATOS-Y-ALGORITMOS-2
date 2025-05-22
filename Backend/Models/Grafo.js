const {
  obtenerTodas,
  obtenerPorId,
} = require("../Models/Cancion"); 

class Nodo {
  constructor(cancion) {
    this.cancion = cancion;
    this.vecinos = new Set();
  }
}

class GrafoRecomendaciones {
  constructor() {
    this.nodos = new Map(); // clave: id, valor: Nodo
    this._inicializar(); // construcción automática al crear la instancia
  }

  _inicializar() {
    const canciones = obtenerTodas();

    // Crear nodos
    for (const cancion of canciones) {
      this.nodos.set(cancion.id, new Nodo(cancion));
    }

    // Conectar nodos con canciones similares (mismo género o artista)
    for (const cancion of canciones) {
      const nodo = this.nodos.get(cancion.id);
      for (const otra of canciones) {
        if (
          otra.id !== cancion.id &&
          (otra.genero === cancion.genero || otra.artista === cancion.artista)
        ) {
          nodo.vecinos.add(this.nodos.get(otra.id));
        }
      }
    }
  }

  obtenerRecomendaciones(id, limite = 5) {
    const nodoInicial = this.nodos.get(id);
    if (!nodoInicial) return [];

    const recomendaciones = new Set();
    const visitados = new Set([id]);

    for (const vecino of nodoInicial.vecinos) {
      if (!visitados.has(vecino.cancion.id)) {
        recomendaciones.add(vecino.cancion);
        visitados.add(vecino.cancion.id);
        if (recomendaciones.size >= limite) break;
      }
    }

    return [...recomendaciones];
  }
}

const grafo = new GrafoRecomendaciones();

// Solo exportas esta función
const obtenerRecomendaciones = (id, limite = 5) => grafo.obtenerRecomendaciones(id, limite);

module.exports = { obtenerRecomendaciones }; 