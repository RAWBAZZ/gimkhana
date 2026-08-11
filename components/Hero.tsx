"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePlayer } from "@/lib/player-context";

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/75zwc1fWU4EKVU2jSzkSAq";

export default function Hero() {
  const { playing } = usePlayer();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUnlocked, setVideoUnlocked] = useState(false);

  // Start video automatically, muted.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    video.play().catch(() => {
      // Browser may require user interaction.
    });
  }, []);

  // Song playing = video silent.
  // No song playing = video sound ON after user has interacted.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.muted = true;
    } else if (videoUnlocked) {
      video.muted = false;
    }
  }, [playing, videoUnlocked]);

  const enterGimkhana = async () => {
    const video = videoRef.current;
    if (!video) return;

    setVideoUnlocked(true);

    video.muted = false;

    try {
      await video.play();
    } catch {
      // Ignore browser playback errors.
    }
  };

  return (
    <div className="relative h-[62vh] md:h-[78vh] min-h-[420px] overflow-hidden flex flex-col justify-end px-6 pb-10 md:px-12 md:pb-14">

      {/* GIMKHANA HOME VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/backgrounds/gimkhana-home.MP4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Bottom cinematic gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(20,12,8,0.72) 0%, rgba(20,12,8,0.18) 48%, rgba(20,12,8,0.05) 100%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10">

        <div className="flex flex-wrap gap-3">

          {/* ENTER GIMKHANA */}
          <button
            onClick={enterGimkhana}
            className="px-6 py-3 rounded-full font-bold text-[13px] text-paper shadow-pill transition-transform active:scale-95"
            style={{
              background:
                "linear-gradient(135deg,#C1442A,#D8A248)",
            }}
          >
            ENTER GIMKHANA
          </button>

          {/* EXPLORE TOP 100 */}
          <Link
            href="/top-100"
            className="px-6 py-3 rounded-full font-bold text-[13px] text-paper border border-paper/40 bg-ink/25 backdrop-blur transition-transform active:scale-95"
          >
            EXPLORE TOP 100
          </Link>

          {/* LISTEN ON SPOTIFY */}
          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-bold text-[13px] text-white shadow-pill transition-transform active:scale-95"
            style={{
              background: "#1DB954",
            }}
          >
            ▶ LISTEN ON SPOTIFY
          </a>

        </div>

        <p className="text-paper/85 text-[13px] md:text-[14.5px] mt-4 max-w-sm drop-shadow">
          The ultimate GIM music time machine — from 2000 to 2025.
        </p>

      </div>
    </div>
  );
}
