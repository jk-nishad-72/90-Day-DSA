//*-Q 79.Factor's of Number (Brute force O(n) & Optimise O(sqrt(n))) *-//

let prompt = require('prompt-sync')();

//* Brute Force O(n)

function factorsBruteForce() {
    let n = Number(prompt("Eneter a number: "));
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }else{
           for(let i  = 1;i<=n;i++){
    if (n%i===0) process.stdout.write(i+' ')
}
    }
}

factorsBruteForce();
console.log('\n');

//* Optimised O((n/2))
function factorsOptimised() {

    let n = Number(prompt("Eneter a number: "));

     for(let i = 1;i<=Math.floor(n/2);i++){

         if(n%i ===0) process.stdout.write(i+' ')
     }
        process.stdout.write(n+' ')

}


factorsOptimised();


