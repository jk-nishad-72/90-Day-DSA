
//* Taking array input 

const e = require('express');

let prompt = require('prompt-sync')();
let size = Number(prompt('Enter Array Size : '))
let arr = new Array(size)

for(let i =0;i<size;i++){
    arr[i] = Number(prompt('Enter Array Elements : '))

}

console.log(arr)



/**
— Q 29. Array left rotation by K elements
   Three method to solve  it :-
   a) Bruite force 
   b) with extra space 
   c) 2(i,j) pointer algoritham ()

 */

//*  a) Bruite force 

let k = Number(prompt('Enter value of k : '))

k = k%arr.length

function leftBruiterotationByk(arr,k){

    
let i =1;
while(i<=k){

    let cp  = arr[0]

    for(let i = 0 ;i<arr.length-1;i++){
           arr[i] = arr[i+1]
         
    }
    arr[arr.length-1] = cp
     i++

}

return arr
}

// console.log(leftBruiterotationByk(arr,k));

//*  b) with extra space 

function leftRotationUsingExtraSpace(arr,k){

    let copy = new Array(arr.length)

    for(let i = 0;i<arr.length;i++){
        copy[i] = arr[(i+k)%arr.length];
    }

    return copy

}
console.log(leftRotationUsingExtraSpace(arr,k));
















// * — Q 30. Linear Search an array - If element found print the index else -1


function linearSearch(arr, target) {
   
   let key = -1
    for(let i =  0;i<arr.length;i++){
        
        if(arr[i] === target) {
            
             key = i
             break
        }
    }
    return key
}


// console.log(linearSearch([1,2,3,4,5],6))

//*— Q 31. Binary Search 

function BinarySearch(arr,target){
    let start = 0;
    let end = arr[arr.length-1]

while(start<end){

    let mid = Math.floor(start+(end-start)/2)

    if(arr[mid]===target){ return mid }
     else if(arr[mid]<target) { start = mid+1 }
     else { end = mid-1}
}

}

// console.log(BinarySearch([2,23,45,60,69,96],96));

