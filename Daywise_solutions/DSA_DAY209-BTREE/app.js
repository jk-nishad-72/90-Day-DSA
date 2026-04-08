/**
 * Definition for a binary tree node.
 *
 */
/*
 *671. Second Minimum Node In a Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */

  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right) }

var findSecondMinimumValue = function(root) {
    
    if(!root) return -1;
    
    let min = root.val;
    let secondMin = -1;
    const dfs = (node) => {
        if(!node) return;
        if(node.val > min) {
            if(secondMin === -1 || node.val < secondMin) {
                secondMin = node.val;
            }
        }
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return secondMin;

};