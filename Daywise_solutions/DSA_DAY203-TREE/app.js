
/**617. Merge Two Binary Trees
 
 */
/**
 * 
* Definition for a binary tree node.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
var mergeTrees = function(root1, root2) {
    if(root1 === null ) return root2;
    if(root2 === null ) return root1;

    let newNode = new TreeNode(root1.val + root2.val)

    newNode.left = mergeTrees(root1.left , root2.left)
    newNode.right = mergeTrees(root1.right , root2.right)

    return newNode;
};

//  