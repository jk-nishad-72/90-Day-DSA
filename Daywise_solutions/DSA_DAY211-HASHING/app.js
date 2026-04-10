
/*
 *1331. Rank Transform of an Array
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    let sorted = [...new Set(arr)].sort((a, b) => a - b);
    let rankMap = new Map();
    sorted.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });

    return arr.map(num => rankMap.get(num));

};

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));

