//*21. Merge Two Sorted Lists
var mergeTwoLists = function(list1, list2) {
   
    if(list1 == null ) return list2;
    if(list2 == null ) return list1;

    if(list1.val < list2.val){

        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1,list2.next);
        return list2
    }
};


//* 206. Reverse Linked List

var reverseList = function(head) {
    let prev = null, cur = head;
    while(cur!= null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp 
    }
    return prev
    
};


//*83. Remove Duplicates from Sorted List

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

    let temp = head;
    while(temp != null && temp.next != null){
        if(temp.val == temp.next.val ){
            temp.next = temp.next.next
        }else{ 
            temp = temp.next
        }
    }
    return head; 
    
};


//*141. Linked List Cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
     if(head == null || head.next == null) return false
     let fast = head, slow = head;
     while(fast != null && fast.next != null){
          fast = fast.next.next;
          slow = slow.next;
          if(fast == slow) return true
     }
     return false 
};