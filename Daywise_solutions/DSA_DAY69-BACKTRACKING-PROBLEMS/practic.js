
//*Permutations in which n people can occupy r seats in a classroom in java

// *       n P r  =    n! / (n-r)!

let prompt = require('prompt-sync')();

function Permutations(){
    let n = parseInt(prompt('Enter Number of Student : '))
let r = parseInt(prompt('Enter Number of seats available in classroom : '))

var factorial = function(num){

    let fact = 1;
    for(let i =1;i<= num ;i++){
         fact *= i
    }
    return fact

}

let ans = parseInt(factorial(n)/factorial(n-r))

console.log(`${n} Student can occupy ${ans} Number of seats in classroom `);
}



//* bubble sort 

let arr = [10,5,9,7,4];


for(let i = 0;i<arr.length-1;i++){

     for(let j = 0;j<arr.length -i+1;j++){

         if(arr[j] > arr[j+1]) {

             let temp = arr[j]
             arr[j] = arr[j+1]
             arr[j+1] = temp
         }
     }
}

console.log(arr);
