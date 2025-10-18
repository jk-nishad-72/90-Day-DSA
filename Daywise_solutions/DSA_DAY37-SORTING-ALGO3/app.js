let prompt = require("prompt-sync")();

let size = parseInt(prompt("Enter Array size: "));

let nums = new Array(size);

for (let i = 0; i < size; i++) {
  nums[i] = parseInt(prompt(`Enter elements between 0 to n  ${i + 1} :  `));
}

console.log(nums);

//*— Cyclic Sort  ☑️ [0 ot n]

var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function CyclicSort(nums) {
  let i = 0;

  while (i < nums.length) {
    let correctIndex = nums[i];
    if (nums[correctIndex] != nums[i]) {
      swap(nums, correctIndex, i);
    } else {
      i++;
    }
  }
  return nums;
}

console.log(CyclicSort(nums));



//*—Q94. 268. Missing Number Optimise cyclic solution ✅

var missingNumber = function(nums) {
   let i = 0;
   while(i<nums.length){
    let correctIndex = nums[i] 
          if(nums[i]<nums.length && nums[correctIndex] != nums[i]){
            swap(nums,correctIndex,i)
          } else{
            i++
          }
   }
   for(let i = 0;i<nums.length;i++){
      
       if(nums[i]!=i) return i
   }

   return nums.length

    
};


//*—Q95. 448. Find all the number disappeared in an array Using cyclic sort ✅

var findDisappearedNumbers = function(nums) {
 let ans = []
 let i = 0;
   while(i<nums.length){
    let correctIndex = nums[i]-1
          if(nums[correctIndex] != nums[i]){
            swap(nums,correctIndex,i)
          } else i++  
   }
   for(let i = 0;i<nums.length;i++){
       if(nums[i]!=i+1)  ans.push(i+1)
   }
   return ans
};

//*—Q96. 41.  Find first missing Number .✅

var firstMissingNUm = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (nums[i] > 0 && nums[i] < nums.length && nums[i] != nums[correctIndex]) {
      swap(nums, correctIndex, i);
    } else i++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) return i + 1;
  }

  return nums.length + 1;
};

console.log(firstMissingNUm(nums));
