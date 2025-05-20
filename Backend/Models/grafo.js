class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // para grafo no dirigido
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter(v => v !== vertex2)
      );
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
      );
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;

    for (const adjacentVertex of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex);
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getEdges(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }
}

module.exports = Graph;
