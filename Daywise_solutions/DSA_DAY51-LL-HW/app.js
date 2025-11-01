
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


//**—Q 124. 82. Remove Duplicates from Sorted List II**  ✅

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy; // pointer to node before current sequence
  let cur = head;
  while (cur) {
    // Move cur until the end of duplicates
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }
    // If prev.next is still cur, no duplicates were found for this value
    if (prev.next === cur) {
      prev = prev.next;
    } else {
      // Skip all duplicates
      prev.next = cur.next;
    }
    cur = cur.next; // move forward
  }

  return dummy.next;
};
