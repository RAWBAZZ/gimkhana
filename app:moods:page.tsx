import { CATEGORIES, songsByCategory, categoryMeta } from "@/data/music";
import SongRow from "@/components/SongRow";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ mood: c.id }));
}

export default function MoodPage({ params }: { params: { mood: string } }) {
  const cat = CATEGORIES.find((c) => c.id === params.mood);
  if (!cat) notFound();

  const songs = songsByCategory(cat.id);

  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
    <div className="surface rounded-3xl p-5 md:p-7 text-ink">
      <div className="rounded-2xl p-5 mb-5" style={{ background: `linear-gradient(150deg, ${cat.color}2e, #FBF3E7)`, border: `1px solid ${cat.color}44` }}>
        <div className="font-display font-bold text-[22px]">{cat.name}</div>
        <div className="text-ink/60 text-[13px] mt-0.5">{cat.tag}</div>
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
