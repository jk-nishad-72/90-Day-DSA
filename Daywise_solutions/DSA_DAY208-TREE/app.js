/**
 * Definition for a binary tree node.
 *
 */
/**637. Average of Levels in Binary Tree
 * @param {TreeNode} root
 * @return {number[]}
 * * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 * * Example 1:
 * * Input: root = [3,9,20,null,null,15,7]
 * * Output: [3.00000,14.50000,11.00000]
 * using bfs we can calculate the sum of each level and divide it by the number of nodes in that level to get the average. We can use a queue to keep track of the nodes in each level and a variable to keep track of the sum of the values in that level. We can also use a variable to keep track of the number of nodes in that level. After we have processed all the nodes in that level, we can calculate the average and add it to the result array. We can repeat this process until we have processed all the levels in the tree.
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var averageOfLevels = function(root) {
    
    if(!root) return [];
    let queue = [root];
    let result = [];


    while(queue.length > 0){
        let size = queue.length;
        let sum = 0;    
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(sum / size);
    }
    return result;
};
// example usage:
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(averageOfLevels(root)); // Output: [3.00000,14.50000,11.00000]
// Time Complexity: O(n) where n is the number of nodes in the tree. We visit each node once to calculate the sum and count of nodes at each level.
// Space Complexity: O(m) where m is the maximum number of nodes at any level in the tree. In the worst case, this could be O(n/2) for a complete binary tree, which simplifies to O(n).

