


//*Q76. Fibonacci Series using Recursion

let prompt = require('prompt-sync')();4

let n = Number(prompt("Enter a number: "));

//*➡️ a) Print First N Terms of Fibonacci Series



function fibonacciSeries(n, a = 0, b = 1) {
    if (n === 0) return;
    console.log(a);
    fibonacciSeries(n - 1, b, a + b);
}





//*➡️ b) Find Nth Term in Fibonacci Series


function fibonacciNth(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}
