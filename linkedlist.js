// Class for the node
class Node {
  constructor(value = null) {
    this.value = value; // Stores the value of the node
    this.nextNode = null; // Points to the next node in the linked list (null if it's the last node)
  }
}

// LinkedList class to manage a collection of nodes
class linkedList {
  constructor() {
    this.head = null; // Head points to the first node of the linked list
    this.length = 0; // Keeps track of the number of nodes in the linked list
  }

  // Method to add a new node at the end of the linked list
  append(value) {
    let node = new Node(value); // Create a new node with the provided value
    if (this.head == null) {
      // If the linked list is empty, set the new node as the head
      this.head = node;
    } else {
      let current = this.head; // Start from the head
      while (current.nextNode !== null) {
        // Traverse the list until the last node
        current = current.nextNode;
      }
      current.nextNode = node; // Set the new node as the next of the last node
    }
    this.length++; // Increment the length of the list
  }

  // Method to add a new node at the beginning of the linked list
  prepend(value) {
    let node = new Node(value); // Create a new node with the provided value
    if (this.head == null) {
      // If the list is empty, set the new node as the head
      this.head = node;
    } else {
      let current = this.head; // Store the current head
      node.nextNode = current.nextNode; // Point the new node's next to the second node
      current.nextNode = node; // Insert the new node after the head
    }
    this.length++; // Increment the length of the list
  }

  // Method to get the number of nodes in the linked list
  size() {
    return this.length;
  }

  // Method to get the value of the first node (head)
  getHead() {
    return this.head.value;
  }

  // Method to get the value of the last node (tail)
  getTail() {
    let current = this.head; // Start from the head
    while (current.nextNode != null) {
      // Traverse until the last node
      current = current.nextNode;
    }
    return current.value; // Return the value of the last node
  }

  // Method to get the value of the node at a specific index
  at(index) {
    let current = this.head; // Start from the head
    let currentIndex = 0; // Initialize an index counter
    while (currentIndex < index) {
      // Traverse until the desired index
      current = current.nextNode;
      currentIndex++;
    }
    return current.value; // Return the value of the node at the index
  }

  // Method to remove the last node from the linked list
  pop() {
    if (this.head == null) {
      // If the list is empty, do nothing
      return;
    }
    if (this.head.nextNode == null) {
      // If there's only one node, set the head to null
      this.head = null;
      this.length--; // Decrement the length
      return;
    }

    let current = this.head; // Start from the head
    while (current.nextNode.nextNode != null) {
      // Traverse until the second-to-last node
      current = current.nextNode;
    }
    current.nextNode = null; // Remove the last node by setting the next of the second-to-last node to null
    this.length--; // Decrement the length
  }

  // Method to check if a value exists in the linked list
  contains(value) {
    if (this.head.value == value) {
      // Check if the head contains the value
      return true;
    }
    let current = this.head; // Start from the head
    while (current.nextNode != null) {
      // Traverse the list
      current = current.nextNode;
      if (current.value == value) {
        // Check if the current node's value matches
        return true;
      }
    }
    return false; // Return false if the value is not found
  }

  // Method to find the index of a value in the linked list
  find(value) {
    let index = 0; // Initialize an index counter
    let current = this.head; // Start from the head
    if (this.head.value == value) {
      // Check if the head contains the value
      return index;
    }
    while (current.value != value) {
      // Traverse until the value is found
      current = current.nextNode;
      index++;
      if (current == null) {
        // If the value is not found, return an error message
        return `Nothing with (${value}) is in this node`;
      }
    }
    return index; // Return the index of the found value
  }

  // Method to generate a string representation of the linked list
  toString(value = this.head) {
    if (value.nextNode == null) {
      // If it's the last node, return its value
      return `${value.value}`;
    } else {
      let recursive = this.toString(value.nextNode); // Recursively get the string for the rest of the list
      return `${value.value} -> ${recursive}`; // Combine the current node's value with the rest
    }
  }
}

// Create a new linked list instance
const list = new linkedList();

// Add nodes to the linked list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Print the string representation of the linked list
console.log(list.toString());
