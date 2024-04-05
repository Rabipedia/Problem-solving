const findLevel = (N, edges, X) => {
    let maxVertex = 0;
    for(let i=0; i<edges.length; i++) {
        let it = edges[i];
        let a = Math.max(it[0], it[1]);
        maxVertex = Math.max(maxVertex, a)
    }

    let adj = [];
    for(let i=0; i<maxVertex+1; i++){
        adj.push([]);
    }

    for(let i = 0; i<edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }

    if(X > maxVertex || adj[X].length == 0) {
        return -1;
    }

    let q = [];
    q.push(0);
    let level = 0;

    let visited = [];
    for(let i = 0; i<maxVertex+1; i++){
        visited.push(0)
    }
    visited[0] = 1;

    while(q.length > 0) {
        let sz = q.length;
        while(sz--) {
            let currentNode = q[0];
            q.shift();
            if(currentNode == X) {
                return level
            } 

            for(let k = 0; k < adj[currentNode].length; i++) {
                let it = adj[currentNode][k];
                if(visited[it] == o) {
                    q.push(it);
                    visited[it] = 1;
                }
            }
        }
        level++;
    }
    
}

let V = 5;
let edges
    = [ [ 0, 1 ], [ 0, 2 ], [ 1, 3 ], [ 2, 4 ] ];
let X = 3;
 
// Function call
let level = findLevel(V, edges, X);
console.log(level);