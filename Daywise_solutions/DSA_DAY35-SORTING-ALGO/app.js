let prompt = require("prompt-sync")();

//*—Q 93.  15. 3Sum(Brute force[O(n^3)] and Optimised[O(n*logn)] )

function sum3() {
  let size = parseInt(prompt("Enter Array size : "));

  let arr = new Array(size);

  for (let index = 0; index < size; index++) {
    arr[index] = parseInt(prompt(`Enter Array elements ${index + 1} : `));
  }

  console.log(find(arr));

  function find(nums) {
    let ans = [];
    let n = nums.length;

    // Sort to make duplicate handling easier
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

      for (let j = i + 1; j < n - 1; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicate j

        for (let k = j + 1; k < n; k++) {
          if (k > j + 1 && nums[k] === nums[k - 1]) continue; // skip duplicate k

          let sum = nums[i] + nums[j] + nums[k];
          if (sum === 0) ans.push([nums[i], nums[j], nums[k]]);
        }
      }
    }

    return ans;
  }
}

sum3();

function sum3b() {
  var threeSum = function (nums) {
    let ansArr = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      if (nums[i] > 0) break;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let total = nums[i] + nums[left] + nums[right];
        if (total === 0) {
          ansArr.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (total < 0) left++;
        else right--;
      }
    }
    return ansArr;
  };
}

// sum3b()

//*—Q 94.  Merge Sort Algorithm ☑️

var Merge94 = function () {
  let size = parseInt(prompt("Enter Array size : "));

  let arr = new Array(size);

  for (let index = 0; index < size; index++) {
    arr[index] = parseInt(prompt(`Enter Array elements ${index + 1} : `));
  }
  console.log(mergeSort(arr, 0, arr.length - 1));
  function mergeSort(arr, left, right) {
    divideSort(arr, left, right);
    function divideSort(arr, left, right) {
      if (left >= right) return;
      let mid = Math.floor((left + right) / 2);
      divideSort(arr, left, mid);
      divideSort(arr, mid + 1, right);
      conquer(arr, left, mid, right);
    }
    function conquer(arr, left, mid, right) {
      let temp = new Array(right - left + 1).fill(0);
      let i = left,
        j = mid + 1,
        k = 0;
      while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
          temp[k++] = arr[i++];
        } else {
          temp[k++] = arr[j++];
        }
      }
      while (i <= mid) temp[k++] = arr[i++];
      while (j <= right) temp[k++] = arr[j++];

      i = left;
      k = 0;
      while (k < temp.length) {
        arr[i++] = temp[k++];
      }
    }

    return arr;
  }
};






// Merge94()
