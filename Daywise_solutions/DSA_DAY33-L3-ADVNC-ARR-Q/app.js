const { matchRoutes } = require("react-router");


let prompt = require("prompt-sync")();

// let computer = parseInt(Math.random()*100)
// let usergess  = 0;
// do{
 
//     usergess = parseInt(prompt('Enter a Number Between 1 to 100 : '))

//     if(usergess>computer){
//         console.log("To high "); 
//     }else if(usergess<computer){
//         console.log("To low ");

        
//     }else console.log('congratulation 🎉 ' + computer)

// }while(usergess!=computer)




    // * —Q 90. 75. Sort Color [ Efficient ] using swap() fun

var sortColors = function(nums) {
let i = 0;
let j = 0;
let k  = nums.length-1;

function swap(nums,i,j){

     let temp = nums[i]
     nums[i] = nums[j]
     nums[j] = temp

}
while(i<=k){
     if(nums[i] ===0) swap(nums,i++,j++)
     else if(nums[i]===2) swap(nums,i,k--)
     else i++  
}
};


    //*—Q 91.  42. Traipping Rain Water  ✅ 
    var trap = function(height) {

  let maxleft = height[0];
  let maxright = height[height.length-1];

 

  let left = new Array(height.length)
  let right = new Array(height.length)
  left[0] = maxleft;
   right[height.length-1] = maxright

  for(let i = 0;i<height.length;i++){
    // if(height[i]>maxleft){ 
    //      maxleft = height[i];
    //      left[i] = maxleft
    // }else{
    //     left[i] = maxleft
    // }

      maxleft =  Math.max(height[i],maxleft)
       left[i] = maxleft
  }

  for(let j = height.length-2;j>=0;j--){
    // if(height[j]>maxright){
    //      maxright = height[j];
    //      right[j] = maxright
    // }else{
    //     right[j] = maxright
    // }

        maxright = Math.max(height[j],maxright)
        right[j] = maxright 
  }

  let ans = 0;

  for(let k = 0;k<height.length;k++){

       ans += Math.min(left[k],right[k]) - height[k]
    // console.log(left[k] +  ' ' + right[k])

  }

  return ans 

    
};


// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));



function reverseArray(a) {
    // Write your code here

    let j = a.length-1;
    let i = 0;
    while(i<j){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++
        j--
    }
    
    return a 

}

console.log(reverseArray([1,2,3]));

