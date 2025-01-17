const sampleData = [
  "fred:joe",
  "joe:mary",
  "mary:bill",
  "mary:fred",
  "bill:anna",
  "anna:lana",
  "lana:typh",
  "typh:joe",
];

const convertToGraph = (sampleData) => {
  const graph = {};
  for (let i = 0; i < sampleData.length; i++) {
    const [xself, friend] = sampleData[i].split(":");
    Object.assign(graph, {
      [xself]: (graph[xself] ?? []).concat([friend]),
      [friend]: (graph[friend] ?? []).concat([xself]),
    });
  }
  return graph;
};

const calculatePath = (start, exptected) => {
  const dataToGraph = convertToGraph(sampleData);

  const distances = {};
  let currentLayer = [];
  let nextQueue = [];

  currentLayer.push(start);
  distances[start] = 0;

  // While there are nodes in the current layer queue
  while (currentLayer.length > 0) {
    // Get the current node from the current layer queue
    const currentNode = currentLayer.shift();
    // Iterate through the neighbors of the current node
    console.log(currentNode, "currentNode");

    //     for (const neighbor of graph[currentNode]) {
    //       // If the neighbor has not been visited yet
    //       if (!(neighbor in distances)) {
    //         nextQueue.push(neighbor);
    //         // Set the distance of the neighbor to the distance of the current node + 1
    //         distances[neighbor] = distances[currentNode] + 1;
    //       }
    //     }
    //     // If the current layer queue is empty, swap the current layer and next layer queues
    //     if (currentLayer.length === 0) {
    //       [currentLayer, nextQueue] = [nextQueue, currentLayer];
    //     }
  }
  //   console.log(distances, "distances");

  //   // Return the distances dictionary
  //   return distances[target];
};

console.log(calculatePath("fred", "anna"), "calculatePath");
