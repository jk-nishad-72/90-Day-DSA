/**19. Remove Nth Node From End of List
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(0); // Create a dummy node to handle edge cases
    dummy.next = head;
    let first = dummy; // Initialize first pointer to dummy
    let second = dummy; // Initialize second pointer to dummy
    // Move first pointer n+1 steps ahead to maintain a gap of n between first and second
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    // Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }
    // Remove the nth node from the end
    second.next = second.next.next;
    return dummy.next;


};

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1); 
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Remove the 2nd node from the end (which is '4')
let newHead = removeNthFromEnd(head, 2);
// Function to print the linked list
function printList(node) {
    let current = node; 
    while (current) {
        console.log(current.val);
        current = current.next;
    }       
}
printList(newHead); // Output should be: 1, 2, 3, 5
