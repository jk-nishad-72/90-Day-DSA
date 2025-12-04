
/*
 *2278. Percentage of Letter in String
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let total = s.length;
    let count = 0;
    for(let i = 0;i<s.length;i++){
         if(s[i] == letter) count++
    }
    let ans =  Math.floor((count/total)*100)
    return ans
};


/*
 *2124. Check if All A's Appears Before All B's ✅
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s){
    
    if(s.includes('ba')) return false
    else return true  
};

