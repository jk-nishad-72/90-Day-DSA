/**
 * Definition for singly-linked list.
 * 
 *
 */
/**2487. Remove Nodes From Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 
 * Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
    */
 
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNodes = function(head) {