class Stack {
  constructor(stack=[]) {
    this.collection=stack
  }

  add(element) {
    this.collection.push(element);
    return this.collection;
  }

  remove() {
    this.collection.pop();
    return this.collection;
  }

  getLength(){
    return this.collection.length;
  }

  getFirst() {
    return this.collection[0];
  }

  getLast() {
    return this.collection[this.getLength()-1]
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
console.log("stack: ", stack);
console.log("length: ", stack.getLength());
console.log("first: ", stack.getFirst());
console.log("last: ", stack.getLast());
stack.remove();
stack.remove();
console.log("remove: ", stack);
console.log("length: ", stack.getLength());
console.log("first: ", stack.getFirst());
console.log("last: ", stack.getLast());
