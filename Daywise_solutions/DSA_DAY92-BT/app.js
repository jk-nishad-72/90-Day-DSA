/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var pathSum = function(root, targetSum) {
    let total = 0;
    function countPaths(node) {
        if (node === null) return;
        findPathSum(node, targetSum, 0);
        countPaths(node.left);
        countPaths(node.right);
    }
    function findPathSum(node, targetSum, currentSum) {
        if (node === null) return;
        currentSum += node.val;
        if (currentSum === targetSum) {
            total++;
        }
        findPathSum(node.left, targetSum, currentSum);
        findPathSum(node.right, targetSum, currentSum);
    }
    countPaths(root);
    return total;
};
