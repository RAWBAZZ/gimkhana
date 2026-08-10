import { Song, categoryMeta } from "@/data/music";

export default function Cover({ song, size = 48, rank }: { song: Song; size?: number; rank?: number }) {
  const c = categoryMeta(song.category).color;
  return (
    <div
      className="relative flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(150deg, ${c}33, #FBF3E7)`,
        border: `1px solid ${c}55`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 30% 20%, ${c}55, transparent 65%)` }}
      />
      <span
        className="relative font-display font-bold z-10"
        style={{ color: "#241A14", fontSize: size * 0.26, opacity: 0.85 }}
      >
        {rank ? `#${rank}` : song.artist[0]}
      </span>
    </div>
  );
}
