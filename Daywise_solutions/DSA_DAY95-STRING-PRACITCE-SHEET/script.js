
let s = 'JavaScript';

s[0] = 'Y';  // This will not change the string since strings are immutable in JavaScript
console.log(s);

console.log(s.split('').reverse().join(''));  // Output: 'tpircSavaJ'

console.log(s.replaceAll('a','o'));  // Output: 'Script'
