import Link from "next/link";
import { YEARS, songsByYear } from "@/data/music";

export default function YearsIndexPage() {
  return (
    <div className="px-5 md:px-8 pt-6 pb-6">
      <div className="surface rounded-3xl p-5 md:p-7 text-ink">

        <div className="text-[11px] text-clay font-bold tracking-[1.5px] mb-1">
          TIME MACHINE
        </div>

        <div className="font-display font-bold text-[24px]">
          The GIM Music Timeline
        </div>

        <div className="text-ink/60 text-[13px] mt-0.5 mb-5">
          Every year had a soundtrack.
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {YEARS.map((y) => (
            <Link
              key={y}
              href={`/years/${y}`}
              className="rounded-2xl border border-ink/10 bg-ink/[0.03] p-4 text-center hover:-translate-y-0.5 transition-transform"
            >
              <div className="font-display font-bold text-[20px]">
                {y}
              </div>

              <div className="text-[11px] text-ink/50 mt-0.5">
                {songsByYear(y).length} tracks
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
