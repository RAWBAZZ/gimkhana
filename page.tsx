"use client";

import { SONGS } from "@/data/music";
import SongRow from "@/components/SongRow";
import { usePlayer } from "@/lib/player-context";

export default function FavouritesPage() {
  const { favourites } = usePlayer();
  const favSongs = SONGS.filter((s) => favourites.has(s.rank));

  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
    <div className="surface rounded-3xl p-5 md:p-7 text-ink">
      <div className="text-[11px] text-clay font-bold tracking-[1.5px] mb-1">PERSONAL</div>
      <div className="font-display font-bold text-[24px]">My GIMKHANA</div>
      <div className="text-ink/60 text-[13px] mt-0.5 mb-5">
        {favSongs.length} favourite track{favSongs.length === 1 ? "" : "s"}
      </div>

      {favSongs.length === 0 && (
        <div className="text-ink/40 text-[13px] text-center py-14">
          Tap the heart on any track to save it here.
        </div>
      )}

      <div className="space-y-0.5 pb-2">
        {favSongs.map((s) => (
          <SongRow key={s.rank} song={s} rank={s.rank} />
        ))}
      </div>
    </div>
    </div>
  );
}
