let prompt  = require('prompt-sync')();

//*Abundant Number -> sum of all divisor of a number is greater than those number called abundant number 

var abundantNum = function(){


    let n = Number(prompt('Enter a Num (to check Abundant ) : '))

      let sum = 0;

      for(let i = 1;i<= n/2 ; i++){

         if(n%i === 0) sum+= i
      }

      if(sum>n) return  `${n} is Abundant`
        else return  `${n} is not Abundant`
     
}

// console.log(abundantNum());


// * Array 

let size = parseInt(prompt("Array size : "))

let arr = new Array(size)


for(let i = 0;i<size;i++){
    arr[i] = Number(prompt(`Array elements : `))

}

function zerosAndoneExtraSpace(arr){

     let ans = new Array(arr.length).fill(1)  
     let j = 0;

     for (let index = 0; index < arr.length; index++) {

        if(arr[index] === 0) {
            ans[j] = arr[index];
            j++
          }  
     }
     return ans
}
// console.log(zerosAndoneExtraSpace(arr));

function InplaceZerosAndOne(arr){

    let i = 0;
    let j = arr.length-1;
    while(i<=j){

        if(arr[i] === 1) {
            let temp = arr[i] ;
            arr[i]  = arr[j] ;
            arr[j] = temp;
            j--
        }else i++
    }

    return arr
}

console.log(InplaceZerosAndOne(arr));









