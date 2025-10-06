
let prompt = require('prompt-sync')();

//*—Q 74.Print natural number 1-n / n-1

let n = Number(prompt("Enter a number: "));

function printNaturalNumbers(num) {

     
     if (num ===0) return
     process.stdout.write(" " + num + " ");
      printNaturalNumbers(num - 1);
   

}
// printNaturalNumbers(n);
console.log();


//*—Q 75.Print natural number 1-n

let c = 1;
function printNaturalNumbers1(num) {
     if(num===0) return
    process.stdout.write( " " + c++ + " ");
    printNaturalNumbers1(num - 1);
   
}

// printNaturalNumbers1(n);


//*—Q 76.Sum Using Recursion

function sumOfNaturalNumbers(num) {
     if (num === 0) return 0;
     return num + sumOfNaturalNumbers(num - 1);
}
console.log(sumOfNaturalNumbers(n) );

//*—Q 77.Factorial Using Recursion

function factorial(num) {

        if (num === 0) return 1;
        return num * factorial(num - 1);
  }

  console.log(factorial(n));
  






