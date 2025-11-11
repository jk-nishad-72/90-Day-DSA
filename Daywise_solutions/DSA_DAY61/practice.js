
//*A neon number i 

let prompt = require('prompt-sync')();

// let n = parseInt(prompt("Enter a number: "));

// let square = n * n;

// let copy = n


// let sum = 0;

// while(square>0){

//     let digit = square % 10;
//     sum += digit;
//     square = Math.floor(square / 10);

// }

//  if(sum === copy){
//     console.log(n + " is a neon number");
//  }else{
//     console.log(n + " is not a neon number");
//  }


 //* left k Rotaion 


let arr =[10,20,30,40,50];
let k  = parseInt(prompt('Enter a Nm of k Rotation : '))



function leftKRotate(arr,k){

     reverse(arr,0,k-1)
     reverse(arr,k,arr.length-1)
     reverse(arr,0,arr.length-1)

     return arr

}
function righttKRotate(arr,k){

     reverse(arr,0,arr.length-1)
     reverse(arr,k,arr.length-1)
     reverse(arr,0,k-1) 

     return arr

}

var reverse = function(arr,i,j){

   while(i<=j){
      let temp = arr[i];
     arr[i] = arr[j];
     arr[j]=temp;
     i++;
     j--;
   }

}

// console.log(leftKRotate(arr,k));
console.log(righttKRotate(arr,k)); 

