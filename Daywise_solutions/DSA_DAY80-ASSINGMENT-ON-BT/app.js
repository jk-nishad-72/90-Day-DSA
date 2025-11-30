
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 *100. Same Tree 
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var solve = function(p , q){
    if(p == null && q == null ) return true;
    if((p== null && q != null ) || (p != null && q == null)) return false
    if(p.val != q.val) return false
    let left = solve(p.left , q.left)
    let right = solve(p.right , q.right)
    return left && right
}
var isSameTree = function(p, q) {
  if(p == null && q == null) return true
  return solve(p,q)
};