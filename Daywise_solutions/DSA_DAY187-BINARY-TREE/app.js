/**222. Count Complete Tree Nodes
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
var countNodes = function(root) {
    
    if (!root) return 0;
    
    let left = root.left;
    let right = root.right;
    let leftHeight = 0;
    let rightHeight = 0;

    while (left) {
        left = left.left;
        leftHeight++;
    }

    while (right) {
        right = right.right;
        rightHeight++;
    }

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight + 1) - 1;
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1;
    }

};

// Example usage:
// Constructing a complete binary tree
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}   
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(countNodes(root)); // Output: 7
