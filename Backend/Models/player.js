class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Player {
  constructor() {
    this.current = null;
  }

  loadSongs(songList) {
    if (!Array.isArray(songList) || songList.length === 0) return;

    let prevNode = null;
    songList.forEach((data, index) => {
      const newNode = new Node(data);
      if (index === 0) {
        this.current = newNode;
      } else {
        newNode.prev = prevNode;
        prevNode.next = newNode;
      }
      prevNode = newNode;
    });
  }

  next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.data;
    }
    return null;
  }

  previous() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      return this.current.data;
    }
    return null;
  }

  currentSong() {
    return this.current ? this.current.data : null;
  }
}

module.exports = Player;
