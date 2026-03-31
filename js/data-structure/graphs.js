class Graph {
  constructor() {
    this.addjacaentList = {};
  }
  addVertex(vertex) {
    if (!this.addjacaentList[vertex]) {
      this.addjacaentList[vertex] = [];
      return this;
    } else {
      throw new Error("Vertex is already present");
    }
  }
  addEdge(v1, v2) {
    this.addjacaentList[v1].push(v2);
    this.addjacaentList[v2].push(v1);
  }
}

const city = new Graph();

city.addVertex("Tokyo");
city.addVertex("Dallas");
city.addVertex("Aspen");

city.addEdge("Tokyo", "Dallas");
city.addEdge("Aspen", "Dallas");

// {
//     "Tokyo": [
//         "Dallas"
//     ],
//     "Dallas": [
//         "Tokyo",
//         "Aspen"
//     ],
//     "Aspen": [
//         "Dallas"
//     ]
// }
