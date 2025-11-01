
//**—Q 123. 142. Linked List Cycle II** ✅

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head == null || head.next == null ) return null;
    let fast = head,slow = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow  = slow.next;
        if(fast == slow ){
            let ptr1 = head;
            let ptr2 = slow;
            while(ptr1 != ptr2){
                ptr1 = ptr1.next;
                ptr2 = ptr2.next
            }
            return ptr1
        }
    }
return null 
};