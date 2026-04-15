/**
 * Definition for a binary tree node.
 *
 */
/**572. Subtree of Another Tree
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right) }


var isSubtree = function(root, subRoot) {
    

    function isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

const subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);




console.log(isSubtree(root, subRoot)); // Output: true
