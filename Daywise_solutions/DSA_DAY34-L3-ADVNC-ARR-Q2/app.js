   let prompt = require('prompt-sync')();

/**
—Q 92.  11.  Container with most Water [area = length*breadth] 
   a) brute force 
   b) optimise  2 pointer
 */

 var arrayInput = function(){
   
   let size = parseInt(prompt('Enter ArraY size : '))
   let height = new Array(size)


   for(let i = 0;i<size;i++){

       height[i] = parseInt(prompt(`Enter elements ${i+1} : `))


   }

   console.log(height);
}
   //* a) brute force 
var maxArea = function(height){
 
 let ans  = 0;

 for(let i = 0;i<height.length;i++){
    for(let j = i+1;j<height.length;j++){
        ans = Math.max(ans,(Math.min(height[i] , height[j])*(j-i)))
    }
 }

 return ans

    
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));


//* b) optimise  2 pointer

var maxArea2 = function(height){
 
let ans = 0;
let i = 0;
let j = height.length-1;
while(i<j){
ans = Math.max(ans,(Math.min(height[i] , height[j])* (j-i)))

 if(height[i] < height[j]) i++
 else j--
}

 return ans

    
};


// console.log(maxArea2([1,8,6,2,5,4,8,3,7]));


//* —Q 93.  15. 3Sum .  [HOmework]  ✅☑️ 



nums =   [-1,0,1,2,-1,-4]



console.log(sum3(nums));
function sum3(nums) {
  let ansArr = [];

  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Iterate through array
  for (let i = 0; i < nums.length - 2; i++) {

    // Skip duplicate 'i' values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Optimization: if nums[i] > 0, break (no triplet can sum to 0 after this)
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        ansArr.push([nums[i], nums[left], nums[right]]);

        // Step 3: Skip duplicates for 'left'
        while (left < right && nums[left] === nums[left + 1]) left++;

        // Step 4: Skip duplicates for 'right'
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers after skipping
        left++;
        right--;
      } 
      else if (total < 0) left++;
      else right--;
    }
  }

  return ansArr;
}
