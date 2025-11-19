
# Backtracking Problems — Explanation, Intuition, Algorithm, Time & Space Complexity

This document explains three important backtracking problems from LeetCode with full intuition, algorithm steps, time complexity, and space complexity.

---

# **1. Subsets II (Optimized)**

Generates all unique subsets from an array that may contain duplicates.

## **✨ Intuition**

Duplicates in the array can create duplicate subsets. To avoid this:

* First **sort** the array.
* During recursion, when we choose **not to pick** an element, we must skip all its duplicate occurrences.

This ensures every unique subset appears exactly once.

## **🧠 Algorithm**

1. Sort the array.
2. Use a recursive function `solve(nums, ans, cur, i)`.
3. Base case: if `i == nums.length`, push the current subset.
4. **Pick** the element → recurse.
5. **Skip duplicates** using a `while` loop.
6. **Not pick** → recurse.

## **⏱️ Time Complexity**

* Worst-case: **O(2ⁿ)** subsets.
* Sorting takes **O(n log n)**.
* Total: **O(n log n + 2ⁿ)**.

## **💾 Space Complexity**

* Recursion depth: **O(n)**.
* Output size: **O(2ⁿ)**.

---

# **2. Combination Sum**

Finds all combinations of numbers that sum to a target.

## **✨ Intuition**

Each number can be chosen **multiple times**. So:

* On picking a number, stay on the **same index**.
* If we skip it, move to the **next index**.

This ensures all valid combinations are explored.

## **🧠 Algorithm**

1. Use `solve(arr, ans, cur, i, target)`.
2. Base case:

   * If `i == arr.length` and `target == 0`, store combination.
3. **Pick condition**: if `arr[i] <= target` → pick and recurse.
4. **Not pick**: move to the next index.

## **⏱️ Time Complexity**

* Worst-case exponential: **O((T/M)ⁿ)** where:

  * T = target
  * M = smallest number in `candidates`
* Common simplified: **O(2ⁿ)**.

## **💾 Space Complexity**

* Recursion depth: **O(T/M)**.
* Output depends on number of combinations.

---

# **3. Letter Combinations of a Phone Number**

Maps digit characters (2–9) to their corresponding letters (like on a phone keypad).

## **✨ Intuition**

Each digit has 3–4 possible letters. This is a classic **cartesian product** problem solved using backtracking.

Example: "23"

* 2 → abc
* 3 → def

Result: ad, ae, af, bd, be, bf, cd, ce, cf

## **🧠 Algorithm**

1. Build a map of digits to letters.
2. Use recursive function `solve(digits, ans, cur, i, map)`.
3. Base case: when index reaches end → push the current string.
4. For each letter in the current digit's mapping:

   * Append letter
   * Recurse for next index

## **⏱️ Time Complexity**

* If each digit maps to **k** letters (k ≤ 4):
* Total combinations = **kⁿ** where n = number of digits.
* Time = **O(4ⁿ)** worst-case.

## **💾 Space Complexity**

* Recursion depth: **O(n)**.
* Output size: **O(4ⁿ)**.

---

# **📌 Code (Reference)**

Below is the exact code provided (already optimized):

```js
// 90. Subsets II (Optimized)
var solve = function(nums, ans, cur , i){
    if(i == nums.length){
         ans.push([...cur])
         return
    }
    cur.push(nums[i])
    solve(nums,ans , cur ,i+1)
    cur.pop()
    while( i+1 < nums.length && nums[i] == nums[i+1]){i++}
    solve(nums,ans , cur , i+1)
}
var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a-b)
  let ans = []
  let cur = []
  solve(nums , ans , cur , 0)
  return ans
};

// 39. Combination Sum
var solve = function(arr, ans, cur , i, target){
    if(i== arr.length){
        if(target == 0) ans.push([...cur])
        return
    }
    if(arr[i] <= target){
        cur.push(arr[i])
        solve(arr, ans , cur, i, target - arr[i])
        cur.pop();
    }
    solve(arr, ans , cur , i+1, target)
}
var combinationSum = function(candidates, target) {
    let ans  = [];
    let cur = [];
    solve(candidates,ans, cur, 0 , target)
    return ans
};

// 17. Letter Combinations of a Phone Number
var solve = function(s, ans , cur, i , map){
    if(i == s.length){
        if(cur.length > 0) ans.push(cur)
        return
    }
    let tp = map.get(s.charAt(i))
    for(let j = 0 ; j < tp.length; j++){
        solve(s , ans , cur + tp.charAt(j), i+1, map)
    }
}
var letterCombinations = function(digits) {
    let ans = []
    let map = new Map()
    map.set('2','abc')
    map.set('3','def')
    map.set('4','ghi')
    map.set('5','jkl')
    map.set('6','mno')
    map.set('7','pqrs')
    map.set('8','tuv')
    map.set('9','wxyz')
    solve(digits, ans , '', 0, map)
    return ans
};
```

---
