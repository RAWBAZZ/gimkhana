import type { Metadata } from "next";
import "@/styles/globals.css";
import { PlayerProvider } from "@/lib/player-context";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import StatusBar from "@/components/StatusBar";

export const metadata: Metadata = {
  title: "GIMKHANA — Dambel Bhaari, Attitude Jaari",
  description: "The ultimate GIM music time machine — from 2000 to 2025. 100 songs, 25 years, one GIM vibe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain min-h-screen text-paper pb-40 md:pb-28">
        <div className="site-bg" />
        <PlayerProvider>
          <div className="relative z-10">
            <StatusBar />
            <Navigation />
            <main className="max-w-5xl mx-auto">{children}</main>
            <MusicPlayer />
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
