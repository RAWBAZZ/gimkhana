import MoodCards from "@/components/MoodCards";

export default function MoodsIndexPage() {
  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
    <div className="surface rounded-3xl p-5 md:p-7 text-ink">
      <div className="text-[11px] text-clay font-bold tracking-[1.5px] mb-1">MOODS</div>
      <div className="font-display font-bold text-[24px] mb-5">Pick Your Vibe</div>
      <MoodCards />
    </div>
    </div>
  );
}
