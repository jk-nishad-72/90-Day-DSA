
/*
 *199. Binary Tree Right Side View
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var solve = function(root , level ,ans ){
    if(root == null) return 
    if(level == ans.length) ans.push(root.val)
    solve(root.right , level+1, ans)
    solve(root.left , level+1, ans)
}
var rightSideView = function(root) {
     let ans = []
    solve(root , 0, ans)
    return ans

};

/*
 *Left View of Binary Tree 
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    
    leftView(root) {
        let ans = [] 
     
     let solve = function(root , level , ans){
         if(root == null) return
         if(level == ans.length) ans.push(root.data)
         
         solve(root.left, level+1 , ans)
         solve(root.right, level+1, ans)
         
     }
     
     
     solve(root , 0, ans)
     return ans 
     
    
     
    
     
    }
}

