/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**103. Binary Tree Zigzag Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
     let ans = [];
     let leftToRight = true;
    if(root == null ) return ans
    let q = [];
    q.push(root)
    while(q.length != 0 ){
         let size = q.length;
         let cur = [];
         for(let i = 0;i<size;i++){
             let node = q.shift();             
             if(leftToRight){
                 cur.push(node.val)
             }else{
                 cur.unshift(node.val)
             }
             if(node.left != null) q.push(node.left)
             if(node.right != null) q.push(node.right)
         }
        ans.push(cur) 
        leftToRight = !leftToRight;

    }
   return ans
};