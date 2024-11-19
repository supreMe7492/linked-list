class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;

      //console.log(current);
    }

    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      node.nextNode = current.nextNode;
      current.nextNode = node;

      //console.log(current);
    }
    this.length++;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head.value;
  }
  getTail() {
    let current = this.head;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current.value;
  }
  at(index) {
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.nextNode;
      currentIndex++;
    }
    return current.value;
  }
  pop() {
    if (this.head == null) {
      return;
    }
    if (this.head.nextNode == null) {
      this.head = null;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.length--;
  }
  contains(value) {
    if (this.head.value == value) {
      return true;
    }
    let current = this.head;
    while (current.nextNode != null) {
      current = current.nextNode;
      if (current.value == value) {
        return true;
      }
    }
    return false;
  }
  find(value) {
    let index = 0;
    let current = this.head;
    if (this.head.value == value) {
      return index;
    }
    while (current.value != value) {
      current = current.nextNode;
      index++;
      if (current == null) {
        return `Nothing with (${value}) is in this node`;
      }
    }

    return index;
  }

  toString(value = this.head) {
    if (value.nextNode == null) {
      return `${value.value}`;
    } else {
      let recursive = this.toString(value.nextNode);
      return `${value.value} -> ${recursive}`;
    }
  }
}

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
