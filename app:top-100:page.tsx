"use client";

import { useMemo, useState } from "react";
import { SONGS } from "@/data/music";
import SongRow from "@/components/SongRow";

const FILTERS = ["ALL", "2000s", "2010s", "2020s"] as const;
const SORTS = ["Rank", "Year", "Artist", "A-Z"] as const;

export default function Top100Page() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Rank");

  const songs = useMemo(() => {
    let list = [...SONGS];
    if (filter === "2000s") list = list.filter((s) => s.year < 2010);
    if (filter === "2010s") list = list.filter((s) => s.year >= 2010 && s.year < 2020);
    if (filter === "2020s") list = list.filter((s) => s.year >= 2020);
    if (sort === "Year") list.sort((a, b) => a.year - b.year);
    if (sort === "Artist") list.sort((a, b) => a.artist.localeCompare(b.artist));
    if (sort === "A-Z") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Rank") list.sort((a, b) => a.rank - b.rank);
    return list;
  }, [filter, sort]);

  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
    <div className="surface rounded-3xl p-5 md:p-7 text-ink">
      <div className="text-[11px] text-clay font-bold tracking-[1.5px] mb-1">THE 100</div>
      <div className="font-display font-bold text-[24px]">GIM TOP 100</div>
      <div className="text-ink/60 text-[13px] mt-0.5 mb-4">The songs that defined the GIM vibe.</div>

      <div className="flex gap-2 mb-2.5 overflow-x-auto">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-bold border ${
              filter === f ? "text-paper border-transparent" : "border-ink/15 text-ink/70"
            }`}
            style={filter === f ? { background: "linear-gradient(135deg,#C1442A,#D8A248)" } : {}}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex gap-1 mb-4 overflow-x-auto">
        {SORTS.map((s) => (
          <button
            key={s}
            onClick={() => setSort(s)}
            className={`flex-shrink-0 px-3 py-1 rounded-lg text-[11.5px] font-bold ${
              sort === s ? "bg-clay/15 text-ink" : "text-ink/50"
            }`}
          >
            Sort: {s}
          </button>
        ))}
      </div>

      <div className="space-y-0.5 pb-2">
        {songs.map((s) => (
          <SongRow key={s.rank} song={s} rank={s.rank} />
        ))}
      </div>
    </div>
    </div>
  );
}
