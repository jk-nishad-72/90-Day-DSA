
class LinkedlistNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Linkedlist {

     constructor(){
        this.head  = null;
        this.size = 0;
     }

        insertFirst(value){
            const newNode = new LinkedlistNode(value);
            this.size++;

            if(!this.head){
                this.head = newNode;
                return;
            }

            newNode.next = this.head;
            this.head = newNode;
        }


        traverse(){
            let current = this.head;    
            while(current){
                process.stdout.write(`${current.value} -> `);
                current = current.next;
            }       
        }
}

const ll = new Linkedlist();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);


ll.traverse();

var palindrome = function(head) {

    let arr = [];
    let current = head;     
    while(current){
        arr.push(current.value);
        current = current.next;
    }   

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;   
        right--;
    }       
    return true;
}     

console.log(palindrome(ll.head));



