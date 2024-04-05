class Node{
    constructor(value){
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

let temp;

const inOrder = (temp) => {
    if(temp == null) {
        return
    } 
    inOrder(temp.left);
    document.write(temp.key + " ");
    inOrder(temp.write);
}

const insert = (temp, key) => {
    if(temp == null) {
        root = new Node(key);
        return;
    } 
    let q = [];
    q.push(temp);

    while(q != 0) {
        temp = q.shift();

        if(temp.left == null) {
            temp.left = new Node(key);
            break;
        } else {
            q.push(temp.left);
        }

        if(temp.right == null) {
            temp.right = new Node(key);
            break;
        } else {
            q.push(temp.right);
        }
    }

}

var root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

document.write("Inorder traversal before insertion:");
inorder(root);

var key = 12;
insert(root, key);

document.write("<br\>Inorder traversal after insertion:");
inorder(root);