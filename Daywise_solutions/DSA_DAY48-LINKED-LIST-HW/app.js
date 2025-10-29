
class Node{
     
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
     
     constructor(){
        this.head = null
        this.size = 0;
     }

     insertAtfirst(val){

         this.size++
        const newNode = new Node(val);

        if(this.head===null){
            console.log('Empty Linked list ') 
            this.head = newNode
            return
        }

        newNode.next = this.head;

        this.head = newNode

     }

     // * insert At specific position 
     

     insertAtPosition(index,val){

         this.size++;
        const newNode = new Node(val)

        if(this.head === null){
            console.log('empty linked list ')
            this.head = newNode
            return
        }

        if(index>this.size){
            console.log('Invalid Posistion ')
            return
        } 

        

            let i = 1;
            let temp = this.head;
            while(i<index){
                temp = temp.next 
                i++
            }
             newNode.next = temp.next;
             temp.next = newNode 
        

     }

     printll(){
         if(this.head === null){
            console.log('Empty linked list ')
            return
         }

          console.log(this.size);
          
        let temp = this.head;
        while(temp != null){
            process.stdout.write(' '+temp.val + '-->')
            temp = temp.next;

        }
        console.log();
     }


}


const ll1 = new LinkedList();

ll1.insertAtfirst(10)
ll1.insertAtfirst(20)
ll1.insertAtfirst(30)
ll1.insertAtfirst(40)

ll1.printll();
ll1.insertAtPosition(4,400)
ll1.insertAtPosition(2,500)
ll1.printll()
// ll1.printll()

