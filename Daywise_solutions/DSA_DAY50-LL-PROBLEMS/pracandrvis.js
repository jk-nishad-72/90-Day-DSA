

let prompt = require('prompt-sync')();

// let n = Number(prompt("Enter a Number : "))

// let sum =0 , copy = n;

// while(n>0){
//     let rem = parseInt(n%10) 
//     sum += rem;
//     n = parseInt(n/10) 

//     // console.log(n);
    
// }

// if(copy%sum == 0) console.log('Harshad Number ');
// else console.log('Not Harshad Number ');


let size = Number(prompt("Enter a Array size : "))

let arr = new Array(size)

for (let index = 0; index < arr.length; index++) {
  arr[index] = Number(prompt(`Enter Array elements ${index+1 } : `))  
}

let max = 0,secondMax = 0;

for(let i = 0;i<arr.length;i++){
    
    if(arr[i]>max){

         if(max != secondMax && max > secondMax){
            secondMax = max;
         }
         max = arr[i]
    }
}

console.log(secondMax);


