class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
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

  remove(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        // Si es el primer nodo
        if (!current.prev) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
          else this.tail = null; // lista quedó vacía
        }
        // Si es el último nodo
        else if (!current.next) {
          this.tail = current.prev;
          this.tail.next = null;
        }
        // Si está en el medio
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        return true; // nodo eliminado
      }

      current = current.next;
    }

    return false; // no se encontró el dato
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

module.exports = DoublyLinkedList;
