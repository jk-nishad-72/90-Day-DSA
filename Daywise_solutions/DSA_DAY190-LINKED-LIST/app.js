/**92. Reverse Linked List II
 * Definition for singly-linked list.
 * 
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


var reverseBetween = function(head, left, right) {
    
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {

        prev = prev.next;
    }   

    let current = prev.next;
    for (let i = 0; i < right - left; i++) {

        let next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};

//  Example 1:

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let left = 2;
let right = 4;
console.log(reverseBetween(head, left, right)); // Output: [1,4,3,2,5]

//  Explanation: The nodes from position 2 to 4 are reversed, so the linked list becomes 1->4->3->2->5.
    

//  Input: head = [1,2,3,4,5], left = 2, right = 4
//  Output: [1,4,3,2,5]

