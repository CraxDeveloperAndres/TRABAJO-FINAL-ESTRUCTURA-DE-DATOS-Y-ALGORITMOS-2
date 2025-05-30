const { obtenerTodas, obtenerPorId } = require("../Models/Cancion");

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
    try {
      const canciones = obtenerTodas();
      
      console.log(`Inicializando grafo con ${canciones.length} canciones`);

      // Crear nodos
      for (const cancion of canciones) {
        this.nodos.set(cancion.id, new Nodo(cancion));
      }

      // Conectar nodos con canciones similares
      for (const cancion of canciones) {
        const nodo = this.nodos.get(cancion.id);
        let conexiones = 0;
        
        for (const otra of canciones) {
          if (otra.id !== cancion.id) {
            // Criterios de similitud más amplios
            const mismoGenero = otra.genero === cancion.genero;
            const mismoArtista = otra.artista === cancion.artista;
            const mismoAlbum = otra.album === cancion.album;
            const añoSimilar = Math.abs(otra.año - cancion.año) <= 3; // Años cercanos
            
            if (mismoGenero || mismoArtista || mismoAlbum || añoSimilar) {
              nodo.vecinos.add(this.nodos.get(otra.id));
              conexiones++;
            }
          }
        }
        
        console.log(`Canción "${cancion.titulo}" tiene ${conexiones} conexiones`);
      }
    } catch (error) {
      console.error('Error al inicializar el grafo:', error);
    }
  }

  obtenerRecomendaciones(id, limite = 5) {
    console.log(`Buscando recomendaciones para canción ID: ${id}`);
    
    const nodoInicial = this.nodos.get(id);
    if (!nodoInicial) {
      console.log(`No se encontró la canción con ID: ${id}`);
      return [];
    }

    console.log(`Canción base: "${nodoInicial.cancion.titulo}" - ${nodoInicial.cancion.artista}`);
    console.log(`Vecinos disponibles: ${nodoInicial.vecinos.size}`);

    const recomendaciones = [];
    const visitados = new Set([id]);

    // Algoritmo de recomendación mejorado
    // 1. Primero priorizar por artista
    for (const vecino of nodoInicial.vecinos) {
      if (!visitados.has(vecino.cancion.id) && 
          vecino.cancion.artista === nodoInicial.cancion.artista) {
        recomendaciones.push({
          ...vecino.cancion,
          razonRecomendacion: 'Mismo artista'
        });
        visitados.add(vecino.cancion.id);
        if (recomendaciones.length >= limite) break;
      }
    }

    // 2. Luego por género si no hemos alcanzado el límite
    if (recomendaciones.length < limite) {
      for (const vecino of nodoInicial.vecinos) {
        if (!visitados.has(vecino.cancion.id) && 
            vecino.cancion.genero === nodoInicial.cancion.genero) {
          recomendaciones.push({
            ...vecino.cancion,
            razonRecomendacion: 'Mismo género'
          });
          visitados.add(vecino.cancion.id);
          if (recomendaciones.length >= limite) break;
        }
      }
    }

    // 3. Finalmente, otras conexiones
    if (recomendaciones.length < limite) {
      for (const vecino of nodoInicial.vecinos) {
        if (!visitados.has(vecino.cancion.id)) {
          recomendaciones.push({
            ...vecino.cancion,
            razonRecomendacion: 'Conexión indirecta'
          });
          visitados.add(vecino.cancion.id);
          if (recomendaciones.length >= limite) break;
        }
      }
    }

    console.log(`Recomendaciones encontradas: ${recomendaciones.length}`);
    recomendaciones.forEach((rec, index) => {
      console.log(`${index + 1}. "${rec.titulo}" - ${rec.artista} (${rec.razonRecomendacion})`);
    });

    return recomendaciones;
  }

  // Método para obtener estadísticas del grafo
  obtenerEstadisticas() {
    const stats = {
      totalNodos: this.nodos.size,
      conexionesPorNodo: {},
      promedioConexiones: 0
    };

    let totalConexiones = 0;
    for (const [id, nodo] of this.nodos) {
      const numConexiones = nodo.vecinos.size;
      stats.conexionesPorNodo[id] = {
        cancion: nodo.cancion.titulo,
        conexiones: numConexiones
      };
      totalConexiones += numConexiones;
    }

    stats.promedioConexiones = totalConexiones / this.nodos.size;
    return stats;
  }

  // Método para reinicializar el grafo (útil si los datos cambian)
  reinicializar() {
    this.nodos.clear();
    this._inicializar();
  }
}

// Crear instancia única del grafo
let grafo = null;

const obtenerGrafo = () => {
  if (!grafo) {
    grafo = new GrafoRecomendaciones();
  }
  return grafo;
};

// Función principal de recomendaciones
const obtenerRecomendaciones = (id, limite = 5) => {
  try {
    const grafoInstance = obtenerGrafo();
    return grafoInstance.obtenerRecomendaciones(id, limite);
  } catch (error) {
    console.error('Error al obtener recomendaciones:', error);
    return [];
  }
};

// Función para obtener estadísticas (útil para debugging)
const obtenerEstadisticasGrafo = () => {
  try {
    const grafoInstance = obtenerGrafo();
    return grafoInstance.obtenerEstadisticas();
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return null;
  }
};

// Función para forzar reinicialización
const reinicializarGrafo = () => {
  try {
    grafo = new GrafoRecomendaciones();
    return true;
  } catch (error) {
    console.error('Error al reinicializar grafo:', error);
    return false;
  }
};

module.exports = { 
  obtenerRecomendaciones,
  obtenerEstadisticasGrafo,
  reinicializarGrafo
};