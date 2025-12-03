
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Pair{
    constructor(node , hd){
        this.node = node;
        this.hd = hd;
    }
}
class Solution {
    topView(root) {
      
       let q = []
       let ans = []
       let map = new Map(); // hd vs node.data
       q.push(new Pair(root, 0))
       while(q.length != 0){
          let size = q.length
          for(let i = 0;i<size ; i++){
               let tp = q.shift();
               if(!map.has(tp.hd)){ 
                   map.set(tp.hd , tp.node.data)
               }
               if(tp.node.left != null){
                   q.push(new Pair(tp.node.left , tp.hd-1))
               }
               if(tp.node.right != null){
                   q.push(new Pair(tp.node.right , tp.hd+1))
               }
          }
       }
       let sortedEntries = Array.from(map.entries()).sort((a,b)=> a[0] - b[0])
       
       for(let [key , value] of sortedEntries ){
            ans.push(value)
       }
        
        return ans
    }
    
}



/*
 *Bottom View of Binary Tree
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Pair{
    constructor(node , hd){
        this.node = node;
        this.hd = hd;
    }
}
class Solution {
    bottomView(root) {
      
       let q = []
       let ans = []
       let map = new Map(); // hd vs node.data
       q.push(new Pair(root, 0))
       while(q.length != 0){
          let size = q.length
          for(let i = 0;i<size ; i++){
               let tp = q.shift();
          
                   map.set(tp.hd , tp.node.data)
               
               if(tp.node.left != null){
                   q.push(new Pair(tp.node.left , tp.hd-1))
               }
               if(tp.node.right != null){
                   q.push(new Pair(tp.node.right , tp.hd+1))
               }
          }
       }
       let sortedEntries = Array.from(map.entries()).sort((a,b)=> a[0] - b[0])
       
       for(let [key , value] of sortedEntries ){
            ans.push(value)
       }
        
        return ans
    }
    
}
