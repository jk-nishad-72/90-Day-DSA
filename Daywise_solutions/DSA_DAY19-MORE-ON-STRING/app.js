
let prompt = require('prompt-sync')()

let s = prompt('Enter String : ')

for(let i = 0;i<s.length;i++){

     console.log(s.charCodeAt(i));
}
