"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [online, setOnline] = useState(31);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase());
    };
    update();
    const t = setInterval(update, 30000);
    const wobble = setInterval(() => setOnline((o) => Math.max(8, o + (Math.random() > 0.5 ? 1 : -1))), 8000);
    return () => {
      clearInterval(t);
      clearInterval(wobble);
    };
  }, []);

  return (
    <div className="hidden md:flex items-center justify-between px-6 py-2 text-[12px] text-ink/70 font-medium">
      <span>{time}</span>
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" /> {online} online
      </span>
    </div>
  );
}
