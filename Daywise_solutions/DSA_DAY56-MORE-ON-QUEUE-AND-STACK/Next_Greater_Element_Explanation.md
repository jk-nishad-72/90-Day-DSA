# 🧩 Next Greater Element — Detailed Explanation

## 🧠 Problem Statement

You are given an array `arr` (or `arr2` and a subset array `arr1` in the second problem).  
For each element, you need to find the **Next Greater Element (NGE)** — the first element to its right that is **greater** than it.  
If no such element exists, the output should be `-1` for that element.

---

### Example 1: Basic NGE Problem

**Input:**  
```js
arr = [1, 3, 2, 4]
```

**Output:**  
```js
[3, 4, 4, -1]
```

**Explanation:**  
- For `1`, the next greater element is `3`  
- For `3`, the next greater element is `4`  
- For `2`, the next greater element is `4`  
- For `4`, there is no greater element → `-1`

---

## ⚙️ Approach — Stack-Based Solution

We traverse the array **from right to left** while maintaining a **stack** of potential next greater elements.

### Steps:
1. Initialize an empty stack `st` and an answer array `ans`.
2. Traverse the array **backward** (from end to start).
3. For each element `arr[i]`:
   - Pop elements from the stack while the top of the stack is **less than or equal** to `arr[i]`.
   - If the stack becomes empty → `ans[i] = -1`.
   - Otherwise → `ans[i] = st[top]` (the element at the top of the stack).
   - Push `arr[i]` onto the stack.
4. Return the `ans` array.

This ensures **O(n)** time complexity using a **monotonic stack**.

---

## 💻 Code Implementation

### JavaScript Implementation (Single Array Version)

```js
class Solution {
    nextLargerElement(arr) {
        let ans = [];
        let st = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
                st.pop();
            }
            if (st.length === 0) ans[i] = -1;
            else ans[i] = st[st.length - 1];
            st.push(arr[i]);
        }
        return ans;
    }
}
```

**Example Usage:**  
```js
const sol = new Solution();
console.log(sol.nextLargerElement([1, 3, 2, 4])); // Output: [3, 4, 4, -1]
```

---

### 🧮 LeetCode Problem: 496. Next Greater Element I

In this variation:  
- `arr1` is a **subset** of `arr2`.  
- You must find the next greater element of each element in `arr1` **as it appears in `arr2`**.

**Example:**  
```js
arr1 = [4,1,2]
arr2 = [1,3,4,2]
```

**Output:**  
```js
[-1, 3, -1]
```

**Explanation:**  
- For `4` in `arr2`, there is no greater number to its right → `-1`  
- For `1`, the next greater number is `3`  
- For `2`, no greater number exists → `-1`

---

### Optimized JS Code

```js
let arr1 = [4, 1, 2];
let arr2 = [1, 3, 4, 2];

var nextGreaterElement = function(arr1, arr2) {
    let map = new Map();
    let st = [];

    for (let i = arr2.length - 1; i >= 0; i--) {
        while (st.length !== 0 && st[st.length - 1] <= arr2[i]) {
            st.pop();
        }
        if (st.length === 0) map.set(arr2[i], -1);
        else map.set(arr2[i], st[st.length - 1]);
        st.push(arr2[i]);
    }

    let ans = [];
    for (let i = 0; i < arr1.length; i++) {
        ans.push(map.get(arr1[i]));
    }

    return ans;
};

console.log(nextGreaterElement(arr1, arr2)); // Output: [-1, 3, -1]
```

---

## 🧾 Time & Space Complexity

| Complexity Type | Description |
|------------------|-------------|
| **Time** | O(n) — Each element is pushed and popped from the stack at most once |
| **Space** | O(n) — For the stack and the map |

---

## ✅ Summary

- This problem is efficiently solved using a **Monotonic Stack**.  
- The backward traversal ensures we only consider future elements.  
- Using a `Map` (for LeetCode version) helps achieve an optimal O(n) solution.

---

📘 *Created by Jay (JK Nishad)*  
GitHub: [jk-nishad-72](https://github.com/jk-nishad-72)
