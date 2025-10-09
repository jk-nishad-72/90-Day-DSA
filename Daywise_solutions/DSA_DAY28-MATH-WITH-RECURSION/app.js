

let  prompt = require("prompt-sync")();
//* 1. )Using For loop  TC(O(min(a,b))


function gcd() {
 let a  = Number(prompt('Enter first number: '));
 let b  = Number(prompt('Enter second number: '));
 
 for(let i = Math.min(a,b); i>=1; i--){

    if(a%i==0 && b%i==0){
        console.log(`GCD of ${a} and ${b} is ${i}`);
        break;
    }
 }
 

}

// gcd();


//*2.)Euclidean Method ➖ )

function gcd2() {
    let a  = Number(prompt('Enter first number: '));
    let b  = Number(prompt('Enter second number: ')); 

     while(a!=b)
     {
        if(a>b) a = a-b;
        else b = b-a;
     }
     console.log(`GCD of given two numbers is ${a}`);
     

}

gcd2();



