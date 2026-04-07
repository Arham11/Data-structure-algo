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

  removeEdge(v1, v2) {
    if (this.addjacaentList[v1] && this.addjacaentList[v2]) {
      this.addjacaentList[v1] = this.addjacaentList[v1].filter((v) => v !== v2);
      this.addjacaentList[v2] = this.addjacaentList[v2].filter((v) => v !== v1);
      return this;
    }
    throw new Error("One or both vertices not found");
  }

  removeVertex(v1) {
    if (!this.addjacaentList[v1]) return undefined;
    const removedData = this.addjacaentList[v1];
    // Only loop through vertices that are actually connected to v1 because the connection is two way
    while (this.addjacaentList[v1].length) {
      const adjacentVertex = this.addjacaentList[v1].pop();
      this.removeEdge(v1, adjacentVertex);
    }
    delete this.addjacaentList[v1];
    return { [v1]: removedData };
  }
}

const city = new Graph();

city.addVertex("Tokyo");
city.addVertex("Dallas");
city.addVertex("Aspen");
city.addVertex("Hong Kong");
city.addVertex("Los Angeles");

city.addEdge("Tokyo", "Dallas");
city.addEdge("Aspen", "Dallas");
city.addEdge("Tokyo", "Hong Kong");
city.addEdge("Dallas", "Hong Kong");
city.addEdge("Los Angeles", "Hong Kong");

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
