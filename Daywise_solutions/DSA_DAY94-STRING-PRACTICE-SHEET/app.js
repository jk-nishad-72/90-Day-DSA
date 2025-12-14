

let prompt  = require('prompt-sync')();

let s = prompt('Enter string of digits: ');



let k = parseInt(prompt('Enter size of groups: '));


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
while(s.length > k){
 let arr = [];
for(let i = 0; i < s.length; i+= k) {
      arr.push(s.slice(i, i + k));
}
let cp = '';
for(let i = 0; i < arr.length; i++) {
    let str  = arr[i];
    let sum = 0; 
    for(let j = 0; j < str.length; j++) {
        sum += Number(str[j]);  
    }
      cp += `${sum}`;
}
s = cp;
}
return s
};

console.log(digitSum(s,k));


/**2068. Check Whether Two Strings are Almost Equivalent
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(s, t) {
    let arr = new Array(123).fill(0);
    let arr2 = new Array(123).fill(0);
    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        arr[ascii] += 1;
    }
    for (let i = 0; i < t.length; i++) {
        let ascii = t.charCodeAt(i);
        arr2[ascii] += 1;
    }
    if (s.length != t.length) { 
        return false
    }else {
        for (let i = 0; i < s.length; i++) {
            let ascii1 = s.charCodeAt(i);
            let ascii2 = t.charCodeAt(i);
            if(arr[ascii1] - arr2[ascii1] > 3 || arr2[ascii2] - arr[ascii2] > 3 ){
                return false
                   }
              }
    return true
    }
};

