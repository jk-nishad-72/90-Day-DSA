# Stack Memory & Recursion Quick Notes

## 🧱 Stack Memory

Stack is a **linear data structure** that follows the **Last In, First Out (LIFO)** principle.

### 🔹 Used to store:

* **Primitive data types:** Number, String, Boolean, Undefined, Null, Symbol, BigInt.
* **Function calls:** (Call Stack)

---

## ⚙️ Call Stack

A special part of stack memory that tracks **active function calls** in JavaScript.

* Functions are **pushed** when called.
* Functions are **popped** when they return.

### 📌 Example:

```js
function greet() {
    console.log("Hello");
}
greet();
```

When `greet()` is called:

```
[ main() ]
[ greet() ]  <- pushed
```

When finished:

```
[ main() ]   <- greet() popped
```

---

## 🧩 Stack Storing Primitive Variables

Primitive values are **stored directly** in the stack memory.

### Example:

```js
let a = 10;  // stored in stack
let b = a;   // b copies the value
```

Changes to `a` won’t affect `b` — because **primitives are copied by value**.

---

## 🔁 Recursion

A function **calling itself** to solve smaller sub-problems.

* Each recursive call is **pushed** to the call stack.
* Requires a **base case** to prevent infinite recursion.

### 🧾 Example 1: Print "Hello World" N times

```js
function printHello(n) {
    if (n === 0) return;    // base case
    console.log("Hello World");
    printHello(n - 1);      // recursive call
}

printHello(5);
```

**💡 Output:**

```
Hello World
Hello World
Hello World
Hello World
Hello World
```

---

### 🧾 Example 2: Print N to 1 using Recursion

```js
function printNumbers(n) {
    if (n === 0) return;     // base case
    console.log(n);
    printNumbers(n - 1);     // recursive call
}

printNumbers(5);
```

**💡 Output:**

```
5
4
3
2
1
```
