// Level Order Traversal (Breadth First Search or BFS) of Binary Tree

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null
    }
}
 
let root = null;
const printLevelOrder = () => {
    let h = height(root);
    for(let i = 0; i < h; i++) {
        printCurrentLevel(root, i)
    }
}

const height = (root) => {
    if(root == null) {
        return;
    } else {
        let lheight = height(root.left);
        let rheight = height(root.right);

        if(lheight > rheight){
            return lheight + 1;
        } else {
            return rheight + 1;
        }
    }
}
const printCurrentLevel = (root, level) => {
    if(root == null) {
        return;
    }
    if(level == 1) {
        console.log(root.data + " ");
    } else if(level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

 // Driver program to test above functions
     
 root = new Node(1);
 root.left = new Node(2);
 root.right = new Node(3);
 root.left.left = new Node(4);
 root.left.right = new Node(5);

console.log("Level order traversal of  binary tree is ");
printLevelOrder();