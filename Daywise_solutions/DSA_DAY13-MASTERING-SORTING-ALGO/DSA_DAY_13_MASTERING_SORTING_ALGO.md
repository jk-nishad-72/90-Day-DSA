# 📌 #DSA_DAY_13: MASTERING SORTING ALGORITHMS

In this session, we’ll dive into **Sorting Algorithms** – their concepts, stability, and implementation in **JavaScript**.

---

## 🔹 What is a Sorting Algorithm?
A **sorting algorithm** is a method to arrange elements of a list/array in a specific order (ascending or descending).  

### ✅ Stable vs Unstable Sorting
- **Stable Algorithm** → Maintains the relative order of equal elements.  
- **Unstable Algorithm** → May change the relative order of equal elements.  

---

## 1️⃣ Bubble Sort

### 🔸 Concept:
- Repeatedly swap adjacent elements if they are in the wrong order.  
- After each pass, the largest element "bubbles up" to its correct position.  

### 🔸 Stability:
- **Stable Algorithm** ✅ (equal elements remain in the same order).

### 🔸 Time Complexity:
- Best: **O(n)** (when already sorted)  
- Worst: **O(n²)**  

### 🔸 Implementation in JS:

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization: stop if already sorted
  }
  return arr;
}

// Example
console.log(bubbleSort([64, 25, 12, 22, 11]));
// Output: [11, 12, 22, 25, 64]
```

---

## 2️⃣ Insertion Sort

### 🔸 Concept:
- Builds the sorted array one element at a time.  
- Takes one element and inserts it into its correct position among already sorted elements.  

### 🔸 Stability:
- **Stable Algorithm** ✅  

### 🔸 Time Complexity:
- Best: **O(n)** (nearly sorted)  
- Worst: **O(n²)**  

### 🔸 Implementation in JS:

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example
console.log(insertionSort([64, 25, 12, 22, 11]));
// Output: [11, 12, 22, 25, 64]
```

---

## 3️⃣ Selection Sort

### 🔸 Concept:
- Finds the smallest element from the unsorted part and swaps it with the first unsorted element.  
- Repeats until the entire array is sorted.  

### 🔸 Stability:
- **Unstable Algorithm** ❌ (equal elements may lose order).  

### 🔸 Time Complexity:
- Best: **O(n²)**  
- Worst: **O(n²)**  

### 🔸 Implementation in JS:

```js
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
    }
  }
  return arr;
}

// Example
console.log(selectionSort([64, 25, 12, 22, 11]));
// Output: [11, 12, 22, 25, 64]
```

---

## 📊 Summary Table

| Algorithm      | Stable? | Best Case | Worst Case | Average Case |
|----------------|---------|-----------|------------|--------------|
| Bubble Sort    | ✅ Yes  | O(n)      | O(n²)      | O(n²)        |
| Insertion Sort | ✅ Yes  | O(n)      | O(n²)      | O(n²)        |
| Selection Sort | ❌ No   | O(n²)     | O(n²)      | O(n²)        |

---

✨ With these three, you’ve built a strong foundation for sorting algorithms.  
Next step → explore **Merge Sort** and **Quick Sort** for efficient sorting.
