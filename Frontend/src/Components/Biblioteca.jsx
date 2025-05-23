import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SongComponent from "./SongComponent";

import { useMusicPlayer } from "./Provider/MusicPlayerContext";
import { apiService } from "../Services/apiService";

function Biblioteca() {
  const {allSongs, queueList} = useMusicPlayer();
  const [recomendados, setRecomendados] = useState(false);

  const [otherSongs, setOtherSongs] = useState([]);
  const getGraphos = ()=>
  {
    apiService.get(
      "http://localhost:3000/graphs",
      (res)=>{setOtherSongs(res);},
      (err)=>{console.error("[GRAPHS] ERROR: "+err)}
    )
  }

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
            {queueList.length> 0 &&(<button
              onClick={() => {setRecomendados(true); getGraphos(); }}
              className="mb-4 px-4 py-2 bg-zinc-700 rounded text-sm hover:bg-zinc-600 transition cursor-pointer"
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
            <button
              onClick={() => setRecomendados(false)}
              className="mb-4 px-4 py-2 bg-zinc-700 rounded text-sm hover:bg-zinc-600 transition"
            >
              Volver a Biblioteca
            </button>
            <div className="flex flex-col gap-4 w-full max-w-2xl pb-24">
              {otherSongs.slice(0, 5).map((song) => (
                <SongComponent key={song.id} song={song} showLikeButton={false} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Biblioteca;
