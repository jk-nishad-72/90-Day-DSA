

class Node{
    constructor(val,next = null){
         this.val = val
         this.next = next
    }
}

class linkedList{
     
     constructor(){
        this.head = null
        this.size = 0;

     }

     insertatfirst(val){

        const NewNode = new Node(val);
        this.size++

        if(this.head == null){
             this.head = NewNode
            return `Linked list is Empty `
        }
         
         NewNode.next = this.head
         this.head = NewNode;
        
     }

     printll(){
          
           let temp = this.head
         
           while(temp != null){
             process.stdout.write(temp.val +'-> ')
             temp = temp.next
           }
     }

     
}

const ll = new linkedList()

ll.insertatfirst(10)
ll.insertatfirst(20)
ll.insertatfirst(30)
ll.insertatfirst(40)
ll.printll()
ll.deletNode(30)
ll.printll()

//*237. Delete Node in a Linked List

var deleteNode = function(node) {
      node.val = node.next.val
      node.next = node.next.next
};