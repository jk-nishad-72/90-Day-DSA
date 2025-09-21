
//* ✅ Q. Strong Number


let prompt = require('prompt-sync')()

let n = Number(prompt('Enter a Number : '))

let copy =n;
let ans = 0;

while(n>0){

    let rem = n%10;
    let fact = 1;
    for(let i=1;i<=rem;i++){
        fact = fact*i
    }
    ans = ans+fact
    n = Math.floor(n/10)
}

if(copy===ans) return console.log(' Strong Number ')
else return console.log('Not Strong Number ')


