//unshift adds value to beginning
//pop removes value from end
class Queue {
  constructor(queue=[]) {
    this.collection = queue;
  }
  enqueue(value) {
    this.collection.unshift(value);
  }
  dequeue() {
    this.collection.pop()
  }
}

let queue = new Queue;
console.log("initiate: ", queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("5: ", queue);
queue.dequeue();
queue.dequeue();
console.log("dequeue: ", queue);