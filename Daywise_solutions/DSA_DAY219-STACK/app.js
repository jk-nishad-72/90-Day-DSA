//155. Min Stack

var MinStack = function() {
    
    this.array = [];
    this.min = Number.MAX_VALUE;
   
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.array.push(val);
    if (val < this.min) {
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.array.pop();
    if (popped === this.min) {
        this.min = Math.min(...this.array);
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};
/** 
 * Your MinStack object will be instantiated and called as such:
 *
 */
 var obj = new MinStack()
  obj.push(-2)
  obj.push(0)
  obj.push(-3)  
  obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.getMin()

  console.log(param_3, param_4);
  