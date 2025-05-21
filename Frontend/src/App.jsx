import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { apiService } from './apiServices';

function App() {
  const [songs, setSongs] = useState([]);
  const [queueSongs, setQueueSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    apiService.get(
      "http://localhost:3000/api/songs",
      (res)=>{
        console.log(res)
        setSongs(res.songs)
        setLoading(false)
      },
      (err)=>{

        console.log("no se fechearon los datos correctamente"+err)

      }
    )

    apiService.get(
      "http://localhost:3000/api/queue",

      (res)=>{
        setQueueSongs(res.queue)
        console.log(res.queue)
      },
      (err)=>{

        console.log("no se pudo mostrar las canciones en cola"+err)

      }
    );
  }, []);


const addToQueue = (song)=>
{
  apiService.post(
      "http://localhost:3000/api/queue/add",
      {song},
      (res)=>{
        console.log(res)
        setQueueSongs(prev => [...prev, song]);
      },
      (err)=>{

        console.log("no se pudo mandar la cancion a la cola"+err)

      }
    );
}

return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Reproductor de Música</h1>
      </header>

      <main>
        <div className="player-section">
          <h2>Reproduciendo ahora</h2>
          {currentSong ? (
            <div className="current-song">
              <h3>{currentSong.titulo}</h3>
              <p>{currentSong.artista} - {currentSong.album}</p>
              <p>Duración: {currentSong.duracion}</p>
            </div>
          ) : (
            <p>No hay canción reproduciéndose</p>
          )}
          <button className="control-button">
            Siguiente canción
          </button>
        </div>

        <div className="queue-section">
          <h2>Cola de reproducción</h2>
          {queueSongs.length > 0 ? (
            <ul className="song-list">
              {queueSongs.map((song, index) => (
                <li key={index} className="song-item">
                  <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                    <span className="song-duration">{song.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay canciones en la cola</p>
          )}
        </div>

        <div className="library-section">
          <h2>Biblioteca de canciones</h2>
          {loading ? (
            <p>Cargando canciones...</p>
          ) : error ? (
            <p>{error}</p>
          ) : songs && songs.length > 0 ? (
            <ul className="song-list">
              {songs.map((song,index) => (
                <li key={index} className="song-item">
                  <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                    <span className="song-duration">{song.duration}</span>
                  </div>
                  <button 
                    onClick={() => addToQueue(song)}  
                    className="add-button"
                  >
                    Agregar a la cola
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>No hay canciones disponibles en la API. Usando ejemplos:</p>
              <ul className="song-list">
                {songs.map((song) => (
                  <li key={song.id} className="song-item">
                    <div className="song-info">
                      <span className="song-title">{song.title}</span>
                      <span className="song-artist">{song.artist}</span>
                      <span className="song-duration">{song.duration}</span>
                    </div>
                    <button 
                      onClick={() => addToQueue(song)} 
                      className="add-button"
                    >
                      Agregar a la cola
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;