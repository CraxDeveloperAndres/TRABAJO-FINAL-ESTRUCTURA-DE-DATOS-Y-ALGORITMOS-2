// models/Song.js

class Song {
  constructor(id, title, artist, album, genre, duration) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.genre = genre;
    this.duration = duration;
  }

  // Método estático para crear un objeto canción desde un objeto plano
  static fromObject(obj) {
    return new Song(
      obj.id,
      obj.title,
      obj.artist,
      obj.album,
      obj.genre || 'Unknown', // Género por defecto si no se proporciona
      obj.duration
    );
  }

  // Método estático para crear un conjunto de datos de prueba
  static getSampleData() {
    return [
      new Song('1', 'Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 'Rock', '5:55'),
      new Song('2', 'Another One Bites the Dust', 'Queen', 'The Game', 'Rock', '3:36'),
      new Song('3', 'We Will Rock You', 'Queen', 'News of the World', 'Rock', '2:02'),
      new Song('4', 'Hotel California', 'Eagles', 'Hotel California', 'Rock', '6:30'),
      new Song('5', 'Take It Easy', 'Eagles', 'Eagles', 'Rock', '3:31'),
      new Song('6', 'Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', 'Rock', '8:02'),
      new Song('7', 'Kashmir', 'Led Zeppelin', 'Physical Graffiti', 'Rock', '8:28'),
      new Song('8', 'Imagine', 'John Lennon', 'Imagine', 'Pop', '3:03'),
      new Song('9', 'Hey Jude', 'The Beatles', 'The Beatles', 'Pop', '7:11'),
      new Song('10', 'Let It Be', 'The Beatles', 'Let It Be', 'Pop', '4:03'),
      new Song('11', 'Yesterday', 'The Beatles', 'Help!', 'Pop', '2:05'),
      new Song('12', 'Thriller', 'Michael Jackson', 'Thriller', 'Pop', '5:57'),
      new Song('13', 'Billie Jean', 'Michael Jackson', 'Thriller', 'Pop', '4:54'),
      new Song('14', 'Beat It', 'Michael Jackson', 'Thriller', 'Pop', '4:18'),
      new Song('15', 'Smooth Criminal', 'Michael Jackson', 'Bad', 'Pop', '4:17'),
      new Song('16', 'La Bamba', 'Ritchie Valens', 'La Bamba', 'Rock and Roll', '2:06'),
      new Song('17', 'Sweet Child O\' Mine', 'Guns N\' Roses', 'Appetite for Destruction', 'Hard Rock', '5:56'),
      new Song('18', 'November Rain', 'Guns N\' Roses', 'Use Your Illusion I', 'Hard Rock', '8:57'),
      new Song('19', 'Don\'t Stop Believin\'', 'Journey', 'Escape', 'Rock', '4:11'),
      new Song('20', 'Every Breath You Take', 'The Police', 'Synchronicity', 'Rock', '3:51'),
      new Song('21', 'Despacito', 'Luis Fonsi ft. Daddy Yankee', 'Vida', 'Reggaeton', '3:48'),
      new Song('22', 'Shape of You', 'Ed Sheeran', '÷', 'Pop', '3:54'),
      new Song('23', 'Uptown Funk', 'Mark Ronson ft. Bruno Mars', 'Uptown Special', 'Funk', '4:30'),
      new Song('24', 'Bad Guy', 'Billie Eilish', 'When We All Fall Asleep, Where Do We Go?', 'Pop', '3:14'),
      new Song('25', 'Old Town Road', 'Lil Nas X ft. Billy Ray Cyrus', '7 EP', 'Country Rap', '2:37')
    ];
  }
}

module.exports = Song;