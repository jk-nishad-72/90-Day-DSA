

 let prompt = require('prompt-sync')()

  let size = Number(prompt("Enter Array size : "))
 let arr  = new Array(size)

 for(let i =0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter Array Elements : "))

 }

 console.log(arr)

//*— Q 25. Second max element from array 

function findSecondGreatestElement(arr) {
    let max = Math.max(arr[0],arr[1])
    let Secmax = Math.min(arr[0],arr[1])
    for(let i = 2;i<arr.length;i++){
        if(arr[i]>max){
            Secmax = max
            max = arr[i]
        }
        else if(arr[i]>Secmax && arr[i]!=max){
             Secmax=arr[i]
        }}
    return Secmax
}
console.log(findSecondGreatestElement(arr));



/** 
 * — Q 26. Reverse the array  :-
     
 */

//* a.)with extra space 

function copyAndReverseArray(arr) {
   let temp = new Array(arr.length)
   
   let j = 0;
   for(let i = arr.length-1;i>=0;i--){
       temp[j] = arr[i]
       j++
   }
    
    return temp
}
console.log(copyAndReverseArray(arr));



//*  b.)without extra space (2 poiter algo)

function reverseArrayInPlace(arr) {

var i = 0;
var j = arr.length-1;
while(i<j){
      let temp = arr[i];
       arr[i] = arr[j]
       arr[j] = temp
       i++
       j--
}
}
console.log(reverseArrayInPlace(arr));



//* — Q 27. All zeroes to left and all ones to right (2 poiter) inPlace 

function moveZerosToEnd(arr) {
   let i = 0;
   let j = 0;
   while(i<arr.length){
       if(arr[i] == 0){
           let temp = arr[j]
           arr[j] = arr[i]
           arr[i] = temp
           j++
       }
       i++ }
   return arr
    
}

console.log(moveZerosToEnd(arr));









//* — Q 28. Array left Rotation by 1 


function leftRotateByOne(arr) {
    let copy = arr[0]
    
    for(let i =0;i<arr.length-1;i++){
         
          arr[i] = arr[i+1] 
          
    }
    arr[arr.length-1]  = copy
    
    return arr
}

console.log(leftRotateByOne(arr));
