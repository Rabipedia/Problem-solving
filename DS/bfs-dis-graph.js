// BFS for Disconnected Graph.

class Queue {
    constructor(){
        this.items = []
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
        if(this.items.length > 0){
            return this.items.shift();
        }
    }

    front() {
        return this.items[0];
    }

    empty() {
        return this.items.length == 0;
    }
}

const addEdge = (edges, f, s) => {
    edges[f][s] = 1;
}

const printBFS = (edges, V, start, visited) => {
    if(V == 0) return;
    let BFS = new Queue();
    BFS.push(start);
    visited[start] = 1;

    while(!BFS.empty()) {
        let data = BFS.front();
        BFS.pop();
        console.log(data);

        for(let i=0; i < V; i++) {
            if(edges[data][i] == 1){
                if(visited[i] == 0) {
                    BFS.push(i);
                    visited[i] = 1;
                }
            }
        }
    }
}

const bfsHelper = (edges, V) => {
    if(V == 0) return;

    let visited = new Array(V);
    for(let i = 0; i<V; i++) {
        visited[i] = 0;
    }

    for(let i = 0; i<V; i++) {
        if(visited[i] == 0) {
            printBFS(edges, V, i, visited);
        }
    }
}

let V = 5;
let E = 6;

if(E == 0) {
    for(let i = 0; i<V; i++) {
        console.log(i)
    }
}

let edges = Array.from(Array(V), () => new Array(V));

for(let i = 0; i<V; i++) {
    for (let j = 0; j<V; j++) {
        edges[i][j] = 0;
    }
}

addEdge(edges, 0, 4); 
addEdge(edges, 1, 2); 
addEdge(edges, 1, 3); 
addEdge(edges, 1, 4); 
addEdge(edges, 2, 3); 
addEdge(edges, 3, 4); 

bfsHelper(edges, V);

/**
 * The time complexity of this algorithm is O(V + E), 
 * where V is the number of vertices and E is the number of edges.
 * This is because we traverse each vertex and each edge once. 

    The space complexity is O(V), since we use an array to store the visited vertices.
 */