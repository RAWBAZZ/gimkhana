import { YEARS, songsByYear, categoryMeta } from "@/data/music";
import SongRow from "@/components/SongRow";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return YEARS.map((y) => ({ year: String(y) }));
}

export default function YearPage({ params }: { params: { year: string } }) {
  const year = Number(params.year);
  if (!YEARS.includes(year)) notFound();

  const songs = songsByYear(year);
  const genreCounts: Record<string, number> = {};
  songs.forEach((s) => {
    genreCounts[s.category] = (genreCounts[s.category] || 0) + 1;
  });

  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
    <div className="surface rounded-3xl p-5 md:p-7 text-ink">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {YEARS.map((y) => (
          <Link
            key={y}
            href={`/years/${y}`}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-bold border ${
              y === year ? "text-paper border-transparent" : "border-ink/10 bg-ink/5"
            }`}
            style={y === year ? { background: "linear-gradient(135deg,#C1442A,#D8A248)" } : {}}
          >
            {y}
          </Link>
        ))}
      </div>

      <div className="font-display font-bold text-[20px]">GIM MUSIC — {year}</div>
      <div className="text-ink/60 text-[12.5px] mb-3">{songs.length} tracks from this era</div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {Object.entries(genreCounts).map(([cat, count]) => (
          <span key={cat} className="text-[11px] px-2.5 py-1 rounded-full bg-ink/5 border border-ink/10 font-bold">
            {categoryMeta(cat as any).name} · {count}
          </span>
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
