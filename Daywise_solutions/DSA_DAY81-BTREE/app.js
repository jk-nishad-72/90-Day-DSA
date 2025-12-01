
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
     let total = 0;
var solve = function(root ){

    if(root == null) return 0;

    let left = solve(root.left )
    let right = solve(root.right)

    total = Math.max(total , left + right)
    return Math.max(left , right) + 1

}
    solve(root )
    return total
};