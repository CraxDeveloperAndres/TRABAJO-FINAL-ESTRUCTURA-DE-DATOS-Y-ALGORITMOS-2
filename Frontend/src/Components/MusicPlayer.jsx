import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { useMusicPlayer } from "./Provider/MusicPlayerContext";
import { apiService } from "../Services/apiService";

function MusicPlayer({
  onNext = () => {
    console.log("next");
  },
  onPrev = () => {
    console.log("prev");
  },
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const { currentSong, setCurrentSong, getsongs, getlikedSongs, getqueue } = useMusicPlayer();

  const duration = currentSong?.duracion || 0; // duración en segundos

  useEffect(() => {
    let interval = null;

    if (isPlaying && duration > 0) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            clearInterval(interval);
            onNext(); // opcional: avanzar a la siguiente canción
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, duration, onNext]);

  const [last,setLast] = useState({meGusta: "", id: null });
  useEffect(() => {
    if (currentSong == null) return;

    // si no existia un last anterior que se inicie
    if (last.id === null) {
      setLast({meGusta:currentSong.meGusta, id:currentSong.id})
      setIsPlaying(true);
      return;
    }


    const isSameSong = currentSong.id.toString() === last.id.toString();
    const isMeGustaChanged = currentSong.meGusta.toString() !== last.meGusta.toString();
    
    if (isSameSong && !isMeGustaChanged) {
    
      return setLast({meGusta:currentSong.meGusta, id:currentSong.id});
    }

    if (!isSameSong && isMeGustaChanged) {
      setCurrentTime(0); // reiniciar
      setIsPlaying(false);
      setIsPlaying(true);
      return setLast({meGusta:currentSong.meGusta, id:currentSong.id});
    }

    // Actualizar valores anteriores
    
  }, [currentSong]);

  const handlePlayPause = () => {
    if (duration > 0) {
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='white' /%3E%3C/svg%3E";
  };

  const toggleLike = (idsong) => {

    apiService.post('http://localhost:3000/togglelike', { id: idsong },
      (res) => {
        setCurrentSong(res)
        getsongs();
        getlikedSongs();
      },
      (erro) => {
        console.log("no se pudo hacer el fetch de datos" + erro)
      }
    )
  }

  //metodos de siguiente y anterior

   const nextButton = () => {

    apiService.get('http://localhost:3000/next',
      (res) => {
        setCurrentSong(res)
      },
      (erro) => {
        console.log(" next button no se pudo hacer el fetch de datos" + erro)
      }
    )
  }

  
   const previousButton = () => {

    apiService.get('http://localhost:3000/back',
      (res) => {
        setCurrentSong(res)
      },
      (erro) => {
        console.log(" prev button no se pudo hacer el fetch de datos" + erro)
      }
    )
  }



  // Barra de progreso
  const progressBarRef = useRef(null);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const handleMouseDown = (e) => {
    setIsScrubbing(true);
    updateScrub(e);
  };

  const handleMouseMove = (e) => {
    if (isScrubbing) {
      updateScrub(e);
    }
  };

  const handleMouseUp = () => {
    if (isScrubbing) {
      setIsScrubbing(false);
    }
  };

  const updateScrub = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(Math.max(offsetX / width, 0), 1);
    const newTime = Math.floor(duration * percent);
    setCurrentTime(newTime);
  };

  // Escucha los eventos globalmente cuando se scrubea
  useEffect(() => {
    if (isScrubbing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isScrubbing]);

  return (
    <div className="flex items-center justify-between px-6 pt-3 bg-zinc-950 border-t border-zinc-800 w-full h-24">
      {/* Canción actual */}
      <div className="flex items-center gap-4 w-1/3 border-zinc-800">
        {currentSong && (
          <>
            <img
              src={currentSong?.image || "https://via.placeholder.com/60"}
              alt={currentSong?.titulo}
              onError={handleImageError}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <p className="text-white text-sm font-semibold">
                {currentSong?.titulo || "Título"}
              </p>
              <p className="text-zinc-400 text-xs">
                {currentSong?.artista || "Artista"}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Controles y barra */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button onClick={previousButton} className="text-zinc-400 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button
            onClick={handlePlayPause}
            className="text-zinc-400 hover:text-white"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button onClick={nextButton} className="text-zinc-400 hover:text-white">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 w-full max-w-sm">
          <span>{formatTime(currentTime)}</span>
          <div
            ref={progressBarRef}
            className="flex-1 h-1 bg-zinc-700 rounded relative cursor-pointer"
            onMouseDown={handleMouseDown}
          >
            <div
              className="h-full bg-white absolute top-0 left-0 pointer-events-none"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Botón de me gusta */}
      <div className="w-1/3 flex justify-end pr-4">
        {currentSong && currentSong.meGusta ? (
          <button
            onClick={() => toggleLike(currentSong.id)}
            className="text-white hover:text-zinc-300 transition"
          >
            <Heart size={18} fill="white" />
          </button>
        ) : (
          <button
            onClick={() => toggleLike(currentSong.id)}
            className="text-zinc-400 hover:text-white transition"
          >
            <Heart size={18} fill="none" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;