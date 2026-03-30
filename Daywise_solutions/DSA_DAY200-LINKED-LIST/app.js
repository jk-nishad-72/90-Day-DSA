

/*
*3217. Delete Nodes From Linked List Present in Array

 * Definition for singly-linked list.
 *
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var modifiedList = function(nums, head) {
    

    //this is time limit exceeded because we are using includes method which is O(n) and we are doing it for each node in the linked list which is also O(n) so overall time complexity is O(n^2)
    // let dummy = new ListNode(0);
    // dummy.next = head;
    // let current = dummy;
    // while (current.next !== null) {
    //     if (nums.includes(current.next.val)) {
    //         current.next = current.next.next; // Skip the node to delete
    //     } else {
    //         current = current.next; // Move to the next node
    //     }   
    // }
    // return dummy.next; // Return the modified list starting from the original head 


    //To optimize the time complexity we can use a Set to store the values in nums for O(1) average time complexity lookups.
    //  This way, we can achieve an overall time complexity of O(n) where n is the number of nodes in the linked list.
    let numSet = new Set(nums);
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while (current.next !== null) {
        if (numSet.has(current.next.val)) {
            current.next = current.next.next; // Skip the node to delete
        } else {
            current = current.next; // Move to the next node
        }
    }
    return dummy.next; // Return the modified list starting from the original head


};

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1); 
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Define the array of values to delete
let nums = [2, 4];
// Call the function
let modifiedHead = modifiedList(nums, head);
// Print the modified linked list
let current = modifiedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}


