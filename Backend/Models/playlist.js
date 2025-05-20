class Playlist {
  constructor() {
    this.songs = [];
    this.current = 0;
  }

  addSong(song) {
    this.songs.push(song);
  }

  getCurrentSong() {
    return this.songs[this.current] || null;
  }

  nextSong() {
    if (this.current < this.songs.length - 1) {
      this.current++;
    }
    return this.getCurrentSong();
  }

  prevSong() {
    if (this.current > 0) {
      this.current--;
    }
    return this.getCurrentSong();
  }

  getAllSongs() {
    return this.songs;
  }
}

module.exports = Playlist
