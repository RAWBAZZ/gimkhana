"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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

export function PlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState<Song>(SONGS[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [favourites, setFavourites] = useState<Set<number>>(new Set());

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load favourites
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAV_KEY);
      if (raw) {
        setFavourites(new Set(JSON.parse(raw)));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save favourites
  useEffect(() => {
    try {
      window.localStorage.setItem(
        FAV_KEY,
        JSON.stringify(Array.from(favourites))
      );
    } catch {
      // ignore
    }
  }, [favourites]);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audioRef.current = audio;

    const updateProgress = () => {
      if (!audio.duration || !Number.isFinite(audio.duration)) {
        setProgress(0);
        return;
      }

      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setPlaying(false);
      setProgress(100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  // Load current song whenever current changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();

    if (current.audio) {
      audio.src = current.audio;
      audio.load();
    } else {
      audio.removeAttribute("src");
      audio.load();
    }

    setProgress(0);
  }, [current]);

  const play = async (song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrent(song);
    setProgress(0);

    if (!song.audio) {
      setPlaying(false);
      return;
    }

    audio.src = song.audio;
    audio.currentTime = 0;

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
      setPlaying(false);
    }
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !current.audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleFav = (rank: number) => {
    setFavourites((prev) => {
      const next = new Set(prev);

      if (next.has(rank)) {
        next.delete(rank);
      } else {
        next.add(rank);
      }

      return next;
    });
  };

  const isFav = (rank: number) => favourites.has(rank);

  return (
    <PlayerContext.Provider
      value={{
        current,
        playing,
        progress,
        favourites,
        play,
        toggle,
        toggleFav,
        isFav,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);

  if (!ctx) {
    throw new Error(
      "usePlayer must be used within PlayerProvider"
    );
  }

  return ctx;
}
