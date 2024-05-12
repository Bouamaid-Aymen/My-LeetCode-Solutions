
var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = []; // Stack to keep track of the minimum element
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val); // Update minStack if val is smaller or equal to current minimum
    }
};

MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop(); // If popped element is the current minimum, update minStack
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

// Test case
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin()); // Output: -3
obj.pop();
console.log(obj.top());    // Output: 0
console.log(obj.getMin()); // Output: -2
