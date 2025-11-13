

//**-Q. Frindly Pairs : https://prepinsta.com/java-program/friendly-pair-or-notamicable-or-not-using-java/✅


let prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Enter value Of Num1 : '))
let n2 = parseInt(prompt('Enter value Of Num2 : '))



function factorsSumOfN(num){
     let sum = 0; 
     for(let i = 1;i<=parseInt(num/2);i++){
         
        if( num % i == 0) sum += i
     }
     return sum
}

if( (factorsSumOfN(n1)/n1) == (factorsSumOfN(n2)/n2)) console.log(" Yes Friendly Pairs ")
else console.log("NOt Friendly Pairs ") 


