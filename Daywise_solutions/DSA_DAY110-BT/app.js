/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**129. Sum Root to Leaf Numbers
 * @param {TreeNode} root
 * @return {number}
 */

 var solve = function(root , currentNum){
      if(root === null ) return 0;
      currentNum = currentNum * 10 + root.val;
      if(root.left === null && root.right === null ) return currentNum;
      let left = solve(root.left, currentNum)
      let right = solve(root.right, currentNum)
      return left + right
 }
var sumNumbers = function(root) {
    return solve(root, 0)    
};