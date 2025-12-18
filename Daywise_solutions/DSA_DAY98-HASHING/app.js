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


// console.log(kthDistinct(["a","b","a"], k = 3));
/**819. Most Common Word
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

  let pr = paragraph.toLocaleLowerCase().match(/[a-z]+/g)
  let map = new Map();
    for(let word of pr){  
        map.set(word, (map.get(word) || 0 ) + 1 )
      }
 for(let i = 0;i<banned.length;i++){
      map.delete(banned[i])
 }      
        let max = 0;
        let ans = '';
        for(let [key , values] of map){
            if(values > max){   
                max = values;
                ans = key;
            }   
        }
        return ans
};
console.log(mostCommonWord("a b.b", []  ));
