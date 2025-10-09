
Here’s the content formatted as a clean, well-structured **Markdown (.md)** file:

---

````markdown
# 🧮 DSA_DAY_28: Maths With Recursion

## 📘 Topics Covered
### Q77. GCD (Greatest Common Divisor) 
**Also known as:** HCF (Highest Common Factor)

---

## 🧩 Q78. Find the Greatest Common Divisor
We need to find the **GCD** of two given numbers — that is, the **largest number that divides both** without leaving a remainder.

---

## 🔢 3 Ways to Solve It

### 1️⃣ Using For Loop  
**Time Complexity:** O(min(a, b))

**Approach:**
- Iterate from 1 to the smaller of the two numbers.
- Check if both numbers are divisible by the iterator.
- Keep track of the largest such divisor.

**Pseudocode:**
```javascript
function gcdForLoop(a, b) {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}
````

---

### 2️⃣ Euclidean Method

**Time Complexity:** O(max(a, b))

This method is based on the principle:

> **GCD(a, b) = GCD(b, a % b)**
> (Until b becomes 0, then a is the GCD)

There are **two ways** to implement it:

#### a) Using While Loop

```javascript
function gcdEuclidWhile(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

#### b) Using Recursion

```javascript
function gcdEuclidRecursive(a, b) {
    if (b === 0) return a;
    return gcdEuclidRecursive(b, a % b);
}
```

---

### 3️⃣ Using Algorithmic Optimization

**Time Complexity:** O(log n)

This is the **optimized recursive version** of the Euclidean algorithm.

**Logic:**
Each recursive call reduces the problem size logarithmically, leading to efficient computation.

**Example:**

```javascript
function gcdOptimized(a, b) {
    return b === 0 ? a : gcdOptimized(b, a % b);
}
```

---

## 🧠 Example Run

Find GCD of **36** and **60**:

| Step | a  | b  | a % b |
| ---- | -- | -- | ----- |
| 1    | 60 | 36 | 24    |
| 2    | 36 | 24 | 12    |
| 3    | 24 | 12 | 0     |

✅ **GCD = 12**

---

## ⚙️ Summary

| Method                | Type      | Time Complexity | Remarks            |
| --------------------- | --------- | --------------- | ------------------ |
| For Loop              | Iterative | O(min(a, b))    | Simple but slower  |
| Euclidean (While)     | Iterative | O(max(a, b))    | Efficient          |
| Euclidean (Recursion) | Recursive | O(log n)        | Fastest & cleanest |

---

### ✨ Key Takeaway:

> “Recursion simplifies complex logic — the Euclidean Algorithm is a perfect example!”

```

---

Would you like me to generate this `.md` file for direct download (`DSA_DAY_28_Maths_With_Recursion.md`)?
```
