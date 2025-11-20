# Sudoku Solver -- Explanation, Intuition, Algorithm, Time & Space Complexity

## 🧩 Problem

**LeetCode 37: Sudoku Solver**\
Fill a 9×9 Sudoku board by modifying it *in-place* such that it becomes
a valid solution.

------------------------------------------------------------------------

## 🧠 Intuition

Sudoku is solved using **Backtracking**:

-   Try placing digits **1 to 9** in each empty cell (`"."`).
-   For each digit, check if it is **valid**:
    -   Not present in the same row\
    -   Not present in the same column\
    -   Not present in the 3×3 sub-grid\
-   If valid → place the digit and recursively solve for the next cell.
-   If recursive call fails → **undo the placement** and try the next
    digit.
-   If all digits fail → backtrack.

This forms a **depth-first search (DFS)** over all possible board
configurations.

------------------------------------------------------------------------

## 📘 Algorithm

### **1. Recursive Function `solve(board, row, col)`**

-   If `row == 9` → board filled → return `true`.
-   Move to next row if column reaches `9`.
-   If current cell is already filled → move to next cell.
-   If it's empty:
    -   Try digits `1 → 9`
    -   If a digit is valid → place it and recursively solve.
    -   If recursion fails → undo (`"."`) and continue.

### **2. Validation Function `isValid(board, row, col, ch)`**

Checks if placing digit `ch` violates rules: - Loop through the row\
- Loop through the column\
- Loop through the corresponding 3×3 box

If all checks pass → valid.

### **3. Wrapper Function**

`solveSudoku(board)` simply calls:

``` js
solve(board, 0, 0);
```

------------------------------------------------------------------------

## ⏱ Time Complexity (TC)

### **Worst Case: O(9\^(n)) where n = number of empty cells**

Because each empty cell may try digits 1--9.

But due to pruning (constraints), the practical complexity is much
lower.

------------------------------------------------------------------------

## 💾 Space Complexity (SC)

### **O(1)** Auxiliary

-   The board is fixed size: 9×9.
-   Only recursion stack is used → at most 81 levels → **O(81) ≈ O(1)**.

------------------------------------------------------------------------

## 🧑‍💻 Final Code (As Provided)

``` js
var solve = function (board, row, col) {
  if (row == board.length) return true;
  let nr = 0, nc = 0;
  if (col == board[0].length) {
    nr = row + 1;
    nc = 0;
  } else {
    nr = row;
    nc = col + 1;
  }
  if (board[row][col] != ".") {
    if (solve(board, nr, nc)) return true;
  } else {
    for (let i = 1; i <= 9; i++) {
      if (isValid(board, row, col, i)) {
        board[row][col] = i + "";
        if (solve(board, nr, nc)) return true;
        board[row][col] = ".";
      }
    }
  }
  return false;
};

var isValid = function (board, row, col, ch) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == ch) return false;
    if (board[i][col] == ch) return false;
  }
  let smRow = parseInt(row / 3) * 3;
  let smCol = parseInt(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[smRow + i][smCol + j] == ch) return false;
    }
  }
  return true;
};

var solveSudoku = function (board) {
  solve(board, 0, 0);
};
```

------------------------------------------------------------------------

## ✅ Summary

-   Uses **backtracking**\
-   Tries digits recursively\
-   Validates using row/column/box checks\
-   TC: **O(9ⁿ)** worst case\
-   SC: **O(1)** auxiliary
