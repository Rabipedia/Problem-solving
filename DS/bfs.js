/**
 * The Breadth First Search (BFS) algorithm is used to search
 * a graph data structure for a node that meets a set of criteria. 
 * It starts at the root of the graph and visits all nodes at the 
 * current depth level before moving on to the nodes at the next
 * depth level.
 */

class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for(let i=0; i < v; i++){
            this.adj[i] = [];
        }
    }

    // Function to add an edge into the graph
    addEdge(v, w) {
        // Add w to v's list.
        this.adj[v].push(w);
    }

    BFS(s) {
        // Mark all the vertices as not visited(By default
        // set as false)
        let visited = new Array(this.V);
        for(let i =0; i<this.V; i++){
            visited[i] = false;
        }

        let queue = [];
        visited[s] = true;
        queue.push(s);
       

        while(queue.length > 0) {
            s = queue[0];
            console.log(s +" ");
            queue.shift();

            this.adj[s].forEach((adjacent, i) => {
                if(!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }

            })
        }

    }
}

g = new Graph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
     
    console.log("Following is Breadth First Traversal " +
                "(starting from vertex 2) ");
     
    g.BFS(2);