
/*
 * 226. Invert Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var solve = function(root){
     if(root == null ) return 
     solve(root.left)
     solve(root.right)
     let tp = root.left
     root.left = root.right
     root.right = tp
 }
var invertTree = function(root) {
    if(root == null ) return null;
    solve(root)
    return root
};


console.log(invertTree([2,1,3]));


/*
 *112. Path Sum
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var solve = function(r,t){
     if(r == null ) return false 
     if(r.left == null && r.right == null && r.val == t) return true

  let l = solve(r.left , t - r.val)

  let right = solve(r.right, t - r.val)

  return l || right

 }
var hasPathSum = function(root, targetSum) {
    
   return solve(root, targetSum)
};

console.log(hasPathSum([1,2,3], 5));



