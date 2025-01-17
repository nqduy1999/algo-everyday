// // Function to find shortest distance between start and end nodes using BFS
// // function findShortestDistance(graph, start, end) {
// //   // Initialize the current layer queue and next layer queue
// //   let currentLayer = [start];
// //   let nextLayer = [];

// //   // Initialize the distance of current layer to 0
// //   let distance = 0;

// //   // Initialize the visited set
// //   let visited = new Set();

// //   // Add the start node to the visited set
// //   visited.add(start);

// //   // Traverse the graph using BFS
// //   while (currentLayer.length > 0) {
// //     // Iterate through the current layer
// //     for (let node of currentLayer) {
// //       // If the current node is the end node, return the distance
// //       if (node === end) {
// //         return distance;
// //       }

// //       // Iterate through the neighbors of the current node
// //       for (let neighbor of graph[node]) {
// //         // If the neighbor is not visited,
// //         // add it to the next layer and the visited set
// //         if (!visited.has(neighbor)) {
// //           nextLayer.push(neighbor);
// //           visited.add(neighbor);
// //         }
// //       }
// //     }

// //     // Move to the next layer and increment the distance
// //     currentLayer = nextLayer;
// //     nextLayer = [];
// //     distance += 1;
// //   }

// //   // If the end node is not found, return -1
// //   return -1;
// // }

// // // Example usage
// // const graph = {
// //   A: ["B", "C"],
// //   B: ["A", "C", "D"],
// //   C: ["A", "B", "E", "F"],
// //   D: ["B"],
// //   E: ["C"],
// //   F: ["C"],
// // };

// // console.log("Shortest Distance Between A and F is:");
// // console.log(findShortestDistance(graph, "A", "F"));

function bfsShortestDistance(graph, start, target) {
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
    for (const neighbor of graph[currentNode]) {
      // If the neighbor has not been visited yet
      if (!(neighbor in distances)) {
        nextQueue.push(neighbor);
        // Set the distance of the neighbor to the distance of the current node + 1
        distances[neighbor] = distances[currentNode] + 1;
      }
    }
    // If the current layer queue is empty, swap the current layer and next layer queues
    if (currentLayer.length === 0) {
      [currentLayer, nextQueue] = [nextQueue, currentLayer];
    }
  }
  console.log(distances, "distances");

  // Return the distances dictionary
  return distances[target];
}

// const graph = {
//   fred: ["mary", "joe"],
//   mary: ["joe", "fred", "bill"],
//   joe: ["mary", "fred"],
//   bill: ["mary"],
// };

// ["fred:joe", "joe:mary", "mary:bill", "mary:fred"];

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function (s, t) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   while (pointer2 > t.length - 1) {
//     if (s[pointer1] === t[pointer2]) {
//       pointer1++;
//       pointer2++;
//     } else {
//       pointer2++;
//     }
//     console.log(pointer1, "pointer1");
//     if (pointer1 > s.length - 1) return true;
//   }

//   return false;
// };

// console.log(isSubsequence("abc", "ahbgdc"));
