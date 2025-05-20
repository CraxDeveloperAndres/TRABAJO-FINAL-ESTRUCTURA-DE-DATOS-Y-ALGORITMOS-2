class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) return null;

    const removed = this.front;
    this.front = this.front.next;

    if (!this.front) this.rear = null;

    return removed.data;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  isEmpty() {
    return !this.front;
  }

  toArray() {
    const result = [];
    let current = this.front;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

module.exports = Queue;
