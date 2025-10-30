
/*
 * 876. Middle of the Linked List

 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) { 

    let fast = head, slow = head;
    while(fast != null && fast.next != null ){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow
};

// * 21. Merge Two Sorted Lists
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let temp = dummy;
    while(list1 != null && list2 != null ){
   if(list1.val< list2.val){
     temp.next = list1;
     list1 = list1.next;
   } else{
      temp.next  = list2;
      list2  = list2.next;
   }
   temp = temp.next;
    }
    if(list1=== null) temp.next = list2;
    else temp.next = list1;
    return dummy.next;  
};