/**257. Binary Tree Paths
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */



  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

var binaryTreePaths = function(root) {
    if (!root) return [];
    const paths = [];
    const dfs = (node, path) => {
        if (!node.left && !node.right) {
            paths.push(path);
            return;
        }
        if (node.left) dfs(node.left, path + '->' + node.left.val);
        if (node.right) dfs(node.right, path + '->' + node.right.val);
    };
    dfs(root, root.val.toString());
    return paths;
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
console.log(binaryTreePaths(root)); // Output: ["1->2->5", "1->3"]
