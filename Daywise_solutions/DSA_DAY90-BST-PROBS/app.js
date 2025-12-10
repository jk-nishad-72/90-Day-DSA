var recoverTree = function(root) {
    let first = null;
    let second = null;
    let prev = new TreeNode(-Infinity);

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        // Detect violation
        if (prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // Swap values of the two wrong nodes
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
};
