# Q129. Reversing a Queue — Iterative and Recursive Approaches (with Explanation)

---

## 🧩 Problem Statement
Reverse the elements of a queue so that the front becomes the rear and vice versa.

---

## ✅ Approach 1: Using Stack (Iterative Method)

### 🧠 Intuition
A queue follows **FIFO (First In, First Out)**, while a stack follows **LIFO (Last In, First Out)**.  
We can use this property of stacks to reverse the queue easily.

### 💡 Steps
1. **Dequeue** all elements from the queue and push them onto a stack.
2. **Pop** all elements from the stack and enqueue them back into the queue.
3. The queue is now reversed.

### 🧩 Code

```javascript
//***—Q 129. Reversing a Queue**
class Solution {
  reverseQueue(queue) {
    let stack = [];

    // Step 1: Move all elements from queue to stack
    while (queue.length > 0) {
      stack.push(queue.shift());
    }

    // Step 2: Move all elements from stack back to queue
    while (stack.length > 0) {
      queue.push(stack.pop());
    }

    return queue;
  }
}

// Example usage
let q = [1, 2, 3, 4, 5];
let obj = new Solution();

console.log("Original Queue:", q);
let reversed = obj.reverseQueue(q);
console.log("Reversed Queue:", reversed);
```

### 🧠 Output
```
Original Queue: [1, 2, 3, 4, 5]
Reversed Queue: [5, 4, 3, 2, 1]
```

---

## ✅ Approach 2: Using Recursion

### 🧠 Intuition
Instead of an external stack, recursion uses the **function call stack** to reverse the queue.  
Each recursive call removes one element and places it at the end when unwinding the recursion.

### 💡 Steps
1. **Base case:** If the queue is empty, return.
2. **Dequeue** the front element.
3. **Recursively reverse** the remaining queue.
4. **Enqueue** the front element at the end.

### 🧩 Code

```javascript
//***—Q 129. Reversing a Queue** Using Recursion
class Solution {
  reverseQueue(queue) {
    // Base case: if queue is empty, just return it
    if (queue.length === 0) return queue;

    // Step 1: Dequeue front element
    let front = queue.shift();

    // Step 2: Recursively reverse remaining queue
    this.reverseQueue(queue);

    // Step 3: Enqueue the front element at the end
    queue.push(front);

    return queue;
  }
}

// Example usage
let q = [1, 2, 3, 4, 5];
let obj = new Solution();

console.log("Original Queue:", q);
let reversed = obj.reverseQueue(q);
console.log("Reversed Queue:", reversed);
```

### 🧠 Output
```
Original Queue: [1, 2, 3, 4, 5]
Reversed Queue: [5, 4, 3, 2, 1]
```

### ⚙️ Complexity
| Type | Time | Space |
|------|------|-------|
| Iterative | O(n) | O(n) (for stack) |
| Recursive | O(n) | O(n) (for recursion call stack) |

---

## 🧩 Bonus: Valid Parentheses Checker (Stack Problem)

### Problem:
Check if a string containing `()`, `{}`, and `[]` brackets is valid — meaning all brackets are closed and nested correctly.

### Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let st = [], isValid = true;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue;
    }
    if (st.length == 0) return false;
    if (ch == ")") {
      if (st[st.length - 1] == "(") st.pop();
      else { isValid = false; break; }
    }
    if (ch == "}") {
      if (st[st.length - 1] == "{") st.pop();
      else { isValid = false; break; }
    }
    if (ch == "]") {
      if (st[st.length - 1] == "[") st.pop();
      else { isValid = false; break; }
    }
  }
  if (st.length != 0) return false;
  else return isValid;
};
```

### Example
```
Input: s = "([]{})"
Output: true

Input: s = "([)]"
Output: false
```

---

✨ **Summary:**
- Iterative method uses a **stack** to reverse a queue.
- Recursive method uses **call stack** to achieve the same without an explicit stack.
- The `isValid()` function demonstrates stack-based validation logic.
