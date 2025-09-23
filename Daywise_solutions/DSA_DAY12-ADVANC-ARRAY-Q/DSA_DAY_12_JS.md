# DSA_DAY_12: ADVANCE ARRAY QUESTIONS

## Q29. Array Left Rotation by K Elements  

Rotating an array means shifting its elements either to the left or to the right.  
Here, we perform **left rotation by K elements**.

Example:  
Array = [1, 2, 3, 4, 5], K = 2  
After left rotation → [3, 4, 5, 1, 2]

---

### Methods to Solve

#### (a) Brute Force Method
- Rotate one element at a time.
- Repeat K times.

**Steps:**
1. Take the first element.
2. Shift all elements to the left by one position.
3. Place the first element at the end.
4. Repeat this K times.

**Time Complexity:** O(N × K)  
**Space Complexity:** O(1)

**JavaScript Implementation:**
```js
function leftRotateBruteForce(arr, k) {
    let n = arr.length;
    for (let i = 0; i < k; i++) {
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
    return arr;
}
console.log(leftRotateBruteForce([1, 2, 3, 4, 5], 2));
```

---

#### (b) Using Extra Space
- Use a temporary array to store the rotated version.

**Steps:**
1. Create a new array of size N.
2. Place each element at index `(i - K + N) % N`.
3. Copy back to original array if needed.

**Time Complexity:** O(N)  
**Space Complexity:** O(N)

**JavaScript Implementation:**
```js
function leftRotateExtraSpace(arr, k) {
    let n = arr.length;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = arr[(i + k) % n];
    }
    return result;
}
console.log(leftRotateExtraSpace([1, 2, 3, 4, 5], 2));
```

---

#### (c) Two Pointer Algorithm (Reversal Algorithm)
Efficient method using array reversal.

**Steps:**
1. Reverse the first K elements.
2. Reverse the remaining (N - K) elements.
3. Reverse the entire array.

**Time Complexity:** O(N)  
**Space Complexity:** O(1)

**JavaScript Implementation:**
```js
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function leftRotateReversal(arr, k) {
    let n = arr.length;
    k = k % n;
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
}
console.log(leftRotateReversal([1, 2, 3, 4, 5], 2));
```

---

### Homework
👉 Perform **Array Right Rotation by K elements**  
(Hint: Similar logic as left rotation, just reverse steps accordingly.)

---

## Q30. Linear Search in an Array  

Linear Search means checking each element one by one.

**Steps:**
1. Traverse the array from index 0 → N-1.
2. If element is found, return index.
3. Else return -1.

**Time Complexity:** O(N)  
**Space Complexity:** O(1)

**JavaScript Implementation:**
```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
```

---

## Q31. Binary Search  

Binary Search works on **sorted arrays** only.

**Steps:**
1. Find middle element `mid = (low + high) / 2`.

   or

   Find middle element `mid = low + (high -low ) / 2`.

2. If key == arr[mid], return index.
3. If key < arr[mid], search left half.
4. Else, search right half.

**Time Complexity:** O(log N)  
**Space Complexity:** O(1)

**JavaScript Implementation:**
```js
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
```
