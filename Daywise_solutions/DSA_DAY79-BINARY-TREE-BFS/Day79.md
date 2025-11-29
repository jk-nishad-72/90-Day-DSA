## Q 146. 102. Binary Tree Level Order Traversal (BFS - Iterative)

```js
var levelOrder = function(root) {
    let ans = []
    if(root == null) return ans;
    let q = []
    q.push(root)
    while(q.length != 0){
       let size = q.length
       let cur = []
       for(let i=0;i<size;i++){
          let node = q.shift()
          cur.push(node.val)
          if(node.left != null) q.push(node.left)
          if(node.right != null) q.push(node.right)
       }
       ans.push(cur)
    }
  return ans;
};
```

### 🔍 Algorithm (BFS - Level Order)
1. Use a queue to hold nodes level by level.
2. Start with root node in queue.
3. While queue is not empty:
   - Get number of nodes at current level.
   - For each node:
     - Remove it from queue.
     - Push its value into a temporary list.
     - Add its children (if any) to queue.
   - Push the temp list into final answer.

---

## Q 147. 101. Symmetric Tree

```js
var solve = function(p, q){
     if(p == null && q == null) return true;
     if((p == null && q != null) || (q == null && p != null)) return false;
     if(p.val === q.val){
        let left = solve(p.left, q.right);
        let right = solve(p.right, q.left);
        return left && right;
     }
     return false;
} 

var isSymmetric = function(root) {
    if(root == null) return true;
    return solve(root.left, root.right);
};
```

### 🔍 Algorithm
1. Use recursion to compare left and right subtree.
2. For symmetry:
   - Compare left subtree of one with right subtree of another.
   - Base cases: both null = true, one null = false.
3. Recursively compare p.left with q.right, and p.right with q.left.

---

## Q 148. 112. Path Sum

```js
var hasPathSum = function(root, t) {
    if(root == null) return false;
    if(root.left == null && root.right == null && root.val == t) return true;
    return hasPathSum(root.left, t - root.val) || hasPathSum(root.right, t - root.val);
};
```

### 🔍 Algorithm
1. Use recursion to subtract root value from target sum.
2. If we reach a leaf node and remaining sum = 0 → return true.
3. Else, continue recursively for left and right child.
4. Return OR of both calls.

---

## Q 149. Invert Binary Tree

```js
var solve = function(root){
   if(root == null) return;
   solve(root.left);
   solve(root.right);
   let temp = root.left;
   root.left = root.right;
   root.right = temp;
} 

var invertTree = function(root) {
    if(root == null) return null;
    solve(root);
    return root;
};
```

### 🔍 Algorithm
1. Use recursion to traverse all nodes.
2. At every node, swap left and right.
3. Traverse both children before swapping.
4. Base case: if node is null, return.

---

## Q 151. 100. Same Tree

```js
var isSameTree = function(p, q) {
     if(p == null && q == null) return true;
     if((p == null && q != null) || (p != null && q == null)) return false;
     if(p.val == q.val){
         let left = isSameTree(p.left, q.left);
         let right = isSameTree(p.right, q.right);
         return left && right;
     }
     return false;
};
```

### 🔍 Algorithm
1. Recursively check both nodes.
2. If both are null → return true.
3. If one is null or values differ → return false.
4. Check left subtree with left and right subtree with right.

---

