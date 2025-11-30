/*
 *112. Path Sum 2ND APPROACH
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var solve = function(r,t, s){
     if(r == null) return false 
     s = s + r.val; 
     if(r.left == null && r.right == null && s == t) return true
     let left = solve(r.left , t , s )
     let right = solve(r.right , t , s)
     s = s - r.val
     return left || right
    
 }
var hasPathSum = function(root, targetSum) {
    
    let sum = 0;
   return solve(root, targetSum , sum )
};

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
 * @param {number} targetSum
 * @return {number[][]}
 */

var solve = function(r , t , s , cur , ans ){
     if(r == null) return false
      s = s + r.val 
      cur.push(r.val)
      if(r.left == null && r.right == null && s == t){
         ans.push([...cur])
      }
      let left = solve(r.left , t , s , cur , ans)
      let right = solve(r.right , t , s , cur , ans)
      s = s - r.val
      cur.pop()
      return left || right 
}
var pathSum = function(root, targetSum) {
    let sum = 0;
    let ans = [];
    let cur = [];
 solve(root , targetSum , sum , cur , ans )
 return  ans

};