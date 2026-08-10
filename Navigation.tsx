"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ListMusic, Calendar, Heart, Search } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/top-100", label: "Top 100", icon: ListMusic },
  { href: "/years", label: "Years", icon: Calendar },
  { href: "/moods", label: "Moods", icon: ListMusic },
  { href: "/favourites", label: "Favourites", icon: Heart },
];

export default function Navigation() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-20 status-pill border-b border-ink/5">
        <div className="flex items-center justify-between px-5 py-3 max-w-5xl mx-auto">
          <Link href="/">
            <div className="font-deva font-bold text-[20px] tracking-wide">
              GIM<span className="text-clay">KHANA</span>
            </div>
            <div className="text-[9px] tracking-[2px] text-ink/50 -mt-0.5">DAMBEL BHAARI, ATTITUDE JAARI</div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[13px] font-bold ${pathname === href ? "text-clay" : "text-ink/60"}`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setSearchOpen(true)}
            className="w-9 h-9 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 status-pill border-t border-ink/5 flex justify-around py-2">
        {LINKS.filter((l) => l.href !== "/moods").map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex flex-col items-center gap-1 px-2">
            <Icon size={19} color={pathname === href ? "#C1442A" : "#241A1499"} />
            <span className="text-[9.5px] font-bold" style={{ color: pathname === href ? "#C1442A" : "#241A1499" }}>
              {label}
            </span>
          </Link>
        ))}
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
