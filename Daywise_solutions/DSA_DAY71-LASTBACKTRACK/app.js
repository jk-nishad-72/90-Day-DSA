/*
 *51. N-Queens ✅
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

 let n = 5  
 console.log( solveNQueens(n));
 
 // 