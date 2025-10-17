//*— Quick Sort

function Quicksort(arr, first, last) {
  if (first >= last) return;
  let pIndx = findIndex(arr, first, last);
  Quicksort(arr, first, pIndx - 1);
  Quicksort(arr, pIndx + 1, last);
}

function findIndex(arr, first, last) {
  let pivot = arr[last];
  let i = first - 1;

  for (let j = 0; j < pivot; j++) {
    if (arr[j] < arr[pivot]) {
      i++;
      swap(arr, i, j);
    }
  }

  i++;
  swap(arr, i, last);
  return i;
}

var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//*— Cyclic Sort  1 to n [1,n]

function CyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correctIndex = arr[i] - 1;
    if (arr[correctIndex] != arr[i]) {
      let temp = arr[correctIndex];
      arr[correctIndex] = arr[i];
      arr[i] = temp;
    } else i++;
  }
  return arr;
}

console.log(CyclicSort([5, 2, 3, 1, 4]));

//*--Q 94. 268. Missing Number

// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {
  let ansArr = new Array(nums.length + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
    ansArr[nums[i]] = nums[i];
  }

  for (let j = 0; j < ansArr.length; j++) {
    if (ansArr[j] === false) return j;
  }

  console.log(ansArr);
};
// console.log(missingNumber(nums));

//*--Q 95. 448. Find all the numbers dissppeared in an array

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

function numbersdisappeared(nums) {
  let temp = new Array(nums.length).fill(false);

  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    temp[nums[i] - 1] = nums[i];
  }

  for (let j = 0; j < temp.length; j++) {
    if (temp[j] === false) ans.push(j + 1);
  }

  return ans;
}

// console.log(numbersdisappeared(nums));
