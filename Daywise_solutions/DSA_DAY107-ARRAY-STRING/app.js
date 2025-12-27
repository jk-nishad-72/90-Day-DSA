

/**49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs){

     let map = new  Map();

     for(let word of strs){
         let sorted = word.split('').sort().join('') 

        if(map.has(sorted)){
            map.set(sorted,[...map.get(sorted),word])
        }else{
             map.set(sorted, [word])
        }
         
     }
    let result = [];

    for(let [key , values] of map){
         result.push(values)
         
    }
    return result
};


console.log(groupAnagrams( ["eat","tea","tan","ate","nat","bat"]));
