import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SONGS, CATEGORIES, YEARS, songsByCategory } from "@/data/music";
import Hero from "@/components/Hero";
import SongRow from "@/components/SongRow";
import MoodCards from "@/components/MoodCards";
import SurpriseMe from "@/components/SurpriseMe";

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-3.5">
      {eyebrow && <div className="text-[11px] text-clay font-bold tracking-[1.5px] mb-1">{eyebrow}</div>}
      <div className="font-display font-bold text-[22px]">{title}</div>
      {sub && <div className="text-ink/60 text-[13px] mt-0.5">{sub}</div>}
    </div>
  );
}

export default function HomePage() {
  const top10 = SONGS.slice(0, 10);
  const featuredMoods = CATEGORIES.slice(0, 3);

  return (
    <div>
      <Hero />

      <div className="px-5 md:px-8 -mt-10 md:-mt-16 relative z-10 pb-6">
        <div className="surface rounded-3xl p-5 md:p-7 text-ink">
          <div className="flex items-end justify-between">
            <SectionHeader eyebrow="THE CHART" title="GIM TOP 100" sub="100 songs. 25 years. One GIM vibe." />
            <Link href="/top-100" className="text-clay text-[12.5px] font-bold flex items-center shrink-0">
              See all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-0.5">
            {top10.map((s) => (
              <SongRow key={s.rank} song={s} rank={s.rank} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 pb-6">
        <div className="surface rounded-3xl p-5 md:p-7 text-ink">
          <SectionHeader eyebrow="TIME MACHINE" title="Explore by Year" sub="Every year had a soundtrack." />
          <div className="flex gap-2 overflow-x-auto pb-1">
            {YEARS.map((y) => (
              <Link
                key={y}
                href={`/years/${y}`}
                className="flex-shrink-0 px-4 py-2 rounded-full bg-ink/5 border border-ink/10 text-[13px] font-bold"
              >
                {y}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {featuredMoods.map((cat) => (
        <div key={cat.id} className="px-5 md:px-8 pb-6">
          <div className="surface rounded-3xl p-5 md:p-7 text-ink">
            <SectionHeader title={cat.name} sub={cat.tag} />
            <div className="flex gap-3 overflow-x-auto pb-1">
              {songsByCategory(cat.id).slice(0, 6).map((s) => (
                <Link key={s.rank} href="/top-100" className="flex-shrink-0 w-[120px]">
                  <div
                    className="w-[120px] h-[120px] rounded-2xl flex items-center justify-center font-display font-bold text-lg"
                    style={{ background: `linear-gradient(150deg, ${cat.color}44, #FBF3E7)`, border: `1px solid ${cat.color}55` }}
                  >
                    #{s.rank}
                  </div>
                  <div className="text-[12.5px] font-bold mt-1.5 truncate">{s.title}</div>
                  <div className="text-[11px] text-ink/60 truncate">{s.artist}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="px-5 md:px-8 pb-6">
        <div className="surface rounded-3xl p-5 md:p-7 text-ink">
          <SectionHeader eyebrow="MOODS" title="Pick Your Vibe" />
          <MoodCards />
        </div>
      </div>

      <div className="px-5 md:px-8 pb-10">
        <SurpriseMe />
      </div>

      <div className="text-center text-paper/60 text-[11px] pb-6">
        GIMKHANA · Fan-made nostalgia project · Demo audio placeholders
      </div>
    </div>
  );
}
