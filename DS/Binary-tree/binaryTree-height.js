//Find the Maximum Depth or Height of given Binary Tree
/**
 * maxDepth(‘1’) = max(maxDepth(‘2’), maxDepth(‘3’)) + 1 = 2 + 1

because recursively 
maxDepth(‘2’) =  max (maxDepth(‘4’), maxDepth(‘5’)) + 1 = 
1 + 1 and  (as height of both ‘4’ and ‘5’ are 1)
maxDepth(‘3’) = 1
*/

class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

let root = null;
const maxDepth = (node) => {
    if(node == null) return;
    else{
        let ldept = node.left;
        let rdepth = node.right;
        if(ldept > rdepth) {
            return ldept + 1;
        } else {
            return rdepth + 1;
        }
    }
} 

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Height of tree is : " +
                              maxDepth(root));