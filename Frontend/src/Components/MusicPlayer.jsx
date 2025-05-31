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
  const [duration, setDuration] = useState(0);
  const { currentSong, setCurrentSong, getsongs, getlikedSongs, getqueue } = useMusicPlayer();
  const audioRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL || 'https://trabajo-final-estructura-de-datos-y-algoritmos-2-janawc1f7.vercel.app';


  const [last, setLast] = useState({ meGusta: "", id: null });
  const [urlSong, setUrlSong] = useState("");

  // Configurar la canción cuando cambie currentSong
  useEffect(() => {
    if (currentSong == null) return;

    const songDir = {
      1: "/songs/BAD BUNNY - BOKeTE (Video Oficial)  DeBÍ TiRAR MáS FOToS.mp3",
      2: "/songs/BAD BUNNY - KETU TeCRÉ (Video Oficial)  DeBÍ TiRAR MáS FOToS.mp3",
      3: "/songs/Bad Bunny - Moscow Mule (Video Oficial)  Un Verano Sin Ti.mp3",
      4: "/songs/Bad Bunny - Neverita (Video Oficial)  Un Verano Sin Ti.mp3",
      5: "/songs/BAD BUNNY - NO ME QUIERO CASAR (Official Video)  nadie sabe lo que va a pasar mañana.mp3",
      6: "/songs/BAD BUNNY - TURiSTA (Video Oficial)  DeBÍ TiRAR MáS FOToS.mp3",
      7: "/songs/BAD BUNNY - VOY A LLeVARTE PA PR (Visualizer)  DeBÍ TiRAR MáS FOToS.mp3",
      8: "/songs/Charlie Puth - Light Switch [Official Music Video].mp3",
      9: "/songs/DANSU - DO DO DO.mp3",
      10: "/songs/Feid, ATL Jacob - Luna (Visualizer).mp3",
      11: "/songs/FKJ & Masego - Tadow.mp3",
      12: "/songs/Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends).mp3",
      13: "/songs/Jacob Tillberg - Heartless (feat. Johnning).mp3",
      14: "/songs/Joel Culpepper - Woman  A COLORS SHOW.mp3",
      15: "/songs/Just the Two of Us (feat. Bill Withers).mp3",
      16: "/songs/Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3",
      17: "/songs/Kendrick Lamar - Not Like Us.mp3",
      18: "/songs/La Noche Más Linda.mp3",
      19: "/songs/Maroon 5 - Sugar (Official Music Video).mp3",
      20: "/songs/Me Tengo Que Ir.mp3",
      21: "/songs/Morat - A Dónde Vamos (Video Oficial).mp3",
      22: "/songs/NewJeans (뉴진스) 'OMG' Official MV (Performance ver.1).mp3",
      23: "/songs/Paulo Londra - Solo Pienso en Ti ft. De La Ghetto, Justin Quiles (Official Video).mp3",
      24: "/songs/Post Malone - Circles (Official Music Video).mp3",
      25: "/songs/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) (Official Video).mp3",
      26: "/songs/Staring.mp3",
      27: "/songs/Steelix - Lay It Down (Lyrics)  tell your friends you ain't coming out tonight.mp3",
      28: "/songs/Stromae, Pomme, Coldplay - Ma Meilleure Ennemie ft. Coldplay (from Arcane) [Official Lyric Video].mp3",
      29: "/songs/Tainy, Bad Bunny, Julieta Venegas - Lo Siento BB_ (Official Video).mp3",
      30: "/songs/Tu Con El.mp3",
      31: "/songs/twenty one pilots_ Stressed Out [OFFICIAL VIDEO].mp3",
      32: "/songs/TWICE FANCY MV.mp3",
      33: "/songs/What You Won't Do for Love.mp3",
    };


    const newUrl = songDir[currentSong.id];
    setUrlSong(newUrl);

    // Si no existía un last anterior que se inicie
    if (last.id === null) {
      setLast({ meGusta: currentSong.meGusta, id: currentSong.id });
      setIsPlaying(true);
      return;
    }

    const isSameSong = currentSong.id.toString() === last.id.toString();
    const isMeGustaChanged = currentSong.meGusta.toString() !== last.meGusta.toString();

    if (isSameSong && !isMeGustaChanged) {
      return setLast({ meGusta: currentSong.meGusta, id: currentSong.id });
    }

    if (!isSameSong) {
      // Nueva canción - resetear tiempo y pausar
      setCurrentTime(0); // reiniciar
      setIsPlaying(false);
      setIsPlaying(true);
      setLast({ meGusta: currentSong.meGusta, id: currentSong.id });
    }


  }, [currentSong, last.id, last.meGusta]);

  // Configurar eventos del elemento audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onNext(); // Avanzar a la siguiente canción automáticamente
    };

    const handleCanPlay = () => {
      // El audio está listo para reproducir
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    // Agregar event listeners
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      // Limpiar event listeners
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [urlSong, isPlaying, onNext]);

  // Controlar reproducción/pausa
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !urlSong) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='white' /%3E%3C/svg%3E";
  };

  const toggleLike = (idsong) => {
    apiService.post( `${API_URL}/togglelike`,{ id: idsong },
      (res) => {
        setCurrentSong(res);
        getsongs();
        getlikedSongs();
      },
      (erro) => {
        console.log("no se pudo hacer el fetch de datos" + erro);
      }
    );
  };

  const nextButton = () => {
    apiService.get(`${API_URL}/next`,
      (res) => {
        setCurrentSong(res);
      },
      (erro) => {
        console.log("next button no se pudo hacer el fetch de datos" + erro);
      }
    );
  };

  const previousButton = () => {
    apiService.get(`${API_URL}/back`,
      (res) => {
        setCurrentSong(res);
      },
      (erro) => {
        console.log("prev button no se pudo hacer el fetch de datos" + erro);
      }
    );
  };

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
    if (!progressBarRef.current || !audioRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(Math.max(offsetX / width, 0), 1);
    const newTime = duration * percent;

    // Actualizar el tiempo del audio directamente
    audioRef.current.currentTime = newTime;
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
    <>
      {/* Elemento audio oculto */}
      <audio
        ref={audioRef}
        src={urlSong}
        preload="metadata"
        style={{ display: 'none' }}
      />

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
              disabled={!urlSong}
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
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
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
    </>
  );
}

export default MusicPlayer;