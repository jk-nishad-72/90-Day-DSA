

/*
 *501. Find Mode in Binary Search Tree ✅
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


var findMode = function(root) {
     let prev = null
     let count = 0;
     let maxCount = 0;
     let result = [];
   var solve = function(root ){
   if(root == null ) return;
     solve(root.left )
      if(root.val === prev) count++
      else count = 1;
      if(count > maxCount ){
         maxCount = count;
         result = [root.val]
      }else if(count === maxCount ){
        result.push(root.val)
      }
    prev = root.val
      solve(root.right )
 }
 solve(root)
 return result
};