/**DAY_210 HASHING ➡️ 09042026
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    let set = new Set();

      for(let num of arr){
         map.set(num , map.get(num) + 1 || 1)
      }

      for(let [key ,value] of map ){

         if(set.has(value)) return false
         else set.add(value)
      }
      return true
};

console.log(uniqueOccurrences([1,2 ,2 ,1, 1, 3]));
