//705. Design HashSet
var MyHashSet = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.arr.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.arr = this.arr.filter(el => el !== key);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.arr.includes(key);
};


//   Your MyHashSet object will be instantiated and called as such:
  var obj = new MyHashSet()
  obj.add(2)
  obj.add(3)
  obj.add(4)
  obj.remove(2)
 var param_3 = obj.contains(2)

 console.log(obj ,   param_3);
 
 