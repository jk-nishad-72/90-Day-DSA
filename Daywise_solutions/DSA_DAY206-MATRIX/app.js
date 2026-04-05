/**3417. Zigzag Grid Traversal With Skip
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    const result = [];
    let leftToRight = true;
    let take = true;

    for (let i = 0; i < m; i++) {
        if (leftToRight) {
            for (let j = 0; j < n; j++) {
                if (take) {
                    result.push(grid[i][j]);
                }
                take = !take;

            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                if (take) { 

                result.push(grid[i][j]);
                }               
                 take = !take;
            }
        }
        leftToRight = !leftToRight;
    }
    return result;

};

console.log(zigzagTraversal(  [[1,2],[3,4]] )); // Output: [1,3,5,7,9]
