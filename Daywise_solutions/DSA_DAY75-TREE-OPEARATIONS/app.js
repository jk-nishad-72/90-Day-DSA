
let prompt = require('prompt-sync')()

class Node{

     constructor(val){

        this.val = val;
        this.left = this.right = null

     }
}

class Tree {

     BuildTree(){
  
        let data  =  parseInt(prompt('Enter Data : ')) 

        let root = new Node(data)

        if(data == -1 ) return null

        console.log('Enter left child of : '+ root.val)
 
       root.left =   this.BuildTree()

        console.log('Enter right child of : '+ root.val)

         root.right = this.BuildTree()


        return root

     }

     preOrder(root){

         if(root == null ) return
         process.stdout.write(' '+root.val) // Data
         this.preOrder(root.left) // left 
         this.preOrder(root.right) // right 
     }

     postOrder(root){

         if(root == null ) return
         this.postOrder(root.left) // left 
         this.postOrder(root.right) // right 
         process.stdout.write(' '+root.val) // Data

     }
     inOrder(root){

         if(root == null ) return
         this.inOrder(root.left) // left 
         process.stdout.write(' '+root.val) // Data
         this.inOrder(root.right) // right 
     }



}

const t1 = new Tree()

const root = t1.BuildTree()
console.log(root);

console.log(t1.preOrder(root));
console.log(t1.postOrder(root));
console.log(t1.inOrder(root));






