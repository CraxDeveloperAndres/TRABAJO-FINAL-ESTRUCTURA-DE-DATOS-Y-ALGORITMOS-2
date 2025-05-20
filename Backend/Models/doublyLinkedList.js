class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  delete(id) {
    let current = this.head;
    while (current) {
      if (current.data.id === id) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;

        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = DoublyLinkedList;
