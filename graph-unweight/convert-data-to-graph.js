// ["fred:joe", "joe:mary", "mary:bill", "mary:fred"];

/**
 * graph data values example:
 * fred: [joe, mary],
 * joe: [fred, mary],
 * mary: [joe, fred, bill],
 * bill: [mary]
 * */

export const convertToGraph = (sampleData) => {
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
