
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


// console.log(findPermutationDifference('abc', 'bac'));


/**389. Find the Difference
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
      
    let s1 = new Map();
    let t1 = new Map();

    for(let i = 0;i<s.length;i++){
         if(s1.has(s[i])){

             s1.set(s[i] , s1.get(s[i]) + 1 )
         }
         else{
            s1.set(s[i] ,1 )
         }
    }

    for(let i = 0;i<t.length;i++){
         if(t1.has(t[i])){
             t1.set(t[i] , t1.get(t[i]) +1 )
         }else{
            t1.set(t[i] ,1 )
         }
    }

    console.log(s1 , t1);
    
 
    for(let i = 0;i<t.length;i++){


        if(!s1.has(t[i])  || (Math.abs(s1.get(t[i]) - t1.get(t[i])) != 0 )){

            return t[i];
     }

} 

};

// console.log(findTheDifference('abcd','abcde'));


/**575. Distribute Candies
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    
    let set = new Set(candyType);
    let m = set.size
    let n = Math.floor(candyType.length / 2)
    if(m === n ) return m
    else if( m < n ) return m 
    else return n
};


console.log(distributeCandies([1,1,2,2,3,3]));
