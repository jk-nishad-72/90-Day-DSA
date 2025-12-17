
/**3146. Permutation Difference between Two Strings
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    
    let s1 = new Map();
    let t1 = new Map();

    for(let i = 0;i<s.length;i++){
         s1.set(s[i],i);
    }
    for(let i = 0;i<t.length;i++){
         t1.set(t[i],i);
    }
    let sum = 0;
    for(let i = 0;i<s.length;i++){
        sum += Math.abs(s1.get(s[i]) - t1.get(s[i]));
    }
    return sum;
};


console.log(findPermutationDifference('abc', 'bac'));
