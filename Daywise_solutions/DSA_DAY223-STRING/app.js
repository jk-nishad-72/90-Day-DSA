/**1446. Consecutive Characters
 * @param {string} s
 * @return {number}
 */

// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string. O(n^2) solution
var maxPower = function(s) {
    let power = 0;
    let cur = 0;
    if(s.length === 1) return 1;
    for(let i = 0;i<s.length;i++){
         for(let j = i;j<s.length;j++){
             if(s[i] != s[j]){
                 power = Math.max(power, cur)
                 cur = 0;
                 break;
              } else cur++
         }
          power = Math.max(power, cur)
          cur = 0;
    }
    return power 
};


console.log(maxPower('cc'));
console.log(maxPower('leeeetcode'));


