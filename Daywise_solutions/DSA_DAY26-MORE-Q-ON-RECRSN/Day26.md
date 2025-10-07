
---

````markdown
# Q74. Print Natural Numbers 1 to N and N to 1 using Recursion

### 🧩 Code:

```javascript
// Print 1 to n
function print1ToN(n) {
    if (n === 0) return;
    print1ToN(n - 1);
    console.log(n);
}

// Print n to 1
function printNTo1(n) {
    if (n === 0) return;
    console.log(n);
    printNTo1(n - 1);
}
````

### 🛠 Algorithm:

* **Base Case:** Stop when `n === 0`.
* **Recursive Step:**

  * **For 1 → n:** first move down (`n-1`), then print `n`.
  * **For n → 1:** print `n`, then move down (`n-1`).

---

# Q75. Sum and Factorial using Recursion

### 🧩 Code:

```javascript
// Sum of numbers 1 to n
function sumN(n) {
    if (n === 0) return 0;
    return n + sumN(n - 1);
}

// Factorial of n
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```

### 🛠 Algorithm:

* **Sum:** Add current number `n + sum of previous numbers`.
* **Factorial:** Multiply current number `n × factorial of previous numbers`.

---

# Q76. Fibonacci Series using Recursion

### ➡️ a) Print First N Terms of Fibonacci Series

```javascript
function fibonacciSeries(n, a = 0, b = 1) {
    if (n === 0) return;
    console.log(a);
    fibonacciSeries(n - 1, b, a + b);
}
```

### ➡️ b) Find Nth Term in Fibonacci Series

```javascript
function fibonacciNth(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}
```

### 🛠 Algorithm:

* **Printing Series:**

  * Keep two variables `a` and `b`.
  * Print `a`, then recursively call with next numbers `(b, a + b)`.

* **Finding Nth Term:**

  * **Base Cases:**

    * 0th term → `0`
    * 1st term → `1`
  * Otherwise, sum of `(n-1)`th and `(n-2)`th term.

---

```

Would you like me to generate this as a downloadable `.md` file (e.g., `recursion_problems.md`)?
```
