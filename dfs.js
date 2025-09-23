// Graph represented as adjacency list
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function dfs(start, graph){
const stack = [start];
const visited = new Set();
const result = [];
while(stack.length > 0){
    const node = stack.pop();
    if(!visited.has(node)){
        visited.add(node);
        result.push(node);
    }
    for(const neighbor of graph[node].reverse()){
        if(!visited.has(neighbor)){
            stack.push(neighbor);
        }
    }
}
return result;
}

console.log(dfs("A", graph)); 