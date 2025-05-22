// ============= ESTRUCTURA DE LISTA DOBLE =============
class NodoListaDoble {
    constructor(cancion) {
        this.cancion = cancion;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoble {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamaño = 0;
        this.cancionActual= null;
    }

    // Agregar al final
    agregar(cancion) {
        const nuevoNodo = new NodoListaDoble(cancion);

        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
            this.cancionActual = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
        this.tamaño++;
        return nuevoNodo.cancion;
    }

    // Agregar al inicio
    agregarAlInicio(cancion) {
        const nuevoNodo = new NodoListaDoble(cancion);

        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
            this.cancionActual = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza.anterior = nuevoNodo;
            this.cabeza = nuevoNodo;
        }
        this.tamaño++;
    }

    // Obtener la canción actual
    obtenerCancionActual() {
        return this.cancionActual ? this.cancionActual.cancion : null;
    }

    // Ir a la siguiente canción
    siguienteCancion() {
        if (this.cancionActual && this.cancionActual.siguiente) {
            this.cancionActual = this.cancionActual.siguiente;
        }
        return this.obtenerCancionActual();
    }

    // Ir a la canción anterior
    cancionAnterior() {
        if (this.cancionActual && this.cancionActual.anterior) {
            this.cancionActual = this.cancionActual.anterior;
        }
        return this.obtenerCancionActual();
    }

    // Buscar canción por ID
    buscar(id) {
        let actual = this.cabeza;
        while (actual !== null) {
            if (actual.cancion.id === id) {
                return actual.cancion;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    // Eliminar canción por ID
    eliminar(id) {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.cancion.id === id) {
                // Si es el único nodo
                if (actual === this.cabeza && actual === this.cola) {
                    this.cabeza = null;
                    this.cola = null;
                }
                // Si es el primer nodo
                else if (actual === this.cabeza) {
                    this.cabeza = actual.siguiente;
                    this.cabeza.anterior = null;
                }
                // Si es el último nodo
                else if (actual === this.cola) {
                    this.cola = actual.anterior;
                    this.cola.siguiente = null;
                }
                // Si está en el medio
                else {
                    actual.anterior.siguiente = actual.siguiente;
                    actual.siguiente.anterior = actual.anterior;
                }

                this.tamaño--;
                return actual.cancion;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    // Obtener todas las canciones
    obtenerTodasLista() {
        const canciones = [];
        let actual = this.cabeza;
        while (actual !== null) {
            canciones.push(actual.cancion);
            actual = actual.siguiente;
        }
        return canciones;
    }

    
    // Filtrar canciones
    filtrar(criterio) {
        const resultado = [];
        let actual = this.cabeza;
        while (actual !== null) {
            if (criterio(actual.cancion)) {
                resultado.push(actual.cancion);
            }
            actual = actual.siguiente;
        }
        return resultado;
    }

    estaVacia() {
        return this.cabeza === null;
    }

    obtenerTamaño() {
        return this.tamaño;
    }
}

module.exports = ListaDoble;
