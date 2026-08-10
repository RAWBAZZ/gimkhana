"use client";

import { useMemo, useState } from "react";
import { X, Search } from "lucide-react";
import { searchSongs } from "@/data/music";
import SongRow from "./SongRow";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSongs(query).slice(0, 20), [query]);

  return (
    <div className="fixed inset-0 z-50 bg-paper flex flex-col animate-in">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-ink/10">
        <Search size={18} className="text-ink/50" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search song, artist, year, mood..."
          className="flex-1 bg-transparent outline-none text-[15px] font-medium placeholder:text-ink/40"
        />
        <button onClick={onClose} aria-label="Close search">
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 max-w-2xl w-full mx-auto">
        {query.trim() === "" && <p className="text-ink/40 text-[13px] p-3">Try "2005", "attitude", or an artist name.</p>}
        {results.map((s) => (
          <SongRow key={s.rank} song={s} rank={s.rank} />
        ))}
        {query.trim() && results.length === 0 && <p className="text-ink/40 text-[13px] p-3">No tracks found.</p>}
      </div>
    </div>
  );
}
