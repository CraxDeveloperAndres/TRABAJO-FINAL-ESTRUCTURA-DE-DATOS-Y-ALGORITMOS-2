import React, { useState } from "react";
import SongComponent from "./SongComponent";
import { useMusicPlayer } from "./Provider/MusicPlayerContext";

function LikesPanel() {
  const { likedList } = useMusicPlayer();

  return (
    <section className="h-full w-full flex flex-col gap-4">
      <h2 className="text-sm font-bold text-zinc-300 mb-2 pr-2 pl-2 pt-2 text-center">
        Tus me gusta
      </h2>
      <div className="text-sm font-semibold text-zinc-300 mb-2 pr-2 pl-2 pt-2">
        {likedList.map((song, index) => (
          <SongComponent key={"likedList" + index} song={song} />
        ))}
      </div>
    </section>
  );

}

export default LikesPanel;
