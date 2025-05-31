import React, { createContext, useContext, useEffect, useState } from "react";
import { backService } from "../../Services/backService";
import { apiService } from "../../Services/apiService";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [allSongs, setAllSongs] = useState(backService.getAll);
  const [queueList, setQueueList] = useState(backService.getLiked);
  const [likedList, setLikedList] = useState(backService.getQueue);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'; 
  console.log(API_URL)

  useEffect(() => {

    getsongs();
    getqueue();
    getlikedSongs();

  }, []);

   const getsongs = ()=>{apiService.get(`${API_URL}/songs`,
      (res) => {

        setAllSongs(res)
        if (currentSong != null) {
        const songEncontrada = res.find(song => song.id === currentSong.id);
        if(songEncontrada){
          setCurrentSong(songEncontrada);
        }
      }

      },
      (err) => {

        console.log(" get songs No se pudo hacer el fetching de datos")

      }

    );}

    const getqueue = ()=>{ apiService.get(`${API_URL}/queue`,
      (res) => {

        setQueueList(res)

      },
      (err) => {

        console.log("get queue No se pudo hacer el fetching de datos")

      }

    );
  }
    const getlikedSongs = ()=>{
      
      apiService.get(`${API_URL}/likedsongs`,
      (res) => {

        setLikedList(res)

      },
      (err) => {

        console.log(" get likedsongs No se pudo hacer el fetching de datos {ES DE ESTA MONDA}")

      }

    );

  }


  

  useEffect(() => {
    if (currentSong == null) return;
    // colocar cancion en player
  }, [currentSong]);

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, allSongs, setAllSongs, queueList, setQueueList, likedList, setLikedList,
      getlikedSongs,getqueue,getsongs
     }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
