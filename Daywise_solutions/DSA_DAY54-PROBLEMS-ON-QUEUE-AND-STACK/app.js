//* Stack -> work on LIFO (Last in First out) (insert and delet will be performed at last or end)
class Stack{

    constructor(){
        this.stack = []
    }

    //* Insert element at Top 
    push(x){
        this.stack.push(x)
        return ` Element Inserted ${this.stack} `
    }
    //* Delet element at Top 
    pop(){

        if(this.isStackEmpty()){
            return 'Stack is Emtpy'
        }
        
        this.stack.pop()
        return `Top element Removed ${this.stack}`

    }

    //*  Top/peak Element 

    peak(){

        if(this.isStackEmpty()){
            return 'Stack is Emtpy'
        }

        return this.stack[0]

    }

    //* print Stack

    print(){
         if(this.isStackEmpty()){
            return 'Stack is Emtpy'
        }

        console.log("Stack:", this.stack.join(" -> "));

    }

    isStackEmpty(){
        return this.stack.length === 0
    }


}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print() 
stack.pop()
stack.print()
console.log(stack.peak()); 











/**
 * *—Q128. 232. Implement Queue using Stacks ✅**

var MyQueue = function() {
    this.stack = [] 
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};
MyQueue.prototype.pop = function() {
    return this.stack.shift()
};
MyQueue.prototype.peek = function() {
        return this.stack[0]
};
MyQueue.prototype.empty = function() {
    return this.stack.length == 0
};

 */

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

