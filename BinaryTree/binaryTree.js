class TreeNode {
  constructor(element, left=null, right=null) {
    this.value = element;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }

  add(data) {
    let tree = this;
    if (!this.value) {
      this.value = data;
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.value) {
          if (!node.left) {
            node.left = new TreeNode(data);
            return;
          } else if (!!node.left) {
            return searchTree(node.left);
          }
        } else if (data > node.value) {
          if (!node.right) {
            node.right = new TreeNode(data);
            return;
          } else if (!!node.right) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(tree);
    }
  }

  findMin() {
    let currentNode=this;
    if (!this.value) return null;
    while (!!currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  findMax() {
    let currentNode=this;
    if (!this.value) return null;
    while (!!currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  findLength() {
    let tree=this;
    let length = 0;
    const traverse = (node) => {
      if (!node || !node.value) return length;
      length++;
      if (node.left) {
        return traverse(node.left);
      }
      if (node.right) {
        return traverse(node.right);
      }
      return length;
    }
    return traverse(tree);
  }

  countLeaves() {
    let tree = this;
    let leafCount = 0;
    const move = (node) => {
      if (!node) return leafCount;
      if (!node.left && !node.right) leafCount++;
      if (node.left || node.right) {
        if (node.left) {
          move(node.left);
        }
        if (node.right) {
          move(node.right);
        }
      }
      return leafCount;
    }
    return move(tree);
  }
}
  //         5
  //       /   \
  //      3     7
  //     / \     \
  //    2   4     9
  //   /
  //  1
      
let tree = new Tree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(4);
tree.add(9);
tree.add(2);
tree.add(1);
// console.log("tree: ", tree);
console.log("min: ", tree.findMin());
console.log("max: ", tree.findMax());
console.log("length: ", tree.findLength());
console.log("leaves: ", tree.countLeaves());
tree.add(6);
console.log("leaves: ", tree.countLeaves());