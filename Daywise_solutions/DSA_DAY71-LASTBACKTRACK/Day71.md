

# N-Queens Problem — Full Explanation (Intuition, Algorithm, Time & Space Complexity)

## 🧩 Problem Statement

The **N-Queens problem** asks us to place **N queens on an N×N chessboard** such that **no two queens attack each other**. This means:

* No two queens can be in the same **row**
* No two queens can be in the same **column**
* No two queens can be on the same **diagonal**

The goal is to return **all possible solutions**, where each solution is a board configuration represented using:

* `'Q'` → Queen
* `'.'` → Empty cell

---

## 🎯 Intuition

We place **one queen per row**, moving row by row.
For every row:

* Try placing a queen in all columns.
* Before placing, check if that position is **valid** (no queen can attack).
* If valid → place queen → move to the next row.
* If not valid → try next column.

This forms a **backtracking** pattern:

> "Try a choice → Recurse → Undo the choice if it doesn't work (backtrack)."

Whenever we reach **row === n**, it means we placed queens successfully, and we record that configuration.

---

## 🧠 Algorithm (Step-by-step)

### 1️⃣ Initialization

* Create an `n × n` board filled with `0`s.
* Call the recursive `solve()` starting from `row = 0`.

### 2️⃣ The `solve()` Function

For a given `row`:

1. If `row == n` → A full solution is found → Convert board to strings → Push to answer.
2. For each column in that row:

   * Check if placing a queen is **valid**.
   * If valid:

     * Place queen (`board[row][col] = 1`).
     * Recurse to next row.
     * Backtrack (`board[row][col] = 0`).

### 3️⃣ Validity Check

The `isValid()` function ensures:

* No queen in the **same column** above.
* No queen in the **left diagonal** above.
* No queen in the **right diagonal** above.

Because we place queens **row-wise**, we only check **upper direction**.

---

## 📘 Code (JavaScript)

```js
/*
 * 51. N-Queens
 * @param {number} n
 * @return {string[][]}
 */
var solve = function (board, n, ans, row) {
  if (row == n) {
    let arr1 = new Array();
    for (let i = 0; i < n; i++) {
      let cur = "";
      for (let j = 0; j < n; j++) {
        if (board[i][j] == 1) cur += "Q";
        else cur += ".";
      }
      arr1.push(cur);
    }
    ans.push(arr1);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isValid(board, col, row, n)) {
      board[row][col] = 1;
      solve(board, n, ans, row + 1);
      board[row][col] = 0;
    }
  }
};

var isValid = function (chess, col, row, n) {
  let i = row;
  let j = col;

  while (i >= 0) {
    if (chess[i][j] == 1) return false;
    i--;
  }

  i = row;
  j = col;
  while (i >= 0 && j < n) {
    if (chess[i][j] == 1) return false;
    i--;
    j++;
  }

  i = row;
  j = col;
  while (i >= 0 && j >= 0) {
    if (chess[i][j] == 1) return false;
    i--;
    j--;
  }

  return true;
};

var solveNQueens = function (n) {
  let chess = new Array(n);
  for (let i = 0; i < n; i++) {
    chess[i] = new Array(n).fill(0);
  }

  let ans = [];
  solve(chess, n, ans, 0);
  return ans;
};

let n = 5;
console.log(solveNQueens(n));
```

---

## 🕒 Time Complexity (TC)

The time complexity of N-Queens is:

### **TC = O(N!)**

Because:

* Each row has at most `N` choices.
* But valid placements reduce choices drastically.
* Worst-case backtracking complexity is approximately factorial.

More formal upper bound: **O(N! × N)** (because converting board to string takes `N²`).

---

## 🗂 Space Complexity (SC)

### **SC = O(N²)**

Breakdown:

* Board uses `N × N` space.
* Recursion depth is `N` → O(N).
* Output storage depends on number of solutions.

So auxiliary space: **O(N²)**.

---

## ✅ Summary

| Aspect           | Explanation                                              |
| ---------------- | -------------------------------------------------------- |
| Method           | Backtracking                                             |
| Key Idea         | Place one queen per row and validate columns & diagonals |
| Time Complexity  | O(N!)                                                    |
| Space Complexity | O(N²)                                                    |
| Returns          | All valid board configurations                           |

---

If you want, I can also create:

* A **visual diagram** explaining diagonal checks
* A **step-by-step dry run** for `n = 4`
* An optimized version using hash sets

Just tell me, Jay!
