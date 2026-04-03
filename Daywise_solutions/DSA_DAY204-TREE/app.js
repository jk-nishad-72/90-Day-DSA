/**2331. Evaluate Boolean Binary Tree
 * Definition for a binary tree node.
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var evaluateTree = function(root) {
    
    if(root.left === null && root.right === null) return root.val == 1;

    const left = evaluateTree(root.left )
    const right = evaluateTree(root.right )

    return (root.val === 2 ? left || right : left && right ) 

}


