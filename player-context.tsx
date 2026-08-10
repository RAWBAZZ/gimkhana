"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Song, SONGS } from "@/data/music";

interface PlayerState {
  current: Song;
  playing: boolean;
  progress: number;
  favourites: Set<number>;
  play: (s: Song) => void;
  toggle: () => void;
  toggleFav: (rank: number) => void;
  isFav: (rank: number) => boolean;
}

const PlayerContext = createContext<PlayerState | null>(null);

const FAV_KEY = "gimkhana:favourites";

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<Song>(SONGS[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(20);
  const [favourites, setFavourites] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAV_KEY);
      if (raw) setFavourites(new Set(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favourites)));
    } catch {
      /* ignore */
    }
  }, [favourites]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 400);
    return () => clearInterval(t);
  }, [playing]);

  const play = (s: Song) => {
    setCurrent(s);
    setPlaying(true);
    setProgress(0);
  };

  const toggle = () => setPlaying((p) => !p);

  const toggleFav = (rank: number) => {
    setFavourites((prev) => {
      const next = new Set(prev);
      next.has(rank) ? next.delete(rank) : next.add(rank);
      return next;
    });
  };

  const isFav = (rank: number) => favourites.has(rank);

  return (
    <PlayerContext.Provider value={{ current, playing, progress, favourites, play, toggle, toggleFav, isFav }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
