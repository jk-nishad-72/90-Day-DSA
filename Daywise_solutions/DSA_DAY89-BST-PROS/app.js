
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**783. Minimum Distance Between BST Nodes

 * @param {TreeNode} root
 * @return {number}
 */

 var solve = function(root ,  ans ){
     if(root == null ) return 
     solve(root.left , ans ) 
     ans.push(root.val)
     solve(root.right, ans)
 }
var minDiffInBST = function(root) {
    let ans = []
    solve(root , ans)
  let mind = ans[1]
   for(let i = 1;i< ans.length;i++ ){
       mind = Math.min( mind , ans[i] - ans[i-1])
   }
    return mind
};