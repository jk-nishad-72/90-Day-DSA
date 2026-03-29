/**2487. Remove Nodes From Linked List
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var removeNodes = function(head) {
    // Step 1: Reverse the list
    head = reverse(head);
    
    let maxSoFar = head.val;
    let current = head;

    // Step 2: Traverse and remove
    while (current && current.next) {
        if (current.next.val < maxSoFar) {
            // Remove node
            current.next = current.next.next;
        } else {
            current = current.next;
            maxSoFar = current.val;
        }
    }

    // Step 3: Reverse back
    return reverse(head);
};

// Helper function to reverse list
function reverse(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

// Example usage:
// Create a linked list: 5 -> 2 -> 13 -> 3 -> 8
let head = new ListNode(5);
head.next = new ListNode(2);
head.next.next = new ListNode(13);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(8);

// Remove nodes and print the resulting linked list
let newHead = removeNodes(head);
let current = newHead;  
while (current) {
    console.log(current.val);       
    current = current.next;
}




