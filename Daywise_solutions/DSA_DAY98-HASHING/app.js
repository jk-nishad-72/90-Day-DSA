/**2053. Kth Distinct String in an Array
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new  Map();
    for(let str of arr){
        map.set(str, (map.get(str) || 0 ) + 1 )
    }
    let ans = [];
    for(let [key , values] of map){
        if(values === 1 ) ans.push(key)
    }
    return (ans.length < k ? '' : ans[k-1] )
};


console.log(kthDistinct(["a","b","a"], k = 3));
