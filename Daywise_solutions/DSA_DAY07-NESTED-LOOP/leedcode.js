
let prompt =  require('prompt-sync')();

let n = Number(prompt("Enter a Number : "))


console.log(n);

// Input: 
 var args = [{},]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3


var argumentsLength = function(...args) {
    
      let copy =[...args]
      console.log(copy)
      return copy.length

    
};

console.log(argumentsLength(...args));
