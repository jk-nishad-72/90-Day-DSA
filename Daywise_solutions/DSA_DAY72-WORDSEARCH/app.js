
/*
 *79. Word Search ✅✅
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var solve = function(board , row , col , word, idx, m , n){

    if(idx == word.length) return true 

    if(
        row < 0 || col < 0 || 
        row >= m || col >= n || 
        board[row][col] !== word[idx]
    ) {
        return false
    }
     
     let temp = board[row][col]
     board[row][col] = '#'

   const res = 
    solve(board, row +1 , col , word , idx +1 , m , n) ||
    solve(board, row - 1 , col , word , idx +1 , m , n) ||
    solve(board, row  , col +1, word , idx +1 , m , n) ||
    solve(board, row  , col -1 , word , idx +1 , m , n) ;

   board[row][col] = temp;

   return res
     
}
var exist = function(board, word) {
     let m = board.length;
     let n = board[0].length;
      let index = 0
     for(let i = 0 ;i<m ;i++){

         for(let j = 0;j<n;j++){

             if (solve( board , i, j , word , 0 ,m , n)) return true
         }
     }
     return false

};