


class Solution {
    int total;
    public int pathSum(TreeNode root, int targetSum){
        total = 0;    // IMPORTANT FIX
        countPaths(root, targetSum);
        return total;
    }
    private void countPaths(TreeNode root, int targetSum){
        if(root == null) return;
        findPathSum(root, targetSum, 0);
        countPaths(root.left, targetSum);
        countPaths(root.right, targetSum);
    }
    private void findPathSum(TreeNode root, int targetSum, long currentSum){ 
        if(root == null) return;
        currentSum += root.val;
        if(currentSum == targetSum)
            total++;
        findPathSum(root.left, targetSum, currentSum);
        findPathSum(root.right, targetSum, currentSum);
    }
}
