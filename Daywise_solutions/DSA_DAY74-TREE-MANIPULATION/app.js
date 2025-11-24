 let prompt = require('prompt-sync')()

class Node{

     constructor(val) {
          this.val = val;
          this.right = this.left = null
        
     }
}

class Tree {

     buildTree(){

         let data  = parseInt(prompt('Enter Value : '))

         if(data == -1 ) return null
         
          let root = new Node(data);

          console.log('Enter left data of '+ root.val);
          
          root.left = this.buildTree();

          console.log('Enter right data of '+ root.val);

           root.right = this.buildTree();
           
           return root;
     }
}


const T1 = new Tree()

console.log(T1.buildTree());


