/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**2095. Delete the Middle Node of a Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;
    return head;
};


// Example usage:
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }   

    return head
}

// Helper function to print a linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }   
    console.log("null");
}   

// Create a linked list from an array
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printLinkedList(head);

// Delete the middle node
head = deleteMiddle(head);
console.log("List after deleting the middle node:");
printLinkedList(head);
