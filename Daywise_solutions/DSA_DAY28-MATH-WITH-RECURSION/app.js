

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

//* a)using while loop  TC(O(log(max(a,b)))
function gcd2a() {
    let a  = Number(prompt('Enter first number: '));
    let b  = Number(prompt('Enter second number: ')); 

     while(a!=b)
     {
        if(a>b) a = a-b;
        else b = b-a;
     }
     console.log(`GCD of given two numbers is ${a}`);
     

}

// gcd2a();

  //* b) with Recursion  TC(O(log(max(a,b))) ➡️


  function gcdMethod2(){
    let a = Number(prompt('Enter first number: '));
    let b = Number(prompt('Enter second number: '));
    
  function gcd2b(a,b) {
    if(a===b) return a;
    if(a>b) a = a-b;
    else b = b-a;
    return gcd2b(a,b);
    
  }

    console.log(`GCD of given two numbers is ${gcd2b(a,b)}`);

  }
// gcdMethod2();




//*3.) Using Euclidean Algorithm TC (O(logn)) ➡️

function gcd3() {
    let a = Number(prompt('Enter first number: '));
    let b = Number(prompt('Enter second number: '));

    function gcdAlgo(a,b) {
        
        return b==0 ? a : gcdAlgo(b, a%b);
        
    }

    console.log(`GCD of given two numbers is ${gcdAlgo(a,b)}`);

}

gcd3();





