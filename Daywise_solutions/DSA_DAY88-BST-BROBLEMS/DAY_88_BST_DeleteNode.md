## DAY_88 BST PROBLEMS ➡️ 08/12/25

# Deletion in BST

## **Q. 450. Delete Node in a BST ✅**

### **🔍 Problem Explanation**

You are given the root of a Binary Search Tree (BST) and a key.\
Your task is to delete the node whose value matches the key and return
the modified BST.

A BST follows these rules: - Left child \< parent - Right child \>
parent

Deleting a node from a BST must maintain the BST property.

------------------------------------------------------------------------

## **🧠 Algorithm to Delete a Node in a BST**

To delete a node, we handle **three cases**:

------------------------------------------------------------------------

### **📌 Case 1: Node not found**

-   If the key is smaller → go to the **left subtree**
-   If the key is larger → go to the **right subtree**
-   Recursively search until found.

------------------------------------------------------------------------

### **📌 Case 2: Node found --- Node has 0 or 1 child**

There are two possibilities:

#### **(a) Node has NO children (leaf)**

Just delete it → return `null`.

#### **(b) Node has ONE child**

Replace the node with **its single child**.

------------------------------------------------------------------------

### **📌 Case 3: Node found --- Node has 2 children**

This is the tricky one.

Steps: 1. Find the **inorder successor**\
➝ smallest value in the right subtree. 2. Replace the node's value with
the inorder successor. 3. Delete the inorder successor from the right
subtree.

This maintains BST properties properly.

------------------------------------------------------------------------

## **📝 Code Explanation (JavaScript)**

``` js
var deleteNode = function(root, key) {
    if (root === null) return null;

    // Step 1: Search for the node
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } 
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } 
    else {
        // 🎯 Node found

        // Case 1: No child
        if (!root.left && !root.right) return null;

        // Case 2: One child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 3: Two children
        let successor = findMin(root.right);
        root.val = successor.val;

        // Delete the inorder successor
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};

// Helper to find inorder successor
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
```

------------------------------------------------------------------------

## **⏳ Time Complexity**

  Operation   Time
  ----------- ------
  Search      O(h)
  Delete      O(h)

-   For balanced BST → **O(log n)**
-   For skewed BST → **O(n)**

------------------------------------------------------------------------

## **🎯 Final Notes**

Deleting a node in a BST is easy when 0 or 1 child exists.\
The challenge comes with **2 children**, handled nicely using the
**inorder successor**.

------------------------------------------------------------------------

Happy Coding, Jay 🚀
