


/*
 *653. Two Sum IV - Input is a BST .✅🎉
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = [];
    function inorder(root){
         if(root === null ) return ;
         nums.push(root.val)
         inorder(root.left)
        //  console.log(root.val)
         inorder(root.right)
    }
 
    inorder(root)
    // console.log(nums)
   return twoSum(nums, k);
};

var twoSum = function(nums, target) {
       let map = new Map();
  
    for(let i =0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return true
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};