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
      {/* TOP HEADER */}
      <div className="sticky top-0 z-20 status-pill border-b border-ink/5">
        <div className="flex items-center justify-between px-5 py-3.5 max-w-5xl mx-auto">

          {/* GIMKHANA BRAND */}
          <Link href="/" className="block">
            <div className="font-display font-bold text-[27px] leading-[0.9] tracking-[0.5px] text-ink">
              GIM
              <span className="text-clay italic ml-[1px]">
                KHANA
              </span>
            </div>

            <div className="text-[9px] font-medium tracking-[2.4px] text-ink/55 mt-1">
              DAMBEL BHAARI, ATTITUDE JAARI
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[13px] font-bold ${
                  pathname === href
                    ? "text-clay"
                    : "text-ink/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* SEARCH */}
          <button
            onClick={() => setSearchOpen(true)}
            className="w-10 h-10 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center backdrop-blur-sm"
            aria-label="Search"
          >
            <Search size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 status-pill border-t border-ink/5 flex justify-around py-2">
        {LINKS.filter((l) => l.href !== "/moods").map(
          ({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-2"
            >
              <Icon
                size={19}
                color={
                  pathname === href
                    ? "#C1442A"
                    : "#241A1499"
                }
              />

              <span
                className="text-[9.5px] font-bold"
                style={{
                  color:
                    pathname === href
                      ? "#C1442A"
                      : "#241A1499",
                }}
              >
                {label}
              </span>
            </Link>
          )
        )}
      </div>

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
        />
      )}
    </>
  );
}
