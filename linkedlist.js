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
      console.log(current);
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

      console.log(current);
    }
    this.length++;
  }
}

let a = new linkedList();
a.append("ASAS");
a.append("fuck");
a.append("suii");
//a.prepend("nahh");
//console.log(a);
