
---
# 📘 DSA_DAY_85: Binary Search Tree (BST)

### 📅 Date: 05/12/25

---

## 🔹 **Introduction to Binary Search Tree (BST)**

A **Binary Search Tree (BST)** is a special type of binary tree where every node follows these rules:

1. **Left subtree** contains *only* nodes with values **less than** the node’s value.
2. **Right subtree** contains *only* nodes with values **greater than** the node’s value.
3. Both left and right subtrees must also be **BSTs**.

This property makes searching efficient, because we eliminate half of the tree at each step—just like binary search.

---

## 🔹 **Use Cases of BST**

BSTs are widely used in:

* **Searching** and **sorting** large datasets
* Implementing **sets** and **maps** (Java TreeMap, C++ map)
* **Database indexing**
* **Autocomplete** systems
* **Memory management**
* Building **priority-based** structures (when converted to balanced BSTs like AVL/Red-Black Trees)

---

## 🔹 **Working of BST**

The structure depends on insertion order, but the rule remains the same:

➡️ **Left < Root < Right**

### **Operations:**

* Search
* Insertion
* Deletion
* Traversal (Inorder, Preorder, Postorder)

---

## 🔹 **Insertion in BST**

To insert a new value:

1. Start at the **root**.
2. If value < current node → go to **left subtree**.
3. If value > current node → go to **right subtree**.
4. Repeat until you find an empty spot, then insert the new node.

This works recursively or iteratively.

---

## 💡 **LeetCode 701 – Insert into a Binary Search Tree (BST)**

### **Problem:**

Given a root node of a BST and a value to insert, return the modified BST after insertion.

---

## ✔️ **Approach (Recursive):**

* If the tree is empty → return a new node.
* Else:

  * If `val < root.val`, go left
  * If `val > root.val`, go right
* Attach the returned subtree to root
* Return root

---

## ✔️ **✅ JavaScript Code: Insert into a Binary Search Tree (BST)
Recursive Approach**

```java
var insertIntoBST = function(root, val) {
    // If tree is empty, create a new node
    if (root === null) {
        return new TreeNode(val);
    }

    // If val is smaller, go to the left subtree
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } 
    // If val is larger, go to the right subtree
    else {
        root.right = insertIntoBST(root.right, val);
    }

    return root; // Return the updated tree
};

```

---

## ✔️ **Time & Space Complexity**

| Operation                    | Time Complexity | Space Complexity         |
| ---------------------------- | --------------- | ------------------------ |
| **Best Case (balanced)**     | O(log n)        | O(log n) recursion stack |
| **Worst Case (skewed tree)** | O(n)            | O(n)                     |

---
