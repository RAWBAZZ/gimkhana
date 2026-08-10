import Link from "next/link";
import { CATEGORIES } from "@/data/music";

export default function MoodCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.id}
          href={`/moods/${cat.id}`}
          className="relative overflow-hidden rounded-2xl p-4 min-h-[110px] flex flex-col justify-end transition-transform hover:-translate-y-1"
          style={{
            background: `linear-gradient(160deg, ${cat.color}2e, #FBF3E7)`,
            border: `1px solid ${cat.color}44`,
          }}
        >
          <div
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-xl"
            style={{ background: `${cat.color}55` }}
          />
          <div className="relative font-display font-bold text-[15px]">{cat.name}</div>
          <div className="relative text-[11px] text-ink/60 mt-0.5">{cat.tag}</div>
        </Link>
      ))}
    </div>
  );
}
