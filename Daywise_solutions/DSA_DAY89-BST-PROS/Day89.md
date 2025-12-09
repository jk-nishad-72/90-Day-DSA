
# **DSA_DAY_89 — BST Problems ➡️ 09/12/25**

## ✅ **Q.783 — Minimum Distance Between BST Nodes**

### 🧠 **Conceptual Understanding**

A Binary Search Tree (BST) gives **sorted values** when traversed using **inorder traversal** (Left → Root → Right).

The problem asks for the **minimum absolute difference between values of any two nodes**.

### 🔑 **Key Idea**

The minimum difference will always lie between **two consecutive values in sorted (inorder) order**, not between random nodes.

So we:

1. Perform **inorder traversal**.
2. Track the **previous visited node value**.
3. Compute the difference with the current node.
4. Keep updating the **minimum difference**.

### 🧩 **Why this works?**

Inorder traversal naturally ensures we only compare nodes that are closest in value.

### ✔️ **Time Complexity:** O(n)

### ✔️ **Space Complexity:** O(h) recursion stack (or O(n) worst-case for skewed tree)

---

## 🟩 **Q.530 — Minimum Absolute Difference in BST**

This problem is almost identical to Q.783 and uses **the exact same logic**, with a slight difference:

* Q.530 allows a wider range of values.
* But inorder traversal + comparing adjacent values still gives the correct result.

### 🎯 **Approach Summary (Same as Q.783)**

* Traverse inorder → get sorted order
* Track previous value
* Update minimum difference

### ✔️ Time & Space Complexity: Same as Q.783

---

# 📝 **Interview-Focused Explanation**

## ❓ **Why do we use inorder traversal for this problem?**

Because BST inorder traversal returns values in **sorted order**, allowing us to only compare consecutive nodes to find minimum difference.

---

## ❓ **Can we store all nodes in an array and then find min diff?**

Yes, but it's unnecessary.

* That approach uses **extra space** (O(n)).
* Inorder traversal with tracking `prev` uses **O(1) extra space**.

---

## ❓ **Why compare only adjacent values?**

Because in a sorted sequence, the smallest difference always appears between two consecutive elements.

---

## ❓ **Does recursion depth matter?**

If the tree is skewed (like a linked list), recursion depth becomes O(n).
Iterative inorder traversal avoids this issue.

---

## ❓ **What if the BST has duplicate values?**

Standard BSTs do not contain duplicates.
If duplicates exist, the minimum difference is automatically **0**.

---

# 📘 **Summary Table**

| Problem | Key Concept         | Technique               | Why It Works                        |
| ------- | ------------------- | ----------------------- | ----------------------------------- |
| Q.783   | Min distance in BST | Inorder + prev tracking | Sorted property of BST              |
| Q.530   | Min absolute diff   | Inorder + prev tracking | Adjacent sorted nodes give min diff |

---

# 🚀 **Daily DSA Growth Continues**

You're building strong BST fundamentals — and these two problems sharpen understanding of **inorder traversal**, **recursion**, and **tree value relationships**.


