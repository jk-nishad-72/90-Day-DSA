# Max Pair Sum in an Array (LeetCode 2815)

## 📌 Problem Statement
Given an array of integers `nums`, you need to find the **maximum sum of a pair of numbers** such that **both numbers have the same largest digit**.

- If no such pair exists, return `-1`.

---

## 🧠 Approach Overview

1. **Find the largest digit** in each number.
2. **Group numbers** based on their largest digit (0–9).
3. For each group:
   - If it has at least **two numbers**, sort it in descending order.
   - Take the **top two numbers** and compute their sum.
4. Return the **maximum sum** found across all groups.

---

## 🔍 Helper Function: Finding the Largest Digit

```js
var largenum = function(n) {
    let largeElem = 0;

    while (n > 0) {
        let rem = n % 10;
        largeElem = Math.max(largeElem, rem);
        n = parseInt(n / 10);
    }

    return largeElem;
};
```

### ✨ Explanation
- Extract digits using `% 10`.
- Keep updating the maximum digit using `Math.max()`.
- Remove the last digit using integer division.

📌 Example:
```
Input: 71
Digits: 7, 1
Largest digit: 7
```

---

## 🚀 Main Function: `maxSum`

```js
var maxSum = function(nums) {
    let groups = Array.from({ length: 10 }, () => []);

    for (let num of nums) {
        let d = largenum(num);
        groups[d].push(num);
    }

    let ans = -1;

    for (let i = 0; i < 10; i++) {
        if (groups[i].length >= 2) {
            groups[i].sort((a, b) => b - a);
            ans = Math.max(ans, groups[i][0] + groups[i][1]);
        }
    }

    return ans;
};
```

---

## 🧩 Step-by-Step Example

```js
Input: [51, 71, 17, 24, 42]
```

### 1️⃣ Largest digits
| Number | Largest Digit |
|------|---------------|
| 51   | 5 |
| 71   | 7 |
| 17   | 7 |
| 24   | 4 |
| 42   | 4 |

### 2️⃣ Grouping
```
Digit 7 → [71, 17]
Digit 4 → [42, 24]
Digit 5 → [51]
```

### 3️⃣ Valid pairs
- Digit 7 → 71 + 17 = **88**
- Digit 4 → 42 + 24 = 66

✅ **Maximum Sum = 88**

---

## 🖨️ Test Case

```js
console.log(maxSum([51,71,17,24,42])); // Output: 88
```

---

## ⏱️ Time & Space Complexity

- **Time Complexity:** `O(n log n)` (due to sorting groups)
- **Space Complexity:** `O(n)` (group storage)

---

## ✅ Final Notes
- Clean and efficient use of **bucket grouping**.
- Works well within constraints.
- Easy to extend or debug.

Happy Coding 🚀

