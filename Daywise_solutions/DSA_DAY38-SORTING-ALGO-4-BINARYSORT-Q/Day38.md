Here’s your full **Markdown (`.md`) file**, Jay — clean, detailed, and formatted perfectly for study or GitHub documentation 👇

---

```markdown
# 🔢 Binary Search Problems (Q97 - Q100)

This file contains **four important LeetCode problems** based on **Binary Search and Searching Techniques**, with complete explanations, code, and time-space complexity analysis.

---

## 🧭 Q97. [704. Binary Search](https://leetcode.com/problems/binary-search/)

### 📘 Problem:
Given a **sorted array** `nums` and an integer `target`, return the **index** of `target` if it exists, otherwise return **-1**.

---

### 💡 Explanation:

We apply the **binary search algorithm**, which divides the search space in half after each comparison.

**Steps:**
1. Set two pointers:
   - `first = 0`
   - `last = nums.length - 1`
2. While `first <= last`, find the middle index:
```

mid = Math.floor((first + last) / 2)

````
3. Compare `nums[mid]` with `target`:
- If equal → return `mid`
- If smaller → move right (`first = mid + 1`)
- If larger → move left (`last = mid - 1`)
4. If not found → return `-1`

---

### 💻 Code:
```js
var search = function(nums, target) {
let first = 0; 
let last = nums.length - 1;

while (first <= last) {
 let mid = parseInt((first + last) / 2);
 
 if (nums[mid] === target) return mid;
 else if (nums[mid] < target) first = mid + 1;
 else last = mid - 1;
}

return -1;
};
````

---

### ⏱️ Time & Space Complexity:

| Type      | Complexity |
| --------- | ---------- |
| **Time**  | O(log n)   |
| **Space** | O(1)       |

---

## ⚙️ Q98. [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

### 📘 Problem:

Given a sorted array `nums` and a `target`, return the **index** if the target is found.
If not, return the **index where it would be inserted** to maintain the order.

---

### 💡 Explanation:

Similar to Binary Search, but when the loop ends, the `first` pointer represents the correct **insert position**.

**Logic:**

* Perform normal binary search.
* If target is found → return index.
* If not found → return `first` (the position where target should be inserted).

---

### 💻 Code:

```js
var searchInsert = function(nums, target) {
  let first = 0; 
  let last = nums.length - 1;
  
  while (first <= last) {
    let mid = parseInt((first + last) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) first = mid + 1;
    else last = mid - 1;
  }
  
  return first; // insertion position
};
```

---

### ⏱️ Time & Space Complexity:

| Type      | Complexity |
| --------- | ---------- |
| **Time**  | O(log n)   |
| **Space** | O(1)       |

---

## 🎯 Q99. [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### 📘 Problem:

Given a sorted array `nums` and a `target`, find the **first and last position** of that target value.
If not found, return `[-1, -1]`.

---

### 💡 Explanation:

We use **modified binary search** twice:

1. Once to find the **first occurrence**.
2. Once to find the **last occurrence**.

---

### 🪜 Logic:

* While searching:

  * If `nums[mid] == target`, store `mid` in `ans`.
  * If searching for the first index → move `last = mid - 1`.
  * If searching for the last index → move `first = mid + 1`.
* Continue until all possible positions are checked.

---

### 💻 Code:

```js
var findFirstEndPosition = (nums, target, isStartIndex) => {
  let first = 0;
  let last = nums.length - 1;
  let ans = -1;
  
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    
    if (nums[mid] === target) {
      ans = mid;
      if (isStartIndex) last = mid - 1;
      else first = mid + 1;
    }
    else if (nums[mid] < target) first = mid + 1;
    else last = mid - 1;
  }
  
  return ans;
};

var searchRange = function(nums, target) {
  let start = findFirstEndPosition(nums, target, true);
  let end = findFirstEndPosition(nums, target, false);
  return [start, end];
};
```

---

### ⏱️ Time & Space Complexity:

| Type      | Complexity                     |
| --------- | ------------------------------ |
| **Time**  | O(log n) — two binary searches |
| **Space** | O(1)                           |

---

## 🏁 Q100. [3159. Find Occurrences of an Element in an Array](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/)

### 📘 Problem:

You are given:

* An integer array `nums`
* An integer array `queries`
* A number `x`

For each `queries[i]`, return the **index of the queries[i]th occurrence of `x`** in `nums`.
If there are fewer occurrences, return **-1**.

---

### 💡 Explanation:

**Step 1:**
Collect indices of all occurrences of `x`.

**Step 2:**
For each query:

* If `queries[i]` ≤ total occurrences, return the `(queries[i] - 1)`th index.
* Else, return `-1`.

---

### 💻 Code:

```js
let nums = [1, 3, 1, 7], queries = [1, 3, 2, 4], x = 1;

var occurrencesOfElement = function(nums, queries, x) {
  let occurrence = [];
  let ans = [];

  // Step 1: find all occurrences of x
  for (let i = 0; i < nums.length; i++) {
    if (x === nums[i]) occurrence.push(i);
  }

  // Step 2: answer queries
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] > occurrence.length) ans.push(-1);
    else ans.push(occurrence[queries[i] - 1]);
  }

  return ans;
};

console.log(occurrencesOfElement(nums, queries, x));
```

---

### 🧮 Example:

```
nums = [1, 3, 1, 7]
queries = [1, 3, 2, 4]
x = 1
```

Occurrences of 1 → indices [0, 2]

| Query | Meaning             | Result |
| ----- | ------------------- | ------ |
| 1     | 1st occurrence of 1 | 0      |
| 3     | 3rd occurrence      | -1     |
| 2     | 2nd occurrence      | 2      |
| 4     | 4th occurrence      | -1     |

✅ Output → `[0, -1, 2, -1]`

---

### ⏱️ Time & Space Complexity:

| Type      | Complexity                                        |
| --------- | ------------------------------------------------- |
| **Time**  | O(n + q) — one pass for `nums`, one for `queries` |
| **Space** | O(k) — to store all occurrences of `x`            |

---

## 🧩 Summary

| Question | Concept                | Time     | Space |
| -------- | ---------------------- | -------- | ----- |
| Q97      | Basic Binary Search    | O(log n) | O(1)  |
| Q98      | Search Insert Position | O(log n) | O(1)  |
| Q99      | First & Last Position  | O(log n) | O(1)  |
| Q100     | Occurrences of Element | O(n + q) | O(k)  |

---

### ✨ Author: **JK Nishad**

GitHub: [@jk-nishad-72](https://github.com/jk-nishad-72)
Instagram: [tech_vibes934](https://instagram.com/tech_vibes934)
LinkedIn: [/jk-nishad-96140b3368](https://linkedin.com/in/jk-nishad-96140b3368)
Twitter: [@JKNishad119301](https://twitter.com/JKNishad119301)

---

```

---

Would you like me to **add visual diagrams** (like how binary search moves `first`, `mid`, `last`) in this `.md` file too? It can make your GitHub documentation look more professional and easier to understand.
```
