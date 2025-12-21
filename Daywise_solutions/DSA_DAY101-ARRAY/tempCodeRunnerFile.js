
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr = [];
    let n = grid.length;

    // flatten
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(grid[i][j]);
        }
    }

    arr.sort((a, b) => a - b);

    let repeated = -1;
    let missing = -1;

    // check first number
    if (arr[0] !== 1) {
        missing = 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            repeated = arr[i];
        } 
        else if (arr[i + 1] !== arr[i] + 1) {
            missing = arr[i] + 1;
        }
    }

    // check last number
    if (arr[arr.length - 1] !== n * n) {