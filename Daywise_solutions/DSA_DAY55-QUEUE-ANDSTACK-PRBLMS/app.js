// //***—Q 129. Reversing a Queue** 
// class Solution {
//   reverseQueue(queue) {
//     let stack = [];

//     // Step 1: Move all elements from queue to stack
//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }

//     // Step 2: Move all elements from stack back to queue
//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }

//     return queue;
//   }
// }

// // Example usage
// let q = [1, 2, 3, 4, 5];
// let obj = new Solution();

// console.log("Original Queue:", q);
// let reversed = obj.reverseQueue(q);
// console.log("Reversed Queue:", reversed);


// //***—Q 129. Reversing a Queue**  Using Recursion
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




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let st = [],
    isValid = true;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue;
    }
    if (st.length == 0) return false;
    if (ch == ")") {
      if (st[st.length - 1] == "(") st.pop();
      else {
        isValid = false;
        break;
      }
    }
    if (ch == "}") {
      if (st[st.length - 1] == "{") st.pop();
      else {
        isValid = false;
        break;
      }
    }
    if (ch == "]") {
      if (st[st.length - 1] == "[") st.pop();
      else {
        isValid = false;
        break;
      }
    }
  }
  if (st.length != 0) return false;
  else return isValid;
};
