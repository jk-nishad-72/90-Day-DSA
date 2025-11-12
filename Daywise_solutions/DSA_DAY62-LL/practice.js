// 12. perfect number  ☑️

let prompt = require('prompt-sync')();

let n = parseInt(prompt('Enter a Number (to checkIng Perfect Number ): '))

let sum  = 0;

for(let i =1;i<= parseInt(n/2);i++){

     if(n%i==0){
         sum += i
     }
}

if(sum == n) console.log('Perfect Number ')
else console.log('Not Perfect Number ')
