# Sorting and Array Problems in JavaScript

This document explains the implementation, time complexity, and space complexity of four algorithms/problems written in JavaScript.

---

## 🌀 Quick Sort

### Code

```javascript
function Quicksort(arr, first, last) {
  if (first >= last) return;
  let pIndx = findIndex(arr, first, last);
  Quicksort(arr, first, pIndx - 1);
  Quicksort(arr, pIndx + 1, last);
}

function findIndex(arr, first, last) {
  let pivot = arr[last];
  let i = first - 1;

  for (let j = first; j < last; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  i++;
  swap(arr, i, last);
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

### Explanation
- **Pivot selection**: The last element of the array/subarray is chosen as the pivot.
- **Partition step**: All elements smaller than the pivot are moved to the left, and larger ones to the right.
- **Recursive calls**: The function recursively sorts the left and right partitions.

### Time Complexity
| Case | Time Complexity |
|------|------------------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n²) (when array is already sorted or reverse sorted) |

### Space Complexity
- **O(log n)** → due to recursive stack space.

---

## 🔁 Cyclic Sort (1 to n)

### Code

```javascript
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
```

### Explanation
- Each number from `1` to `n` should be at index `number - 1`.
- Swap elements until every element is placed at its correct index.

### Time Complexity
- **O(n)** → Each number is swapped at most once.

### Space Complexity
- **O(1)** → Sorting is done in-place.

---

## ❓ Q94. Missing Number (LeetCode #268)

### Code

```javascript
var missingNumber = function (nums) {
  let ansArr = new Array(nums.length + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
    ansArr[nums[i]] = nums[i];
  }

  for (let j = 0; j < ansArr.length; j++) {
    if (ansArr[j] === false) return j;
  }
};
```

### Explanation
- Create an auxiliary array `ansArr` of size `n+1` filled with `false`.
- Mark indices corresponding to the elements of `nums`.
- The index not marked represents the missing number.

### Time Complexity
- **O(n)** → Single traversal of the array.

### Space Complexity
- **O(n)** → Extra array used for marking.

---

## ❌ Q95. Find All Numbers Disappeared in an Array (LeetCode #448)

### Code

```javascript
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
```

### Explanation
- Create a boolean array to mark numbers that exist.
- Indices with `false` correspond to missing numbers in the input array.

### Time Complexity
- **O(n)** → Two traversals of the array.

### Space Complexity
- **O(n)** → Due to extra array `temp`.

---

📘 **Summary Table**

| Algorithm | Time Complexity | Space Complexity |
|------------|----------------|------------------|
| Quick Sort | O(n log n) avg, O(n²) worst | O(log n) |
| Cyclic Sort | O(n) | O(1) |
| Missing Number | O(n) | O(n) |
| Numbers Disappeared | O(n) | O(n) |
