
//*—Q 85. 1089.Duplicate Zeros (Brute force and Optimised)

let prompt = require('prompt-sync')();



//*Bruite force 

function Solution1(){
    
 let size  = parseInt(prompt('Enter array size : '))
 
  let arr = new Array(size)
  for(let i = 0;i<size;i++){
    arr[i]  = parseInt(prompt(`Enter element at Indext ${i+1} : `))

  }
  console.log(arr);
  

 var duplicateZeros = function(arr) {

    let j = 0

   let ansArr = new Array(arr.length) 

  for(let i = 0;i<arr.length;i++){
    if(arr[i]=== 0){
        ansArr[j] = 0
        ansArr[j+1] = 0
        j = j+2;
    }else{
        ansArr[j] = arr[i]
           j++
    }
  }
   for(let i = 0;i<arr.length;i++){
        arr[i] = ansArr[i]
    }

     return arr
};

console.log(duplicateZeros(arr));

}

// Solution1();

//* Optimised Solution 

function Solution2(){

    let size  = parseInt(prompt('Enter array size : '))
 
  let arr = new Array(size)
  for(let i = 0;i<size;i++){
    arr[i]  = parseInt(prompt(`Enter element at Indext ${i+1} : `))

  }
  console.log(arr);


    var duplicateZeros = function(arr) {
    let CountZeros = 0;
    for(let i = 0;i<arr.length;i++){
          if(arr[i] ===0) CountZeros++;
    }
    let i = arr.length-1;
    let j = arr.length-1 + CountZeros;
    while(i<j){
   if( j<arr.length) arr[j] = arr[i]
     j--
     if(arr[i] === 0)  {
        if(j<arr.length) arr[j] = 0
        j--
     }
     i--
     } 

     return arr
};
console.log(duplicateZeros(arr));



}

Solution2()



//*—Q 86. 283.Move Zeros  [Homework] ✅✅



var Solution3 = function(){

 
     let size = parseInt(prompt('Enter Array Size : '))

     let nums = new Array(size)

     for (let index = 0; index < nums.length; index++) {
      nums[index] = parseInt(prompt(`Enter Array elements ${index+1} : `))
     }
     console.log(nums);
     
     
    var moveZeroes = function(nums) {
    let i = 0;
    for(let j = 0;j<nums.length;j++){
         if(nums[j]!=0) {
            let temp = nums[j]
            nums[j] = nums[i] 
            nums[i] = temp 
            i++
         }
    }

    return nums

};

  console.log(moveZeroes(nums));
  
}

// Solution3()




