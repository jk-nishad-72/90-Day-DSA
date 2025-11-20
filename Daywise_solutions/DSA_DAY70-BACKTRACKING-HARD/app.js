/*
 * 37. Sudoku Solver ✅  
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function (board, row, col) {
  if (row == board.length) return true;
  let nr = 0,nc = 0;
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
