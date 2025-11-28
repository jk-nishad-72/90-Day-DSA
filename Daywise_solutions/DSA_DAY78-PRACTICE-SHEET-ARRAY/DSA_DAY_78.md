# DSA_DAY_78 --- Practice Sheet (Array Questions)

**Date:** 28/11/25

This markdown file contains explanations of two LeetCode problems along
with the JavaScript solutions you practiced today.

------------------------------------------------------------------------

## **1. 1929. Concatenation of Array** ✅

### **Problem Summary**

Given an array `nums`, create a new array `ans` of length `2 * n`
where:\
- `ans[i] = nums[i]`\
- `ans[i + n] = nums[i]`\
for each index `i`.

### **Concept**

You're simply repeating the same array twice --- one after another.

### **Code:**

``` javascript
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(n * 2);

    for (let i = 0; i < n; i++) {
         ans[i] = ans[i + n] = nums[i];
    }
    return ans;
};

console.log(getConcatenation([1,3,2,1]));
```

### **Explanation**

-   You find the length of the array `n`.\
-   Create a new array of size `2 * n`.\
-   For each index, fill both the first half and the second half of
    `ans` with the same value from `nums`.\
-   This ensures the array is duplicated exactly as required.

------------------------------------------------------------------------

## **2. 1920. Build Array from Permutation** ✅

### **Problem Summary**

Given a **0-indexed permutation array** `nums`, build an array `ans`
such that:\
- `ans[i] = nums[nums[i]]`

### **Concept**

Each value of the array is an index.\
You are basically accessing the element at a position pointed to by
another element.

### **Code:**

``` javascript
var buildArray = function(nums) {
    let ans = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
         ans[i] = nums[nums[i]];
    }

    return ans;
};

console.log(buildArray([5,0,1,2,3,4]));
```

### **Explanation**

-   You loop over each index `i`.\
-   For every position, pick the value at index `nums[i]`.\
-   This works because the array is guaranteed to be a permutation (all
    values from `0` to `n-1` appear once).

------------------------------------------------------------------------

## **Great Work Today!**

You practiced two fundamental **array transformation problems** that are
important for understanding indexing and array manipulation in DSA.

Keep going strong, Jay! 🚀
