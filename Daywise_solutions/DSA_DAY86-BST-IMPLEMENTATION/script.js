

//* string ->
let prompt = require('prompt-sync')();

let str = prompt("Enter a string: ");

console.log("You entered: " + str);
for(let i = 0; i< str.length; i++){
    console.log(str[i]);
}

let s = 'hello'
console.log(str.length);
// console.log(str.slice(1, 2));
// console.log(str.slice(-5,-1));
console.log(str.substring(2, 5));
console.log(s.startsWith('k'));
console.log(s.endsWith('o'));
console.log(s.split('e'));






