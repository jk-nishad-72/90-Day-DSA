
let prompt  = require('prompt-sync')();

var multiply = function(){

    let num1 = prompt('Enter num 1 : ')
    let num2 = prompt('Enter num 2 : ')

     let n1 = n2 = 0;
    console.log(num1, num2)
    // let nums = '0123456789'

    for(let i = 0;i<num1.length ;i++){

        n1 = (n1*10) + ((num1.charCodeAt(i) +2 ) % 10);
         
    }

     for(let i = 0;i<num2.length ;i++){

        n2 = (n2*10) + ((num2.charCodeAt(i) +2 ) % 10);
         
    }

    console.log( `Multiply of ${num1} * ${num2} is : ${n1*n2}`);
    
}

multiply()