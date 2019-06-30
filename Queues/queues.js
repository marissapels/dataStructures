//push adds value onto end of queue
//shift removes value from beginning
class Queue {
  constructor(queue=[]) {
    this.collection = queue;
  }
  enqueue(value) {
    this.collection.push(value);
  }
  dequeue() {
    this.collection.shift()
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