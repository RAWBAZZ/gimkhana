"use client";

import { Heart } from "lucide-react";
import { Song } from "@/data/music";
import Cover from "./Cover";
import Waveform from "./Waveform";
import { usePlayer } from "@/lib/player-context";

export default function SongRow({ song, rank }: { song: Song; rank?: number }) {
  const { current, playing, play, isFav, toggleFav } = usePlayer();
  const isCurrent = current.rank === song.rank;

  return (
    <div
      onClick={() => play(song)}
      className={`flex items-center gap-3 p-2 rounded-2xl cursor-pointer transition-colors hover:bg-clay/5 ${
        isCurrent ? "bg-clay/10" : ""
      }`}
    >
      <Cover song={song} size={46} rank={rank} />
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold font-display truncate">{song.title}</div>
        <div className="text-[12px] text-ink/60 truncate">
          {song.artist} · {song.year}
        </div>
      </div>
      {isCurrent && <Waveform playing={playing} />}
      <span className="text-[11px] text-ink/40">{song.duration}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFav(song.rank);
        }}
        aria-label="Toggle favourite"
        className="p-1"
      >
        <Heart size={16} color={isFav(song.rank) ? "#C1442A" : "#241A1466"} fill={isFav(song.rank) ? "#C1442A" : "none"} />
      </button>
    </div>
  );
}
