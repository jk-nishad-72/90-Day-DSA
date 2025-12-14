

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
