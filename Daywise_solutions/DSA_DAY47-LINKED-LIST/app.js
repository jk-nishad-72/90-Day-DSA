

// * class for creation nodes 

class Node{
     
    constructor(val){
        this.val = val;
        this.next = null;
    }

}


const n1 = new Node(50);

console.log(n1);

//* for perform linked list operation 


class linkedList{

    //* for head Pointer 
    constructor() {
        this.head  = null;
        this.size = 0;
    }

  //* Insert operation ->

  //* 1.a) Insert At first position 


  
  InsertAtFirst(val){

      this.size++

    const newNode = new Node(val);

      if(this.head === null){
        this.head = newNode;
        return
      }
      newNode.next = this.head;
      this.head = newNode;
  }

  //* 2.  Deletion Opertion 

  //* 2.a) delet at first 


  deletAtFirst(){

      this.size--

     if(this.head === null){
        console.log('linked list is empty : ');
        return
     }

     this.head = this.head.next

  }

//* Travarsal Operation of linked list 


  printLL(){
     if(this.head===null){
        console.log('Empty Linked list ');
         return
     }
   let temp = this.head;
    console.log(this.size);

   while(temp!=null){
    process.stdout.write(' '+temp.val + " -->" ); 
    temp = temp.next;
   }
  } 



}

//* initially ll is empty so head has null 

const ll1 = new linkedList();

console.log(ll1);


ll1.InsertAtFirst(10)
ll1.InsertAtFirst(20)
ll1.InsertAtFirst(30)
ll1.InsertAtFirst(40)


ll1.printLL()
ll1.deletAtFirst() 
ll1.printLL()



