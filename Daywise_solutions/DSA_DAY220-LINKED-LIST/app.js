/**
 * Definition for singly-linked list.
 *
 */
/**147. Insertion Sort List
 * @param {ListNode} head
 * @return {ListNode}
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var insertionSortList = function(head) {
    
    if(!head || !head.next) return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let tail = head.next;
    let sortedTail = head;

    while(tail) {
        let next = tail.next;
        let prev = dummy;
        while(prev.next !== tail && prev.next.val <= tail.val) {
            prev = prev.next;
        }
        if(prev.next !== tail) {
            sortedTail.next = tail.next;
            tail.next = prev.next;
            prev.next = tail;
        } else {
            sortedTail = tail;
        }   
        tail = next;
    }
    
    return dummy.next;
};