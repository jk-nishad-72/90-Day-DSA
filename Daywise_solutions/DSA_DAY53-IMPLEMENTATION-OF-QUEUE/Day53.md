## DAY_53: Implementation of Queue and Stack ➡️ 3/11/25

---

### 🧠 Introduction to Queue
A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.  
- The element that is inserted first is the first one to be removed.  
- Example: Think of a line of people waiting for tickets — the person who comes first gets served first.

**Example Visualization:**  
`Front → [10, 20, 30, 40] → Rear`  
If you enqueue `50`, it gets added at the rear.  
If you dequeue, `10` (the front element) gets removed.

---

### 🧩 Types of Queue
1. **Simple Queue (Linear Queue):** Elements inserted at the rear, removed from the front.  
2. **Circular Queue:** The last position connects back to the first position (efficient space usage).  
3. **Priority Queue:** Each element has a priority; higher priority elements are served first.  
4. **Deque (Double Ended Queue):** Insertion and deletion can be done from both ends.

---

### ⚙️ Implementation of Queue

Queues can be implemented in two main ways:
1. **Using Array**
2. **Using Linked List**

---

### 🧱 Queue Implementation using Array

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue → Add element to rear
  enqueue(element) {
    this.items.push(element);
    console.log(`${element} added to the queue`);
  }

  // Dequeue → Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const removed = this.items.shift();
    console.log(`${removed} removed from the queue`);
    return removed;
  }

  // Peek → Get front element
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print Queue
  printQueue() {
    console.log("Queue:", this.items.join(" <- "));
  }
}

// Example Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();

queue.dequeue();
queue.printQueue();


---

### 🧩 Queue Implementation using Linked List

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Enqueue → Add element to rear
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    console.log(`${value} added to the queue`);
  }

  // Dequeue → Remove from front
  dequeue() {
    if (!this.front) {
      console.log("Queue is empty");
      return null;
    }
    const removedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    console.log(`${removedValue} removed from the queue`);
    return removedValue;
  }

  // Print Queue
  printQueue() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.value + " <- ";
      current = current.next;
    }
    console.log("Queue:", result || "Empty");
  }
}

// Example Usage
const linkedQueue = new LinkedQueue();
linkedQueue.enqueue(100);
linkedQueue.enqueue(200);
linkedQueue.enqueue(300);
linkedQueue.printQueue();

linkedQueue.dequeue();
linkedQueue.printQueue();
```

---

## 🧱 Stack Implementation

### 🧠 Introduction to Stack

A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.

* The element inserted last is the first to be removed.
* Example: A stack of plates — the last plate placed is the first one taken out.

**Example Visualization:**
`Top → [40, 30, 20, 10]`
Push adds at the top, Pop removes from the top.

---

### ⚙️ Implementation of Stack (Using Array)

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Push → Add element to top
  push(element) {
    this.items.push(element);
    console.log(`${element} pushed to stack`);
  }

  // Pop → Remove element from top
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    const removed = this.items.pop();
    console.log(`${removed} popped from stack`);
    return removed;
  }

  // Peek → View top element
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print Stack
  printStack() {
    console.log("Stack:", this.items.join(" -> "));
  }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();

stack.pop();
stack.printStack();
```

---

✅ **Summary**

| Data Structure | Principle | Basic Operations       | Implementation      |
| -------------- | --------- | ---------------------- | ------------------- |
| **Queue**      | FIFO      | Enqueue, Dequeue, Peek | Array / Linked List |
| **Stack**      | LIFO      | Push, Pop, Peek        | Array               |

---

🗓️ **Date:** 3/11/25
📘 **Topic:** Implementation of Queue and Stack
💻 **Language:** JavaScript

```

---

```
