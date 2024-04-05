//Construct Binary Tree from given Parent Array representation
//User function Template for javascript

/**
 * @param {number[]} parent
 * @param {number} n
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let root = null;
const createNode = (parent, i, created) => {
    if(created[i] != null) {
        return;
    }

    created[i] = new Node(i);

    if(parent[i] == -1){
        root = created[i];
        return;
    }
    
    if(created[parent[i]] == null) {
        createNode(parent, parent[i], created)
    }

    let p = created[parent[i]];

    if(p.left == null) {
        p.left = created[i];
    } else {
        p.right = created[i];
    }
}

const createTree = (parent, n) => {
    let created = new Array(n);
    for(let i = 0; i < n; i++) {
        created[i] = null;
    }

    for(let i = 0; i < n; i++) {
        createNode(parent, i, created);
    }
}
 const inorder = (node) => {
    if(node != null) {
        inorder(node.left);
        document.write(node.key + ' ');
        inorder(node.right);
    }
 }

let parent = [-1, 0, 0, 1, 1, 3, 5];
let n = parent.length;
let node = createTree(parent, n);
document.write("Inorder traversal of " + 
                      "constructed tree<br>");
inorder(node);
