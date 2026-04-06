/**
 * Definition for a binary tree node.

 */
/*
 *404. Sum of Left Leaves
 * @param {TreeNode} root
 * @return {number}
 */

  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
var sumOfLeftLeaves = function(root) {
   
    if(root === null) return 0;
    let sum = 0;
    if(root.left !== null && root.left.left === null && root.left.right === null){
        sum += root.left.val;
    }
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);
    return sum;
};