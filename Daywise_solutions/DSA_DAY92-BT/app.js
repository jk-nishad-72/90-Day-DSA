/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var pathSum = function(root, targetSum) {
    let total = 0;
    function countPaths(node) {
        if (node === null) return;
        findPathSum(node, targetSum, 0);
        countPaths(node.left);
        countPaths(node.right);
    }
    function findPathSum(node, targetSum, currentSum) {
        if (node === null) return;
        currentSum += node.val;
        if (currentSum === targetSum) {
            total++;
        }
        findPathSum(node.left, targetSum, currentSum);
        findPathSum(node.right, targetSum, currentSum);
    }
    countPaths(root);
    return total;
};


/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    
    if(password.length < 8 ) return false;
    let haslowerCase = false;
    let hasUpperCase = false;
    let hasdigit =  false;
    let Special = '!@#$%^&*()-+';
    let hasSpecial = false;

    for(let i = 0 ;i<password.length ; i++){

           let ch = password[i]

           if(i>0 && ch == password[i-1]) {return false;}

           if(ch >= 'a' && ch <= 'z') haslowerCase = true
          else if(ch >= 'A' && ch <= 'Z') hasUpperCase = true
          else if(ch >= '0' && ch <= '9') hasdigit = true
          else if(Special.includes(ch)) hasSpecial = true
   
    }

    return haslowerCase && hasUpperCase && hasdigit && hasSpecial
};

