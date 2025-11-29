
/*
 * 226. Invert Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var solve = function(root){
     if(root == null ) return 
     solve(root.left)
     solve(root.right)
     let tp = root.left
     root.left = root.right
     root.right = tp
 }
var invertTree = function(root) {
    if(root == null ) return null;
    solve(root)
    return root
};


console.log(invertTree([2,1,3]));


/*
 *112. Path Sum
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

var solve = function(r,t){
     if(r == null ) return false 
     if(r.left == null && r.right == null && r.val == t) return true

  let l = solve(r.left , t - r.val)

  let right = solve(r.right, t - r.val)

  return l || right

 }
var hasPathSum = function(root, targetSum) {
    
   return solve(root, targetSum)
};

console.log(hasPathSum([1,2,3], 5));



/*
 *101. Symmetric Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**101. Symmetric Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var solve = function(l , r){
 if(l == null && r == null ) return true 
 if((l == null && r != null ) || (l != null && r == null)) return false
 if(l.val == r.val){
     let left = solve(l.left , r.right)
     let right = solve(l.right , r.left)
     return left && right
 }
 return false    
}
var isSymmetric = function(root) {
         if(root == null ) return true;
         return(solve(root.left , root.right))
};

/*
 *102. Binary Tree Level Order Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** *102. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
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
        ans.push(cur)
    }
   return ans
};

console.log(levelOrder( [3,9,20,null,null,15,7]));
