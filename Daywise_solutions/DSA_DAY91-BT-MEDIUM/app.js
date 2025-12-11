
let prompt = require('prompt-sync')();  
class TreeNode{

     constructor(val , left , right){
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
     }
}

class BST {
    constructor(){
        this.root = null;
    }

    BuildTree(val){
     
        let data = Number(prompt('Enter Data : '))

        let node = new TreeNode(data)

        if(data === -1) return null;

        console.log('Enter left child of ' + node.val);

        node.left = this.BuildTree()
        console.log('Enter right child of ' + node.val);
        node.right = this.BuildTree()

         return node

    }

    lowestCommerAncestor(root , p , q){
 
         if(root === null ) return null
        if(root.val === p || root.val === q ) return root;

        let left = this.lowestCommerAncestor(root.left , p, q)
        let right = this.lowestCommerAncestor(root.right , p ,q)

        if(left != null && right != null) return root;
        else if(left == null || right == null) return left != null ? left : right;
        else return null;

    }

    dfs(root , p , q){
        if(root === null ) return null
        if(root.val === p || root.val === q ) return root;
        let left = this.dfs(root.left , p, q)
        let right = this.dfs(root.right , p ,q)

        
    }
}

const bst1 = new BST()

const root = bst1.BuildTree()

let p = Number(prompt('Enter first node value : '))
let q = Number(prompt('Enter second node value : '))

const lca = bst1.lowestCommerAncestor(root , p , q);
console.log('Lowest Common Ancestor is : ' + lca.val);

