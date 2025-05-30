import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SongComponent from "./SongComponent";
import { useMusicPlayer } from "./Provider/MusicPlayerContext";
import { apiService } from "../Services/apiService";


function Biblioteca() {
  const { allSongs, queueList, currentSong } = useMusicPlayer();
  const [recomendados, setRecomendados] = useState(false);
  const [otherSongs, setOtherSongs] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);


  const getGraphos = () => {
    if (!currentSong?.id) {
      setError("No hay canción actual para generar recomendaciones");
      return;
    }

    console.log("Obteniendo recomendaciones para:", currentSong.titulo + "con el id:" + currentSong.id);

    apiService.get(
      "http://localhost:3000/graphs",
      (res) => {
        console.log(res);
        setOtherSongs(res);
      },
      (err) => {
        console.error("[GRAPHS] ERROR: " + err);
      }
    );
  };

  return (
    <section className="h-full w-full relative overflow-hidden">
      <h1 className="text-3xl font-bold text-white mx-auto text-center">Reproductor Musical</h1>
      <AnimatePresence mode="wait">
        {!recomendados ? (
          <motion.div
            key="biblioteca"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center pt-8 overflow-y-auto h-full px-4"
          >
            <h1 className="text-xl font-bold text-white mb-6">Biblioteca</h1>
            {currentSong && (<button
              onClick={async () => {
                setRecomendados(true);
                setLoadingRecommendations(true);
                await getGraphos();
                setLoadingRecommendations(false);
              }}
              className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition cursor-pointer"
            >
              Ver Recomendados
            </button>)}
            <div className="flex flex-col gap-4 w-full max-w-2xl pb-24">
              {allSongs.map((song) => (
                <SongComponent key={song.id} song={song} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="recomendados"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center pt-8 overflow-y-auto h-full pl-4"
          >
            <h1 className="text-xl font-bold text-white mb-6">Recomendados</h1>

            <div className="flex flex-col gap-4 w-full max-w-2xl pb-24">
              {loadingRecommendations ? (
                // Estado de carga
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-white text-lg">Cargando recomendaciones...</p>
                  <p className="text-gray-400 text-sm mt-2">Analizando tu música favorita</p>
                </div>
              ) : otherSongs.length > 0 ? (
                // Mostrar recomendaciones
                <>
                  <div className="text-center mb-4">
                    <p className="text-gray-300 text-sm">
                      Basado en tu canción actual: <span className="text-white font-medium">{currentSong?.title}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setRecomendados(false)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    Explorar Biblioteca
                  </button>
                  {otherSongs.slice(0, 5).map((song) => (
                    <SongComponent key={song.id} song={song} showLikeButton={false} />
                  ))}
                </>
              ) : (
                // Estado vacío
                <div className="text-center py-12">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 text-gray-500 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">No hay recomendaciones disponibles</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Reproduce algunas canciones para generar recomendaciones personalizadas
                  </p>
                  <button
                    onClick={() => setRecomendados(false)}
                    className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition cursor-pointer"
                  >
                    Explorar Biblioteca
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Biblioteca;
