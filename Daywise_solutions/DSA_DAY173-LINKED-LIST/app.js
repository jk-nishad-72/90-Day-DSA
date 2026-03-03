/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**143. Reorder List
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    if (!head || !head.next) return head;
    
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf && secondHalf.next) {
        let firstNext = firstHalf.next;
        let secondNext = secondHalf.next;
        firstHalf.next = secondHalf;
        secondHalf.next = firstNext;
        firstHalf = firstNext;
        secondHalf = secondNext;
    }

    return head;
};


// Example usage:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(reorderList(head));

// The linked list is now reordered to 1 -> 4 -> 2 -> 3
