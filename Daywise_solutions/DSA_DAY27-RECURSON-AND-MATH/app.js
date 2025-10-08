
//*—Q 77.sum of digit  // 891 → 18


let prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number: "));


let sum = 0;


while(n>0){

    let rem = n%10;
    sum = sum+rem ;
    n = Math.floor(n/10);

}

console.log(sum);

function SOD(n){

    if(n===0) return 0
    return n%10 +sumOfDigits(Math.floor(n/10))

}

console.log(SOD(891));

//*—Q 78.reverse of digit  // 891 → 198

function reverseDigits(n) {
    let isNegative = n<0;
    n = Math.abs(n)
    function helper(n,rev){
        if(n==0) return rev
        rev = rev*10 + n%10 
        return helper(Math.floor(n/10),rev)
    }
    let reversed = helper(n,0)
   return isNegative ? -reversed : reversed;
   
}





