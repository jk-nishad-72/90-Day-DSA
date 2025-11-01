
//* Perfect Squar 
let prompt = require('prompt-sync')();

let n = parseInt(prompt('Enter a Number (to check Perfect Squar ) : '))


function checkPrefectSquar(n){

   let sqrt = Math.sqrt(n)
   if(sqrt*sqrt === n) return  `${n} is a Perfect Squar `
   else return  `${n} is a Not Perfect  Squar `
}

// console.log(checkPrefectSquar(n));


//* Reverse Array 


let size = parseInt(prompt('Enter Array Size : '))

let  arr = new Array(size)

for(let i = 0;i<arr.length;i++){
    arr[i] = Number(prompt(`Enter Array elements at index ${i +1 } : `))
}

// let temp  = []

// let j = 0;

// for(let i = arr.length-1;i>=0;i--){
//     temp[j++] = arr[i]
// }

// console.log(temp);

let i = 0, j = arr.length-1;

while(i<=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--
    i++
}

console.log(arr);



