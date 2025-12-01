### **Q150. 543. Diameter of Binary Tree**

#### ✅ JavaScript Code:

```js
var diameterOfBinaryTree = function(root) {
    let ans = 0; 
    var solve = function(root){
        if(root == null) return 0;
        let l = solve(root.left);
        let r = solve(root.right);
        ans = Math.max(ans, l + r);  // longest path through root
        return Math.max(l, r) + 1;   // height of current node
    }
    solve(root);
    return ans;
};
```

#### 🧠 Algorithm:

1. Use **post-order DFS** to calculate the height of left and right subtrees.
2. At each node, `l + r` gives the longest path **through that node**.
3. Keep track of the **maximum such value** in the global variable `ans`.
4. Finally, return `ans` as the diameter.

---

### **Q152. Left View of Binary Tree**

#### ✅ Method 1: Recursive (DFS Preorder + Level Tracking)

```js
class Solution {
    solve(root, level, ans) {
        if(root === null) return;
        if(level === ans.length) ans.push(root.data);
        this.solve(root.left, level + 1, ans);
        this.solve(root.right, level + 1, ans);
    }

    leftView(root) {
        let ans = [];
        if(root === null) return ans;
        this.solve(root, 0, ans);
        return ans;
    }
}
```

#### 🧠 Algorithm:

1. Traverse tree using **preorder traversal** (Root → Left → Right).
2. Use `level` and check if `ans.length == level`.
3. If yes, it means this is the **first node** at this level — include it.
4. Recurse on left, then right.

---

#### ✅ Method 2: Iterative (BFS Level Order)

```js
function leftView(root) {
    let ans = [];
    if(root === null) return ans;
    let q = [root];

    while(q.length > 0) {
        let size = q.length;
        for(let i = 0; i < size; i++) {
            let temp = q.shift();
            if(i === 0) ans.push(temp.data);
            if(temp.left) q.push(temp.left);
            if(temp.right) q.push(temp.right);
        }
    }
    return ans;
}
```

#### 🧠 Algorithm:

1. Perform **level-order traversal**.
2. For every level, add the **first element (i==0)** to result.
3. This represents the **leftmost node at each level**.

---

### **Q153. Top View of Binary Tree**

#### ✅ JavaScript Code:

```js
class Pair {
    constructor(node, hd) {
        this.node = node;
        this.hd = hd;
    }
}

class Solution {
    topView(root) {
        let q = [];
        let map = new Map();  // hd -> node.data
        let ans = [];

        q.push(new Pair(root, 0));

        while(q.length > 0) {
            let size = q.length;
            for(let i = 0; i < size; i++) {
                let temp = q.shift(); // {node, hd}
                if(!map.has(temp.hd)) {
                    map.set(temp.hd, temp.node.data);
                }

                if(temp.node.left) {
                    q.push(new Pair(temp.node.left, temp.hd - 1));
                }
                if(temp.node.right) {
                    q.push(new Pair(temp.node.right, temp.hd + 1));
                }
            }
        }

        let sortedKeys = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
        for (let [key, val] of sortedKeys) {
            ans.push(val);
        }

        return ans;
    }
}
```

#### 🧠 Algorithm:

1. Use BFS with each node tagged with its **horizontal distance (HD)**.
2. Initialize queue with root at HD = 0.
3. At each step:

   * If HD is not in the map, store it (first node at that HD).
4. Push left and right children with `hd - 1` and `hd + 1` respectively.
5. After traversal, **sort the map by HD** and return the values.

