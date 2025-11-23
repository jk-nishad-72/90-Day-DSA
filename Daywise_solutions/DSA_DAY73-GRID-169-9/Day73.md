
# 📘 Palindrome Problems in JavaScript

This document explains two common palindrome problems from LeetCode:

1. **Palindrome Number (LeetCode 9)**
2. **Valid Palindrome (LeetCode 125)**

Each solution includes **JavaScript code** and **step-by-step explanation**.

---

## ✅ 1. Palindrome Number (LeetCode 9)

### **Problem**

Given an integer `x`, return `true` if `x` is a palindrome. A palindrome number reads the same forward and backward.

### ✔ **JavaScript Solution**

```js
/*
 *  9. Palindrome Number ✅ 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copy = x;
    let temp = 0;

    while(x > 0) {    
        let rem = x % 10;        // extract last digit
        temp = (temp * 10) + rem; // build reversed number
        x = parseInt(x / 10);     // remove last digit
    }

    return copy === temp;         // compare original and reversed
};

console.log(isPalindrome(121));  // true
```

### 📝 **Explanation**

* Copy the original number.
* Reverse the number **digit by digit** using `%` and division.
* Compare reversed and original numbers.
* If equal → palindrome.

---

## ☑️ 2. Valid Palindrome (LeetCode 125)

### **Problem**

Given a string `s`, return `true` if it is a palindrome, considering only alphanumeric characters and ignoring cases.

### ✔ **JavaScript Solution**

```js
/*
 * 125. Valid Palindrome ☑️
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeString = function(s) {

    let clr = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase(); 
    // remove non-alphanumerics and convert to lowercase

    let i = 0;
    let j = clr.length - 1;

    while(i <= j) {
        if(clr.charAt(i) !== clr.charAt(j)) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

console.log(isPalindromeString("race a car")); // false
```

### 📝 **Explanation**

1. **Clean the string**

   * Remove non-alphanumeric characters
   * Convert to lowercase
2. **Two-pointer comparison** from both ends.
3. If any mismatch → not a palindrome.
4. If loop completes → it's a palindrome.

---
