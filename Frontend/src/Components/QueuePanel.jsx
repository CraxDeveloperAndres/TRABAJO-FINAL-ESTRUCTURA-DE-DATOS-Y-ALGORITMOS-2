import React, { useState } from "react";
import SongComponent from "./SongComponent";
import { useMusicPlayer } from "./Provider/MusicPlayerContext";

function QueuePanel() {

  const { queueList } = useMusicPlayer();

  return (
    <section className="h-full w-full flex flex-col gap-4">
      <h2 className="text-sm font-bold text-zinc-300 mb-2 pr-2 pl-2 pt-2 text-center">
        Cola de reproducción
      </h2>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1 pl-2">
        {queueList.map((song, index) => (
          <SongComponent key={index} song={song} showLikeButton={false} />
        ))}
      </div>
    </section>
  );

}

export default QueuePanel;
