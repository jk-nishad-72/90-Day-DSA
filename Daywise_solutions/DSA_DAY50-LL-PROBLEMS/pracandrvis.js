

let prompt = require('prompt-sync')();

let n = Number(prompt("Enter a Number : "))

let sum =0 , copy = n;

while(n>0){
    let rem = parseInt(n%10) 
    sum += rem;
    n = parseInt(n/10) 

    // console.log(n);
    
}

if(copy%sum == 0) console.log('Harshad Number ');
else console.log('Not Harshad Number ');


