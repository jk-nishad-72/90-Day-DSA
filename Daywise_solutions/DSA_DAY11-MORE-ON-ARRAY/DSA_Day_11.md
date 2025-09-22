# 📘 DSA_Day_11 : MORE ON ARRAYS

## Q25. Find Second Maximum Element from Array

**Concept:**  
- The maximum element is the largest value in the array.  
- The *second maximum* is the next largest element after the maximum.  
- We can find it in one traversal by keeping track of both maximum and second maximum.

**Steps:**  
1. Initialize two variables: `max1 = -∞`, `max2 = -∞`.  
2. Traverse the array:  
   - If current element > `max1`, then update `max2 = max1` and `max1 = current element`.  
   - Else if current element > `max2` and not equal to `max1`, update `max2`.  
3. At the end, `max2` is the answer.

**Code (C++ Example):**
```cpp
int secondMax(int arr[], int n) {
    int max1 = INT_MIN, max2 = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] != max1) {
            max2 = arr[i];
        }
    }
    return max2;
}
```

---

## Q26. Reverse the Array

### a) With Extra Space
- Copy elements into a new array in reverse order.  
- Time: **O(n)**, Space: **O(n)**.

**Code:**
```cpp
void reverseArrayExtra(int arr[], int n) {
    int temp[n];
    for (int i = 0; i < n; i++) {
        temp[i] = arr[n - 1 - i];
    }
    for (int i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}
```

### b) Without Extra Space (Two-Pointer Algorithm)
- Swap first and last, move inward until pointers meet.  
- Time: **O(n)**, Space: **O(1)**.

**Code:**
```cpp
void reverseArrayInplace(int arr[], int n) {
    int i = 0, j = n - 1;
    while (i < j) {
        swap(arr[i], arr[j]);
        i++;
        j--;
    }
}
```

---

## Q27. Move All Zeroes to Left and Ones to Right (Two-Pointer)

**Concept:**  
- Useful when array contains only 0 and 1.  
- Two pointers: one at left, one at right.  
- If `arr[left] == 1` and `arr[right] == 0`, swap them.  
- Move pointers accordingly.

**Code:**
```cpp
void segregateZeroOne(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        if (arr[left] == 0) left++;
        else if (arr[right] == 1) right--;
        else {
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }
}
```

---

## Q28. Array Left Rotation by 1

**Concept:**  
- Store the first element.  
- Shift all elements one step to the left.  
- Place stored element at the end.  

**Code:**
```cpp
void leftRotateBy1(int arr[], int n) {
    int temp = arr[0];
    for (int i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
}
```

---

## Q29. Array Right Rotation by 1

**Concept:**  
- Store the last element.  
- Shift all elements one step to the right.  
- Place stored element at the beginning.  

**Code:**
```cpp
void rightRotateBy1(int arr[], int n) {
    int temp = arr[n - 1];
    for (int i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
}
```
