# Binary Tree Problems -- Explanation, Algorithms, TC/SC

## 112. Path Sum (2nd Approach)

### ✔ Code Explanation

The function checks whether **any root-to-leaf path** sums to the given
target.

### 🔍 How It Works

-   Add current node value to running sum.
-   If leaf node and sum equals target → return `true`.
-   Recursively check left and right subtrees.
-   Return `true` if any subtree has a valid path.

### 📘 Algorithm

1.  If node is `null`, return false.
2.  Add node's value to `sum`.
3.  If leaf node:
    -   If `sum == target`, return true.
    -   Else return false.
4.  Recursively check left subtree.
5.  Recursively check right subtree.
6.  Return OR of results.

### 🕒 Time Complexity

-   **O(N)** --- every node is visited once.

### 🧠 Space Complexity

-   **O(H)** --- recursion stack, where H = height of tree\
    (Worst case: O(N), Best case (balanced): O(log N)).

------------------------------------------------------------------------

## 100. Same Tree

### ✔ Code Explanation

The function checks if two binary trees are **identical**.

### 🔍 How It Works

-   If both nodes are null → trees match here.
-   If one is null and other is not → false.
-   If values mismatch → false.
-   Recursively check left and right children.

### 📘 Algorithm

1.  If both nodes null → return true.
2.  If one null → return false.
3.  If values differ → return false.
4.  Recursively compare left subtrees.
5.  Recursively compare right subtrees.
6.  Return AND of results.

### 🕒 Time Complexity

-   **O(N)** --- compare every node.

### 🧠 Space Complexity

-   **O(H)** recursion depth.

------------------------------------------------------------------------

## 107. Binary Tree Level Order Traversal II

### ✔ Code Explanation

Perform normal BFS but insert each level at **beginning** of answer
list.

### 🔍 How It Works

-   Use queue for BFS.
-   For each level:
    -   Collect all node values in a temporary array.
    -   Push children into queue.
    -   Insert level at front using `unshift()`.

### 📘 Algorithm

1.  If root is null → return empty list.
2.  Initialize queue with root.
3.  While queue not empty:
    -   Get size of current level.
    -   Process all nodes of that level.
    -   Add level array to front of result.
4.  Return result.

### 🕒 Time Complexity

-   **O(N)** --- each node processed once.

### 🧠 Space Complexity

-   **O(N)** --- queue + output list.

------------------------------------------------------------------------

## Path Sum II (Return All Paths)

### ✔ Code Explanation

We collect **all paths** whose sum equals target.

### 🔍 How It Works

-   Add current node value to path.
-   If leaf and sum matches → push a *copy* of path.
-   Recurse left & right.
-   Backtrack by popping.

### 📘 Algorithm

1.  If node null → return.
2.  Add value to sum and path.
3.  If leaf and target matches → store path.
4.  Recurse left.
5.  Recurse right.
6.  Pop value (backtracking).

### 🕒 Time Complexity

-   **O(N²)**\
    Because copying path takes O(H) for each valid path.

### 🧠 Space Complexity

-   Worst: **O(N)** for recursion + O(N) for path.
