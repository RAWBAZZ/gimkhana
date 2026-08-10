"use client";

import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import Cover from "./Cover";
import Waveform from "./Waveform";
import { usePlayer } from "@/lib/player-context";

export default function MusicPlayer() {
  const { current, playing, progress, toggle, isFav, toggleFav } = usePlayer();

  return (
    <div className="fixed left-0 right-0 bottom-16 md:bottom-4 z-30 px-3 flex justify-center">
      <div className="status-pill w-full max-w-xl rounded-2xl shadow-pill px-3 py-2.5">
        <div className="h-[3px] bg-ink/10 rounded-full mb-2.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-300 linear"
            style={{ width: `${progress}%`, background: "linear-gradient(90deg,#C1442A,#D8A248)" }}
          />
        </div>
        <div className="flex items-center gap-3">
          <Cover song={current} size={40} />
          <div className="flex-1 min-w-0">
            <div className="text-[13.5px] font-bold font-display truncate">{current.title}</div>
            <div className="text-[11.5px] text-ink/60 truncate">{current.artist}</div>
          </div>
          <Waveform playing={playing} />
          <button onClick={() => toggleFav(current.rank)} aria-label="Favourite">
            <Heart size={18} color={isFav(current.rank) ? "#C1442A" : "#241A1466"} fill={isFav(current.rank) ? "#C1442A" : "none"} />
          </button>
          <button aria-label="Previous"><SkipBack size={18} /></button>
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#C1442A,#D8A248)" }}
          >
            {playing ? <Pause size={16} color="#FBF3E7" fill="#FBF3E7" /> : <Play size={16} color="#FBF3E7" fill="#FBF3E7" className="ml-0.5" />}
          </button>
          <button aria-label="Next"><SkipForward size={18} /></button>
        </div>
      </div>
    </div>
  );
}
