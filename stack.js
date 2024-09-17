/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node;
    newNode.val = val;
    if(!this.first) this.first = this.last = newNode;
    else{
      let oldFirst = this.first
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let valueToBeReturned = this.first.val;
    this.first = this.first.next;
    this.size--;
    return valueToBeReturned;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size) return false;
    return true;
  }
}

module.exports = Stack;
