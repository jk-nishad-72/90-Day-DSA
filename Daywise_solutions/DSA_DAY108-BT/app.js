

/**
 * 
 */

/**110. Balanced Binary Tree
 * @param {TreeNode} root
 * @return {boolean}
 */

// Definition for a binary tree node.

//   function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }


  var solve = function(root){
    
    if(root === null ) return 0;

    let left = solve(root.left)
    if(left === -1 ) return -1
    let right = solve(root.right)
    if(right === -1 ) return -1

    if(Math.abs(left - right) > 1) return -1;
    return Math.max(left,right) + 1;

  }

var isBalanced = function(root) {
 
 return (solve(root) !== -1 ? true:false);
     
};

// console.log(isBalanced([1,2,2,3,3,null,null,4,4]))



let prompt = require('prompt-sync')();

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{

       
    buildTree(){

         let data = Number(prompt('Enter Data '));

         let root = new TreeNode(data)

         if(data === -1) return null

         console.log('Enter data on left of root ' + root.val);
         root.left = this.buildTree()

          console.log('Enter data on right of root ' + root.val);
         root.right = this.buildTree()
         
           return root 
    }


}

const tree1 = new BinaryTree();

const root = tree1.buildTree()
console.log(root);

console.log(isBalanced(root));
