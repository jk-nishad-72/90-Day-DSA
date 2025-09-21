
//* ✅ Q. Strong Number  


let prompt = require('prompt-sync')()

// let n = Number(prompt('Enter a Number : '))

function strongNumber(n){
    
let copy =n;
let ans = 0;

while(n>0){

    let rem = n%10;
    let fact = 1;
    for(let i=1;i<=rem;i++){
        fact = fact*i
    }
    ans = ans+fact
    n = Math.floor(n/10)
}

if(copy===ans) return console.log(' Strong Number ')
else return console.log('Not Strong Number ')

}

// console.log(strongNumber(n));


//*— Accept value from user and assign in the array

let size = Number(prompt('Enter Array size : '))
let arr = new Array(size)

function AcceptAndPrintArray(size,arr){
    
for (let i = 0; i<size; i++) {
     
 arr[i] = Number(prompt('Enter Array Element : '))
    
}

 return (arr);
}

 AcceptAndPrintArray(size,arr)
// console.log(AcceptAndPrintArray(size,arr));

//*— Q 23. Sum of array’s element

function SumOfArrayElements(arr){

     let sum = 0;
     for(let i=0;i<arr.length;i++){
         
         sum += arr[i]
     }

     return sum 
}

console.log(SumOfArrayElements(arr));


//*— Q 24. Max element from array✅

function findGreatestElementAndIndex(arr) {

    let max = arr[0];
    let maxIdex =0;
    for(let i = 1;i<arr.length;i++){
        if(max<arr[i]) {
            max = arr[i]
            maxIdex = i;
        }
    }
    
    return [max,maxIdex]
    
}

console.log(findGreatestElementAndIndex(arr));

//*— Q 24. Min element from array✅

function findsmallestElementAndIndex(arr) {

    let min = arr[0];
    let minIdex =0;
    for(let i = 1;i<arr.length;i++){
        if(min>arr[i]) {
            min = arr[i]
            minIdex = i;
        }
    }
    
    return [min,minIdex]
    
}

console.log(findsmallestElementAndIndex(arr));






