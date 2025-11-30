
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



/**
 *107. Binary Tree Level Order Traversal II
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root){
    let ans = [];
    if(root == null ) return ans
    let q = [];
    q.push(root)
    while(q.length != 0 ){
         let size = q.length;
         let cur = [];
         for(let i = 0;i<size;i++){
             let node = q.shift();             
             cur.push(node.val)
             if(node.left != null) q.push(node.left)
             if(node.right != null) q.push(node.right)
         }
        ans.unshift(cur)
    }
   return ans
};

