


 //* Definition for a binary tree node.
  class TreeNode{

    constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

class BST {
    constructor(){
        this.root = null;

    }

    searchBST(root, val) {
        if(root == null) return null;

        if(root.val == val) return root;

        if(val < root.val){
            return this.searchBST(root.left, val);
        } else {
            return this.searchBST(root.right, val);
        }
    }
}

// var searchBST = function(root, val){

//    if(root == null ) return

//    searchBST(root.left)
//    process.stdout.write(root.val +" ")
//    searchBST(root.right)
   
// };


// console.log(searchBST([4,2,7,1,3]));

const BST1 = new BST();
BST1.root = new TreeNode(4);
BST1.root.left = new TreeNode(2);
BST1.root.right = new TreeNode(7);
BST1.root.left.left = new TreeNode(1);
BST1.root.left.right = new TreeNode(3);

const result = BST1.searchBST(BST1.root, 2);
console.log(result); // Should print the node with value 2
