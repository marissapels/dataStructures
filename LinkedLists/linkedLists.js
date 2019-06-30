class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.value = null;
    this.next = null
  }

  append(value) {
    let node = new LinkedListNode(value);
    if (!this.value) {
      this.value=value;
    } else {
      let currentNode = this;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next= node;
    }
  }
}

let findLength = (list) => {
  let length=0;
  if (!list) return length;
  length++;

  while (list.next) {
    length++;
    list = list.next;
  }
  return length;
}

let removeNode = (list, removeValue) => {
  let previousNode;
  if (list.value === removeValue) {
    return null;
  } else {
    while (list.value !== removeValue) {
      previousNode = list;
      list = list.next;
    }
    previousNode.next = list.next;
  }
  return previousNode;
}

let linkedList = new LinkedList;
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
console.log("findLength: ", findLength(linkedList));
removeNode(linkedList, 2);
console.log("linkedList remove: ", linkedList);