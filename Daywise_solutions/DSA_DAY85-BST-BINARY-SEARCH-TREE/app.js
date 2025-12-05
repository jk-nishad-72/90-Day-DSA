
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        
    }
}

class BST {
     constructor(){
        this.root = null
     }
     insertNode(root , val){

        if(root == null ) {
            root = new TreeNode(val)
            return root
        }
        if(root.val> val){
            root.left = this.insertNode(root.left,val)
        }
        else if(root.val < val) {
            root.right = this.insertNode(root.right, val)
        }
        return root
     }

     LDR(root){

        if(root == null) return
        this.LDR(root.left ) 
        process.stdout.write(root.val +' ')
        this.LDR(root.right)
     }
}

const t1 = new BST()

t1.root = t1.insertNode(t1.root,50)
t1.root = t1.insertNode(t1.root,40)
t1.root = t1.insertNode(t1.root,60)
t1.root = t1.insertNode(t1.root,30)
t1.root = t1.insertNode(t1.root,45)
t1.root = t1.insertNode(t1.root,55)
t1.root = t1.insertNode(t1.root,70)

console.log(t1.LDR(t1.root));

