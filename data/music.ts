// ─────────────────────────────────────────────────────────
// GIMKHANA — central music dataset
// Replace/extend this file with real licensed track data.
// `audio` and `cover` are left null/placeholder until the
// administrator supplies real, permitted files or links.
// ─────────────────────────────────────────────────────────

export type Category =
  | "dambel"
  | "attitude"
  | "dilse"
  | "night"
  | "nostalgia"
  | "friendship"
  | "throwback";

export interface CategoryMeta {
  id: Category;
  name: string;
  tag: string;
  color: string; // accent hex
}

export interface Song {
  rank: number;
  title: string;
  artist: string;
  year: number;
  category: Category;
  duration: string; // "mm:ss"
  cover: string | null; // path to artwork, null = generated placeholder
  audio: string | null; // path/url to permitted audio, null = demo silence
}

export const CATEGORIES: CategoryMeta[] = [
  { id: "dambel", name: "Dambel Mode", tag: "High-voltage party anthems", color: "#C1442A" },
  { id: "attitude", name: "Attitude Mode", tag: "Swag & unstoppable confidence", color: "#D8A248" },
  { id: "dilse", name: "Dil Se", tag: "Romantic, unfiltered feels", color: "#8C2E1C" },
  { id: "night", name: "GIM Night", tag: "After-dark, low-light energy", color: "#2C4A66" },
  { id: "nostalgia", name: "Nostalgia", tag: "Instant time-machine tracks", color: "#3F5D3A" },
  { id: "friendship", name: "Friendship", tag: "Corridor anthems, forever gang", color: "#E4623F" },
  { id: "throwback", name: "Throwback", tag: "Certified 2000s classics", color: "#9C6B3E" },
];

const ARTISTS = [
  "Rehan Qadri", "Meher Vaz", "The Corridor Boys", "Nyra & Kabir", "DJ Dambel",
  "Ashiyana", "Kavi Sen", "Tanmay Rathi feat. Zoe", "Hostel No.4",
  "The Backbench Project", "Ira Kohli", "Sanam Fiza", "Arka Deep",
  "The Gimkhana All-Stars", "Ruhi Malhotra",
];

const TITLE_BANK: Record<Category, string[]> = {
  dambel: ["Dambel Bhaari", "Beast Mode", "Iron Anthem", "Push Harder", "Full Throttle", "Adrenaline"],
  attitude: ["Attitude Jaari", "No Cap", "Swag Setting", "Unbothered", "Main Hoon", "Level Up"],
  dilse: ["Dil Se Bolo", "Tere Bina", "Chandni Raat", "Rooh", "Kho Gaye", "Iss Pal"],
  night: ["Midnight Gully", "Neon Nights", "Bass Drop", "After Hours", "Roshni", "Raat Baaki"],
  nostalgia: ["Purani Yaadein", "Woh Din", "Rewind", "Corridor Echoes", "Batch of Gold", "Snapshots"],
  friendship: ["Yaari Hai", "Squad Anthem", "Forever Batch", "Dosti Zindabad", "Together We Rise", "Class of GIM"],
  throwback: ["Old School Groove", "2000s Vibe", "Classic Chalo", "Retro Reels", "Campus Cassette", "Vintage Beat"],
};

const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

function buildSongs(): Song[] {
  return Array.from({ length: 100 }, (_, idx) => {
    const rank = idx + 1;
    const year = 2000 + (idx % 26);
    const category = CATEGORY_IDS[idx % CATEGORY_IDS.length];
    const artist = ARTISTS[idx % ARTISTS.length];
    const bank = TITLE_BANK[category];
    const title = bank[idx % bank.length] + (idx % 7 === 0 ? " (Reprise)" : "");
    const mins = 2 + (idx % 3);
    const secs = (idx * 7) % 60;
    return {
      rank,
      title,
      artist,
      year,
      category,
      duration: `${mins}:${secs.toString().padStart(2, "0")}`,
      cover: null,
      audio: audio: rank === 1 ? "/naseeb.mp3" : null,
    };
  });
}

export const SONGS: Song[] = buildSongs();

export const YEARS = Array.from({ length: 26 }, (_, i) => 2000 + i);

export function categoryMeta(id: Category): CategoryMeta {
  return CATEGORIES.find((c) => c.id === id)!;
}

export function songsByYear(year: number): Song[] {
  return SONGS.filter((s) => s.year === year);
}

export function songsByCategory(id: Category): Song[] {
  return SONGS.filter((s) => s.category === id);
}

export function searchSongs(query: string): Song[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SONGS.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      String(s.year).includes(q) ||
      categoryMeta(s.category).name.toLowerCase().includes(q)
  );
}
