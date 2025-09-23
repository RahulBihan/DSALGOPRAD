// Graph represented as adjacency list
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function bfs(start, graph){
const queue = [start];
const visited = new Set();
const result = [];
while(queue.length > 0){
    const node = queue.shift();
    if(!visited.has(node)){
        visited.add(node);
        result.push(node);
    }
    for(const neighbor of graph[node]){
        if(!visited.has(neighbor)){
            queue.push(neighbor);
        }
    }
}
return result;
}

console.log(bfs("A", graph)); 