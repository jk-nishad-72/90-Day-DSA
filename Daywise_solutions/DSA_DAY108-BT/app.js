

/**
 * 
 */

/**110. Balanced Binary Tree
 * @param {TreeNode} root
 * @return {boolean}
 */

// Definition for a binary tree node.

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }


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