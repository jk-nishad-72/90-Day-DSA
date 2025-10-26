//*—Q 110. **525. Contiguous Array**
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }
  }
  let k = 0,
    sum = 0,
    longest = 0;
  let map = new Map();
  map.set(sum, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      longest = Math.max(longest, i - map.get(sum - k));
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return longest;
};

//* —Q 111.  **128. Longest Consecutive Sequence**
// var longestConsecutive = function(nums) {

//     nums.sort((a,b)=> a-b)

//     console.log(nums);

// let longest = 0,count = 1;
//   for(let i = 0;i<nums.length;i++){
//     if(nums[i] == nums[i-1]) continue
//     else if(nums[i+1] == nums[i]+ 1 ) count++
//     else {
//          longest = Math.max(longest,count)
//          count = 1
//     }
//   }
//   return longest
// };

// console.log(longestConsecutive([100,4,200,1,3,2]));

/**  —Q 111.  **128. Longest Consecutive Sequence**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      // only start at the beginning of a sequence
      let current = num;
      let count = 1;
      while (set.has(current + 1)) {
        current++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

function countDistinct(arr, k) {
  // code here
  let ans = [];

  let map = new Map();

  for (let i = 0; i < k - 1; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let i = 0;
  let j = k - 1;

  while (j < arr.length) {
    if (map.has(arr[j])) {
      map.set(arr[j], map.get(arr[j]) + 1);
    } else {
      map.set(arr[j], 1);
    }

    ans.push(map.size);

    if (map.get(arr[i]) === 1) {
      map.delete(arr[i]);
    } else {
      map.set(arr[i], map.get(arr[i]) - 1);
    }

    i++;
    j++;
  }

  console.log(map);

  return ans;
}
console.log(countDistinct([1, 2, 1, 3, 4, 2, 3], 4));

let map = new Map();

map.set(10, 1);
map.set(20, 1);
map.set(30, 1);
map.set(40, 1);

console.log(map);
console.log(map.size);

console.log(map.delete(10));

console.log(map);
console.log(map.size);
