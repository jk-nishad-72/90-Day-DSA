//*-Q 79.Factor's of Number (Brute force O(n) & Optimise O(sqrt(n))) *-//

let prompt = require("prompt-sync")();

//* Brute Force O(n)

function factorsBruteForce() {
  let n = Number(prompt("Eneter a number: "));
  if (n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) process.stdout.write(i + " ");
    }
  }
}

// factorsBruteForce();
console.log("\n");

//* Optimised O((n/2))
function factorsOptimised() {
  let n = Number(prompt("Eneter a number: "));

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) process.stdout.write(i + " ");
  }
  process.stdout.write(n + " ");
}

// factorsOptimised();

// * —Q 80.Count of primes (Sieve of eratosthenes) 

// * Brute Force O(n*sqrt(n))

function countOfPrimesBruteForce() {

    let n = Number(prompt("Eneter a number: "));

     let ans = []
     for(let i = 1;i<=n;i++){

         if(isPrime(i)==undefined){
            continue}
            else{
          ans.push(i)
    }
     }

     console.log(ans)
     function isPrime(n){
        if(n===1) return n
        if(n===2) return n
        if(n%2===0) return 
        for(let i =3;i<=Math.sqrt(n);i+=2){
            if(n%i===0) return
        }

        return n
     }
}
// countOfPrimesBruteForce()


// * Optimised O((n*sqrt(n)) Sieve of eratosthenes


function countOfPrimesOptimised() {

    let n = Number(prompt("Eneter a number: "));   

    let isPrime = new Array(n+1).fill(true)

    for(let i = 2;i<=Math.floor(Math.sqrt(n));i++){
        if(isPrime[i]===true){
            for(let j = i*i;j<=n;j+=i){
                isPrime[j] = false
            }
    }
}

 
for(let i = 1;i<=n;i++){
    if(isPrime[i]===true && i>=1) process.stdout.write(i + " ")
}

}

countOfPrimesOptimised()



