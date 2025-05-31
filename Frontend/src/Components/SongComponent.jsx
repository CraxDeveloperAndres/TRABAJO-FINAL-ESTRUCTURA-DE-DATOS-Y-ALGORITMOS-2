import React, { useState } from "react";
import {
  Heart,
  PlusCircle,
  Play,
  CircleMinus,
} from "lucide-react";
import { useMusicPlayer } from "./Provider/MusicPlayerContext";
import { apiService } from "../Services/apiService";

function SongComponent({ song, showLikeButton = true }) {

  const { currentSong, setCurrentSong, getsongs, getlikedSongs, getqueue } = useMusicPlayer();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='white' /%3E%3C/svg%3E";
  };

  const handleCurrentSong = () => {
    setCurrentSong(song);
  }

  const isCurrent = currentSong?.id === song.id;

  const toggleLike = (idsong) => {

    apiService.post(`${API_URL}/togglelike`, { id: idsong },
      (res) => {

        song = res;
        getsongs();
        getlikedSongs();
        getqueue();


      },
      (erro) => {
        console.log("no se pudo hacer el fetch de datos" + erro)
      }
    )
  }

  const addqueue = (song) => {

    apiService.post(`${API_URL}/addqueue`, { cancion: song },
      (res) => {

        song = res;
        getsongs();
        getqueue();


      },
      (erro) => {
        console.log(" addqueue no se pudo hacer el fetch de datos" + erro)
      }
    )

  }


  const removequeue = (idsong) => {

    apiService.post(`${API_URL}/removequeue`,{ id: idsong },
      (res) => {

        song = res;
        getsongs();
        getqueue();


      },
      (erro) => {
        console.log(" addqueue no se pudo hacer el fetch de datos" + erro)
      }
    )

  }

  return (
    <section className="flex items-center justify-between w-full bg-zinc-800 p-3 rounded-lg shadow hover:bg-zinc-700 transition">
      {/* Imagen con overlay */}
      <div className="relative flex items-center gap-4">
        <div className="relative">
          <img
            src={song.image || "https://picsum.photos/60"}
            alt={song.titulo}
            onError={handleImageError}
            className="w-14 h-14 object-cover rounded-md shadow-lg"
          />
          <button
            onClick={handleCurrentSong}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 hover:opacity-100 transition"
          >
            <Play className="text-white" size={20} />
          </button>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {song.titulo}
          </h3>
          <p className="text-xs text-zinc-400">{song.artista}</p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex items-center gap-3">
        {showLikeButton && (
          song.meGusta ? (
            <button
              onClick={() => toggleLike(song.id)}
              className="text-white hover:text-zinc-300 transition"
            >
              <Heart size={18} fill="white" />
            </button>
          ) : (
            <button
              onClick={() => toggleLike(song.id)}
              className="text-zinc-400 hover:text-white transition"
            >
              <Heart size={18} fill="none" />
            </button>
          )
        )}


        {song.encolado ? (
          <button
            onClick={() => removequeue(song.id)}
            className="text-zinc-400 hover:text-white transition"
          >
            <CircleMinus size={18} />
          </button>
        ) : (
          <button
            onClick={() => addqueue(song)}
            className="text-zinc-400 hover:text-white transition"
          >
            <PlusCircle size={18} />
          </button>
        )}
      </div>
    </section>
  );
}

export default SongComponent;