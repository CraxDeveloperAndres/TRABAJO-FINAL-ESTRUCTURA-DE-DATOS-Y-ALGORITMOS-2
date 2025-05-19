import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState([]);

useEffect(() => {
    fetch('http://localhost:4000/api/songs') // Ruta del backend
      .then(res => res.json())
      .then(data => {
        setSongs(data); // Guardamos las canciones en el estado
      })
      .catch(error => {
        console.error('Error al traer canciones:', error);
      });
  }, []);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Lista de canciones</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
