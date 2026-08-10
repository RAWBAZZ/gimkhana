"use client";

import { useState } from "react";
import { SONGS, Song } from "@/data/music";
import { usePlayer } from "@/lib/player-context";

export default function SurpriseMe() {
  const [surprise, setSurprise] = useState<Song | null>(null);
  const { play } = usePlayer();

  const roll = () => {
    setSurprise(null);
    setTimeout(() => {
      setSurprise(SONGS[Math.floor(Math.random() * SONGS.length)]);
    }, 200);
  };

  return (
    <div
      className="rounded-[1.75rem] p-7 text-center"
      style={{
        background: "linear-gradient(160deg, rgba(193,68,42,0.14), rgba(216,162,72,0.12))",
        border: "1px solid rgba(36,26,20,0.08)",
      }}
    >
      <div className="font-display font-bold text-[19px]">SURPRISE ME 🎲</div>
      <div className="text-[12.5px] text-ink/60 mb-4 mt-1">Let GIMKHANA pick your next obsession.</div>
      <button
        onClick={roll}
        className="px-7 py-3 rounded-full font-bold text-[13px] text-paper"
        style={{ background: "#241A14" }}
      >
        ROLL THE DICE
      </button>
      {surprise && (
        <div className="mt-5 animate-in">
          <div className="text-[11px] text-ink/50 mb-1">YOU GOT…</div>
          <div className="font-display font-bold text-[17px]">{surprise.title}</div>
          <div className="text-[12.5px] text-ink/60 mb-3">
            {surprise.artist} · {surprise.year}
          </div>
          <button
            onClick={() => play(surprise)}
            className="px-5 py-2.5 rounded-full font-bold text-[12.5px] text-paper"
            style={{ background: "linear-gradient(135deg,#C1442A,#D8A248)" }}
          >
            PLAY THIS TRACK
          </button>
        </div>
      )}
    </div>
  );
}
