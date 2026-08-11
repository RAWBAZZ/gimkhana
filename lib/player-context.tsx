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
  next: () => void;
  previous: () => void;

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
  const [favourites, setFavourites] = useState<Set<number>>(
    new Set()
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ---------------------------------------------------------
  // FAVOURITES
  // ---------------------------------------------------------

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAV_KEY);

      if (raw) {
        setFavourites(new Set(JSON.parse(raw)));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FAV_KEY,
        JSON.stringify(Array.from(favourites))
      );
    } catch {
      // Ignore localStorage errors
    }
  }, [favourites]);

  // ---------------------------------------------------------
  // AUDIO ENGINE
  // ---------------------------------------------------------

  useEffect(() => {
    const audio = new Audio();

    audio.preload = "auto";

    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (
        !audio.duration ||
        !Number.isFinite(audio.duration)
      ) {
        setProgress(0);
        return;
      }

      setProgress(
        (audio.currentTime / audio.duration) * 100
      );
    };

    const handleEnded = () => {
      setProgress(100);

      // Automatically move to next track
      const currentIndex = SONGS.findIndex(
        (song) => song.rank === current.rank
      );

      const nextIndex =
        currentIndex >= 0 && currentIndex < SONGS.length - 1
          ? currentIndex + 1
          : 0;

      const nextSong = SONGS[nextIndex];

      setCurrent(nextSong);
      setProgress(0);

      if (nextSong.audio) {
        audio.src = nextSong.audio;

        audio
          .play()
          .then(() => {
            setPlaying(true);
          })
          .catch(() => {
            setPlaying(false);
          });
      } else {
        setPlaying(false);
      }
    };

    audio.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    audio.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
      audio.pause();

      audio.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      audio.removeEventListener(
        "ended",
        handleEnded
      );

      audioRef.current = null;
    };
  }, [current]);

  // ---------------------------------------------------------
  // LOAD CURRENT SONG
  // ---------------------------------------------------------

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    setProgress(0);

    if (current.audio) {
      audio.src = current.audio;
      audio.load();
    } else {
      audio.removeAttribute("src");
      audio.load();
    }
  }, [current]);

  // ---------------------------------------------------------
  // PLAY SONG
  // ---------------------------------------------------------

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
      console.error(
        "GIMKHANA audio playback failed:",
        error
      );

      setPlaying(false);
    }
  };

  // ---------------------------------------------------------
  // PLAY / PAUSE
  // ---------------------------------------------------------

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio || !current.audio) return;

    if (audio.paused) {
      try {
        await audio.play();

        setPlaying(true);
      } catch (error) {
        console.error(
          "GIMKHANA audio playback failed:",
          error
        );
      }
    } else {
      audio.pause();

      setPlaying(false);
    }
  };

  // ---------------------------------------------------------
  // NEXT
  // ---------------------------------------------------------

  const next = () => {
    const currentIndex = SONGS.findIndex(
      (song) => song.rank === current.rank
    );

    const nextIndex =
      currentIndex >= 0 && currentIndex < SONGS.length - 1
        ? currentIndex + 1
        : 0;

    const nextSong = SONGS[nextIndex];

    setCurrent(nextSong);
    setProgress(0);

    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    if (!nextSong.audio) {
      setPlaying(false);
      audio.removeAttribute("src");
      audio.load();
      return;
    }

    audio.src = nextSong.audio;
    audio.currentTime = 0;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  };

  // ---------------------------------------------------------
  // PREVIOUS
  // ---------------------------------------------------------

  const previous = () => {
    const currentIndex = SONGS.findIndex(
      (song) => song.rank === current.rank
    );

    const previousIndex =
      currentIndex > 0
        ? currentIndex - 1
        : SONGS.length - 1;

    const previousSong = SONGS[previousIndex];

    setCurrent(previousSong);
    setProgress(0);

    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    if (!previousSong.audio) {
      setPlaying(false);
      audio.removeAttribute("src");
      audio.load();
      return;
    }

    audio.src = previousSong.audio;
    audio.currentTime = 0;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  };

  // ---------------------------------------------------------
  // FAVOURITES
  // ---------------------------------------------------------

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

  const isFav = (rank: number) =>
    favourites.has(rank);

  // ---------------------------------------------------------
  // PROVIDER
  // ---------------------------------------------------------

  return (
    <PlayerContext.Provider
      value={{
        current,
        playing,
        progress,
        favourites,

        play,
        toggle,
        next,
        previous,

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
