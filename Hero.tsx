"use client";

import Link from "next/link";
import { usePlayer } from "@/lib/player-context";

export default function Hero() {
  const { toggle, playing } = usePlayer();

  return (
    <div className="relative h-[62vh] md:h-[78vh] min-h-[420px] flex flex-col justify-end px-6 pb-10 md:px-12 md:pb-14">
      {/* Background image + title are baked into the site-wide background art (StatusBar/Nav sit above it). */}
      <div className="flex gap-3">
        <button
          onClick={() => !playing && toggle()}
          className="px-6 py-3 rounded-full font-bold text-[13px] text-paper shadow-pill"
          style={{ background: "linear-gradient(135deg,#C1442A,#D8A248)" }}
        >
          ENTER GIMKHANA
        </button>
        <Link
          href="/top-100"
          className="px-6 py-3 rounded-full font-bold text-[13px] text-paper border border-paper/40 bg-ink/25 backdrop-blur"
        >
          EXPLORE TOP 100
        </Link>
      </div>
      <p className="text-paper/85 text-[13px] md:text-[14.5px] mt-4 max-w-sm drop-shadow">
        The ultimate GIM music time machine — from 2000 to 2025.
      </p>
    </div>
  );
}
