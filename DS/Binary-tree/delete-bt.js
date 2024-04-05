class Node{
    constructor(value) {
        this.key = value;
        this.right = null;
        this.left = null;
    }
}

let root;
let temp = root;

const inOrder = (temp) => {
    if(temp == null) return;

    inOrder(temp.left);
    document.write(temp.key + " ");
    inOrder(temp.right);
}

const deleteDeepest = (root, delNode) => {
    let q = [];
    q.push(root);
    let temp = null;

    while(q.length > 0) {
        if(temp == delNode) {
            temp = null;
            return;
        }

        if(temp.right != null){
            if(temp.right == delNode) {
                temp.right = null;
                return;
            } else {
                q.push(temp.right);
            }
        }
        if(temp.left != null) {
            if(temp.left == delNode) {
                temp.left = null;
                return;
            } else {
                q.push(temp.left);
            }
        }

    }    
}

const Delete = (root, key) => {
    if(root == null) {
        return
    }

    if(root.left == null && root.right == null) {
        if(root == key) {
            root = null;
            return;
        } else return;

        let q = [];
        q.push(root);
        let temp = null;
        let keyNode = null;

        while(q.length > 0) {
            temp = q[0];
            q.shift();

            if(temp.key == key) {
                keyNode = temp;
            }
            if(temp.left != null) {
                q.push(temp.left);
            }
            if(temp.right != null) {
                q.push(temp.right);
            }
        }
        if(keyNode != null) {
            let x = temp.key;
            deleteDeepest(root, temp);
            keyNode.key = x;
        }
    }
}

root = new Node(10); 
root.left = new Node(11); 
root.left.left = new Node(7); 
root.left.right = new Node(12); 
root.right = new Node(9); 
root.right.left = new Node(15); 
root.right.right = new Node(8); 

document.write("Inorder traversal " + 
                 "before deletion: "); 
inorder(root); 

let key = 11; 
Delete(root, key); 

document.write("</br>" + "Inorder traversal " + 
                 "after deletion: "); 
inorder(root); 
