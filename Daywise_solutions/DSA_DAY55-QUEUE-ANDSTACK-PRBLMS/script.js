

let prompt = require('prompt-sync')()

 
function chekPrime(n) {
  if (n === 0) return "Invalid input";
  if (n == 1) return true;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= parseInt(Math.sqrt(n)); i+=2) {
    if (n % i == 0) return false;
  }
  return true;
}

function primefactorsofn(){
    let  n = Number(prompt('Enter a num : '))

     let ans = []

    for(let i =1;i<=parseInt(n/2);i++){
         if(n%i==0){
            if(chekPrime(i)){
                ans.push(i)
            }
         }
    }

    return ans
}

console.log(primefactorsofn());

//* Array 


