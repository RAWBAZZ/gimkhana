 # GIMKHANA — Dambel Bhaari, Attitude Jaari

A nostalgic GIM music web app: Top 100 chart, 25-year timeline (2000–2025), mood-based
browsing, a persistent player, search, favourites, and Surprise Me — built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Visual direction

The UI follows a warm, hand-illustrated "campus street" aesthetic (flat-vector
illustration, terracotta/clay palette, a floating glass player pill, and a minimal
top status bar) instead of a dark neon dashboard look. The hero illustration
(`/public/svg/hero-workout.svg`) is an original SVG scene — GIM students working out
with dumbbells outside the hostel gym — done in that style as a placeholder. Swap it
for a commissioned/AI-generated raster illustration in the same style whenever ready;
just drop the file into `/public` and point `components/Hero.tsx` at it.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
/app                  Route pages (App Router)
  /top-100             Top 100 chart with filters/sort
  /years, /years/[year] Timeline + per-year pages
  /moods, /moods/[mood] Mood category pages
  /favourites           Saved tracks (persisted to localStorage)
/components            Reusable UI (Hero, SongRow, MusicPlayer, Navigation, ...)
/data/music.ts         ⭐ Central song database — edit this to update the Top 100
/lib/player-context.tsx Global player state (current track, play/pause, favourites)
/public/svg             Hero illustration and other art assets
/styles/globals.css     Theme tokens, fonts, grain overlay, animations
```

## Updating the music dataset

Everything lives in `data/music.ts`. Each song is:

```ts
{
  rank: 1,
  title: "Song Name",
  artist: "Artist Name",
  year: 2005,
  category: "nostalgia",
  duration: "04:32",
  cover: "/covers/song-01.jpg",  // or null for generated placeholder art
  audio: "/audio/song-01.mp3",   // or null — see copyright note below
}
```

The file currently ships with 100 generated placeholder tracks spanning 2000–2025 so
every page has real content to browse. Replace the `SONGS` array (or the generator
that builds it) with your licensed/administrator-approved track list.

**Copyright note:** no copyrighted audio is bundled. Only add `audio` URLs/files you
have the rights to use — licensed audio, your own recordings, royalty-free tracks, or
permitted streaming links (YouTube/Spotify/Apple Music). Leave `audio: null` for
tracks without approved audio yet; the player UI is already wired to handle it.

## Favourites

Favourites persist client-side via `localStorage` (see `lib/player-context.tsx`).
No backend is required for v1.

## Deploying to Vercel

```bash
npx vercel
```

or connect the repo in the Vercel dashboard — zero config needed, it's a stock
Next.js App Router project.
