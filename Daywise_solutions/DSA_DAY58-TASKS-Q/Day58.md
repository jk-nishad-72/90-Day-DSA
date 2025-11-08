
Here’s a clean, well-documented **Markdown file** (`StackProblems.md`) version of your code with detailed **explanations**, **time complexity (TC)**, and **space complexity (SC)** clearly mentioned for each problem.

---

````markdown
# Stack & Array Problems — Detailed Solutions

This document covers three classic coding problems solved using JavaScript, with clear explanations and complexity analysis.

---

## 🧩 1. Next Smaller Element — [GFG Problem Link](https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1)

### Problem Statement
For each element in the array, find the **next smaller element** to its **right**.  
If no smaller element exists, return `-1` for that position.

### Example
**Input:** `[4, 8, 5, 2, 25]`  
**Output:** `[2, 5, 2, -1, -1]`

### Code Implementation
```javascript
class Solution {
    nextSmallerEle(arr) {
        let st  = [];  // Stack to keep track of next smaller candidates
        let ans = [];  // Array to store the result
        
        for (let i = arr.length - 1; i >= 0; i--) {
            // Remove all greater or equal elements
            while (st.length !== 0 && st[st.length - 1] >= arr[i]) {
                st.pop();
            }
            
            // If stack is empty, no smaller element exists
            if (st.length === 0) ans[i] = -1;
            else ans[i] = st[st.length - 1];
            
            // Push current element for future comparison
            st.push(arr[i]);
        }
        
        return ans;
    }
}
````

### 🧠 Explanation

* Traverse the array **from right to left**.
* Maintain a stack that stores potential "next smaller" elements.
* For each element:

  * Pop elements **greater or equal** to the current one (since they can’t be the “next smaller” for future elements).
  * The **top of the stack**, if any, becomes the “next smaller element”.
  * Push the current element onto the stack.

### ⏱ Time Complexity

* **O(N)** — Each element is pushed and popped at most once.

### 💾 Space Complexity

* **O(N)** — Stack and result array usage.

---

## ⚙️ 2. Previous Greater Element — [GFG Problem Link](https://www.geeksforgeeks.org/problems/previous-greater-element/0)

### Problem Statement

For each element in the array, find the **previous greater element** to its **left**.
If no greater element exists, return `-1` for that position.

### Example

**Input:** `[15, 10, 18, 12, 4, 6, 2, 8]`
**Output:** `[-1, 15, -1, 18, 12, 12, 6, 12]`

### Code Implementation

```javascript
class Solution {
    preGreaterEle(arr) {
        let st = [];   // Stack to store potential greater elements
        let ans = [];  // Result array
        
        for (let i = 0; i < arr.length; i++) {
            // Remove all smaller or equal elements
            while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
                st.pop();
            }
            
            // If stack empty => no greater element
            if (st.length === 0) ans[i] = -1;
            else ans[i] = st[st.length - 1];
            
            // Push current element for future comparisons
            st.push(arr[i]);
        }
        
        return ans;
    }
}
```

### 🧠 Explanation

* Traverse the array **from left to right**.
* Maintain a stack to store greater elements for upcoming indices.
* Pop all elements smaller or equal to the current one, since they can't be greater for future values.
* Stack’s top, if any, gives the previous greater element.

### ⏱ Time Complexity

* **O(N)** — Each element enters and exits the stack once.

### 💾 Space Complexity

* **O(N)** — For the stack and result array.

---

## 🔢 3. How Many Numbers Are Smaller Than the Current Number — [LeetCode #1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

### Problem Statement

Given an array `nums`, for each element, count how many numbers are **smaller** than it in the array.

### Example

**Input:** `[8,1,2,2,3]`
**Output:** `[4,0,1,1,3]`

### Code Implementation

```javascript
var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j] && j !== i) count++;
        }
        ans[i] = count;
    }
    
    return ans;
};
```

### 🧠 Explanation

* For every element, iterate through the array and count how many numbers are smaller than it.
* This is a **brute force** approach.

### ⏱ Time Complexity

* **O(N²)** — Two nested loops, each going through all elements.

### 💾 Space Complexity

* **O(N)** — To store the result array.

---

## ✅ Summary Table

| Problem                      | Approach              | Time Complexity | Space Complexity |
| ---------------------------- | --------------------- | --------------- | ---------------- |
| Next Smaller Element         | Stack (Right to Left) | **O(N)**        | **O(N)**         |
| Previous Greater Element     | Stack (Left to Right) | **O(N)**        | **O(N)**         |
| Smaller Numbers Than Current | Brute Force           | **O(N²)**       | **O(N)**         |

---

**Author:** Jay Nishad
**GitHub:** [jk-nishad-72](https://github.com/jk-nishad-72)

```

---

```
