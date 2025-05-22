import { useState } from "react";

import LikesPanel from "./Components/LikesPanel";
import Biblioteca from "./Components/Biblioteca";
import QueuePanel from "./Components/QueuePanel";
import MusicPlayer from "./Components/MusicPlayer";
import { MusicPlayerProvider } from "./Components/Provider/MusicPlayerContext"
import Login from "./Login";
import { LogOut } from "lucide-react";


function App() {

  const [loged, setLoged] = useState(() => localStorage.getItem("clave") === "true");
  if (!loged) {
    return (
      <Login
        onLoged={() => {
          localStorage.setItem("clave", "true");
          setLoged(true);
        }}
      />
    );
  }

  return (
    <MusicPlayerProvider>
      <div className="h-full w-full relative md:grid md:grid-cols-5 md:grid-rows-5">
        {/* Panel Izquierdo - Likes */}
        <div className="hidden md:block md:col-span-1 md:row-span-4 overflow-y-auto border-r border-zinc-800 bg-zinc-950">
          <LikesPanel />
        </div>

        {/* Panel Central - Biblioteca */}
        <div className="h-[calc(90vh-6rem)] overflow-y-auto bg-zinc-900 py-6 md:col-span-3 md:row-span-4 md:h-auto">
          <Biblioteca />
        </div>

        {/* Panel Derecho - Queue */}
        <div className="hidden md:block md:col-span-1 md:row-span-4 overflow-y-auto border-l border-zinc-800 bg-zinc-950">
          <QueuePanel />
        </div>

        {/* Mobile Only: Likes + Queue debajo de Biblioteca */}
        <div className="md:hidden flex flex-col h-auto max-h-[100vh] overflow-y-auto divide-y divide-zinc-800 border-t border-zinc-800 bg-zinc-950">
          <LikesPanel />
          <QueuePanel />
        </div>

        {/* Music Player - Siempre visible abajo */}
        <div className="fixed bottom-0 left-0 right-0 z-10 md:static md:col-span-5 md:row-span-1 bg-zinc-900 border-t border-zinc-800">
          <MusicPlayer />
        </div>
      </div>
      <button
        onClick={()=>{localStorage.setItem("clave", "false"); setLoged(false);}}
        className="fixed bottom-2 left-4 flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg hover:bg-zinc-700 transition z-200"
      >
        <LogOut size={18} />
        <span>Salir de aquí</span>
      </button>
    </MusicPlayerProvider>
  );
}

export default App;
