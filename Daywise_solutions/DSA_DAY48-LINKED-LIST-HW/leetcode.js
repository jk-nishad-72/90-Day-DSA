
var Node = function(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() { 
    this.head = null;
    this.size = 0;  
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    if(index < 0 || index >= this.size ) return -1;
    let temp = this.head;
    let i = 0;

    while(i<index){
        temp = temp.next;
        i++
    }
    return temp.val

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
    const newNode = new Node(val);
     this.size++
     newNode.next = this.head;
     this.head = newNode

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {

     this.size++
    const newNode = new Node(val);
    let temp = this.head;


   if(!this.head){
      this.head = newNode;

   }else{
    while(temp.next != null){
        temp = temp.next
    }
    temp.next = newNode
   } 
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val){

      if(index < 0 || index > this.size ) return -1;

      if(index ===0 ){
          this.addAtHead(val)
          return
      }
      const newNode = new Node(val);
      let temp = this.head;
      let i =1 ;

      while(i<index){
        temp = temp.next 
        i++
      }
      newNode.next = temp.next;
      temp.next = newNode
      this.size++    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size ) return -1;

    if(index === 0){
         this.head = this.head.next
    }else{
        let temp = this.head;
        let i = 1;
        while(i<index){
            temp = temp.next;
            i++
        }
        temp.next = temp.next.next;

    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */