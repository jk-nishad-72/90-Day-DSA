
# Word Search (Leetcode 79)

## Problem Statement

Given an `m x n` grid of characters `board` and a string `word`, return `true` if the word exists in the grid.

- The word can be constructed from letters of sequentially adjacent cells.
- Adjacent cells are horizontally or vertically neighboring.
- The same letter cell **may not** be used more than once per path.

---

## Approach Summary

### 1. Brute Force

- Try to start the word search from every cell.
- For each cell, perform a depth-first search (DFS) to explore all possible paths matching the word.

### 2. DFS & Backtracking

- Recursively check up, down, left, right neighbors.
- Mark current cell as visited to prevent reuse in the same path.
- Backtrack by unmarking the cell after finishing the recursive call.

#### Step-by-Step Example

Grid:
A B C
D E F
G H I


Word: `BEF`

- Start from 'B' (0,1) → match 'E' (1,1) → match 'F' (1,2).

#### Base Cases

- Index equals word length: Word found.
- Out of bounds or character mismatch: Backtrack.

#### Optimization

- Mark visited cells inplace, e.g. by replacing with `#`.
- Restore value after recursion.

---

## Optimized JavaScript Solution

function exist(board, word) {
const rows = board.length;
const cols = board.length;

function dfs(r, c, idx) {
    if (idx === word.length) return true;
    if (
        r < 0 || c < 0 ||
        r >= rows || c >= cols ||
        board[r][c] !== word[idx]
    ) {
        return false;
    }

    const temp = board[r][c];
    board[r][c] = '#'; // Mark as visited

    const res =
        dfs(r + 1, c, idx + 1) ||
        dfs(r - 1, c, idx + 1) ||
        dfs(r, c + 1, idx + 1) ||
        dfs(r, c - 1, idx + 1);

    board[r][c] = temp; // Backtrack

    return res;
}

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        if (dfs(r, c, 0)) return true;
    }
}
return false;

}


---

## Complexity Analysis

- **Time Complexity:**  
  \( O(m \times n \times 3^k) \), where \( m \) and \( n \) are grid dimensions, \( k \) is `word.length`.
- **Space Complexity:**  
  Recursive stack depth = `word.length`.

---

## Takeaways

- Use DFS from every cell.
- Mark/unmark visited cells to prevent duplicate usage.
- Backtracking ensures all valid paths are explored efficiently.
