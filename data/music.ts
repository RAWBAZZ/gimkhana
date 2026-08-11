// ─────────────────────────────────────────────────────────
// GIMKHANA — MASTER MUSIC DATASET
// 4 curated Hindi Bollywood / Hip-Hop tracks per year
// 2000 → 2025 = 104 tracks
//
// Audio files are added separately.
// Currently rank #1 uses the royalty-free test file.
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
  color: string;
}

export interface Song {
  rank: number;
  title: string;
  artist: string;
  year: number;
  category: Category;
  duration: string;
  cover: string | null;
  audio: string | null;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "dambel",
    name: "Dambel Mode",
    tag: "High-voltage party anthems",
    color: "#C1442A",
  },
  {
    id: "attitude",
    name: "Attitude Mode",
    tag: "Swag & unstoppable confidence",
    color: "#D8A248",
  },
  {
    id: "dilse",
    name: "Dil Se",
    tag: "Romantic, unfiltered feels",
    color: "#8C2E1C",
  },
  {
    id: "night",
    name: "GIM Night",
    tag: "After-dark, low-light energy",
    color: "#2C4A66",
  },
  {
    id: "nostalgia",
    name: "Nostalgia",
    tag: "Instant time-machine tracks",
    color: "#3F5D3A",
  },
  {
    id: "friendship",
    name: "Friendship",
    tag: "Corridor anthems, forever gang",
    color: "#E4623F",
  },
  {
    id: "throwback",
    name: "Throwback",
    tag: "Certified classics",
    color: "#9C6B3E",
  },
];

type TrackData = [
  string,
  string,
  number,
  Category
];

const TRACKS: TrackData[] = [

  // ───────────── 2000 ─────────────
  ["Kaho Naa... Pyaar Hai", "Udit Narayan, Alka Yagnik", 2000, "dilse"],
  ["Ek Pal Ka Jeena", "Lucky Ali", 2000, "attitude"],
  ["Aankhon Se Tune Kya Keh Diya", "Kumar Sanu, Alka Yagnik", 2000, "dilse"],
  ["Dil Ne Yeh Kaha Hai Dil Se", "Sonu Nigam, Alka Yagnik, Kumar Sanu", 2000, "dilse"],

  // ───────────── 2001 ─────────────
  ["Koi Kahe Kehta Rahe", "Shankar Mahadevan, Shaan, KK", 2001, "friendship"],
  ["Suraj Hua Maddham", "Sonu Nigam, Alka Yagnik", 2001, "dilse"],
  ["Bole Chudiyan", "Various Artists", 2001, "nostalgia"],
  ["Mitwa", "Udit Narayan, Alka Yagnik, Sukhwinder Singh, Srinivas", 2001, "friendship"],

  // ───────────── 2002 ─────────────
  ["Saathiya", "Sonu Nigam", 2002, "dilse"],
  ["Chhalka Chhalka Re", "Richa Sharma, Mahalaxmi Iyer, Vaishali Samant, Shoma", 2002, "dilse"],
  ["Woh Ladki Hai Kahan", "Shaan, Kavita Krishnamurti", 2002, "attitude"],
  ["Mere Yaar Ki Shaadi Hai", "Udit Narayan, Sonu Nigam, Alka Yagnik", 2002, "friendship"],

  // ───────────── 2003 ─────────────
  ["Kal Ho Naa Ho", "Sonu Nigam", 2003, "nostalgia"],
  ["It's the Time to Disco", "Vasundhara Das, KK, Shaan, Loy Mendonsa", 2003, "dambel"],
  ["Maahi Ve", "Sadhana Sargam, Sujata Bhattacharya, Sonu Nigam, Udit Narayan, Shankar Mahadevan", 2003, "friendship"],
  ["Koi Mil Gaya", "Kunal Ganjawala", 2003, "dambel"],

  // ───────────── 2004 ─────────────
  ["Main Hoon Na", "Sonu Nigam, Shreya Ghoshal", 2004, "friendship"],
  ["Tumse Milke Dil Ka", "Sonu Nigam, Aftab Sabri, Hashim Sabri", 2004, "dilse"],
  ["Dhoom Machale", "Sunidhi Chauhan", 2004, "dambel"],
  ["Hum Tum", "Alka Yagnik, Babul Supriyo", 2004, "dilse"],

  // ───────────── 2005 ─────────────
  ["Dus Bahane", "KK, Shaan", 2005, "attitude"],
  ["Aashiq Banaya Aapne", "Himesh Reshammiya", 2005, "dilse"],
  ["Right Here Right Now", "Abhishek Bachchan", 2005, "attitude"],
  ["Just Chill", "Sonu Nigam, Jayesh Gandhi, Amrita Kak", 2005, "dambel"],

  // ───────────── 2006 ─────────────
  ["Kajra Re", "Alisha Chinai, Shankar Mahadevan, Javed Ali", 2006, "dambel"],
  ["Beedi", "Sukhwinder Singh, Sunidhi Chauhan", 2006, "dambel"],
  ["Aaj Ki Raat", "Alisha Chinai, Mahalakshmi Iyer, Sonu Nigam", 2006, "night"],
  ["Chand Sifarish", "Shaan, Kailash Kher", 2006, "dilse"],

  // ───────────── 2007 ─────────────
  ["Mauja Hi Mauja", "Mika Singh", 2007, "dambel"],
  ["Dard-e-Disco", "Sukhwinder Singh", 2007, "attitude"],
  ["Aankhon Mein Teri", "KK", 2007, "dilse"],
  ["Tum Se Hi", "Mohit Chauhan", 2007, "dilse"],

  // ───────────── 2008 ─────────────
  ["Pehli Nazar Mein", "Atif Aslam", 2008, "dilse"],
  ["Khuda Jaane", "KK, Shilpa Rao", 2008, "dilse"],
  ["Zara Zara Touch Me", "Monali Thakur", 2008, "attitude"],
  ["Desi Girl", "Shankar Mahadevan, Sunidhi Chauhan, Vishal Dadlani", 2008, "dambel"],

  // ───────────── 2009 ─────────────
  ["Aahun Aahun", "Neeraj Shridhar, Master Saleem, Suzi Q", 2009, "dambel"],
  ["Masakali", "Mohit Chauhan", 2009, "friendship"],
  ["All Izz Well", "Sonu Nigam, Swanand Kirkire, Shaan", 2009, "friendship"],
  ["Emosanal Atyachar", "Amit Trivedi, Bonnie Chakraborty", 2009, "attitude"],

  // ───────────── 2010 ─────────────
  ["Munni Badnaam Hui", "Mamta Sharma, Aishwarya", 2010, "dambel"],
  ["Sheila Ki Jawani", "Sunidhi Chauhan, Vishal Dadlani", 2010, "attitude"],
  ["Pee Loon", "Mohit Chauhan", 2010, "dilse"],
  ["Tum Jo Aaye", "Rahat Fateh Ali Khan, Tulsi Kumar", 2010, "dilse"],

  // ───────────── 2011 ─────────────
  ["Senorita", "Farhan Akhtar, Hrithik Roshan, Abhay Deol", 2011, "friendship"],
  ["Sadda Haq", "Mohit Chauhan", 2011, "attitude"],
  ["Chammak Challo", "Akon, Hamsika Iyer", 2011, "dambel"],
  ["Ik Junoon (Paint It Red)", "Vishal Dadlani", 2011, "friendship"],

  // ───────────── 2012 ─────────────
  ["Tum Hi Ho Bandhu", "Neeraj Shridhar, Kavita Seth", 2012, "friendship"],
  ["Chikni Chameli", "Shreya Ghoshal", 2012, "dambel"],
  ["Pungi", "Mika Singh, Javed Ali, Amitabh Bhattacharya, Nakash Aziz", 2012, "dambel"],
  ["Radha", "Vishal Dadlani, Shreya Ghoshal, Udit Narayan, Shekhar Ravjiani", 2012, "friendship"],

  // ───────────── 2013 ─────────────
  ["Tum Hi Ho", "Arijit Singh", 2013, "dilse"],
  ["Badtameez Dil", "Benny Dayal, Shefali Alvares", 2013, "attitude"],
  ["Lungi Dance", "Yo Yo Honey Singh", 2013, "dambel"],
  ["Balam Pichkari", "Vishal Dadlani, Shalmali Kholgade", 2013, "friendship"],

  // ───────────── 2014 ─────────────
  ["Galliyan", "Ankit Tiwari", 2014, "dilse"],
  ["Baby Doll", "Kanika Kapoor, Meet Bros Anjjan", 2014, "dambel"],
  ["Abhi Toh Party Shuru Hui Hai", "Badshah, Aastha Gill", 2014, "attitude"],
  ["London Thumakda", "Labh Janjua, Sonu Kakkar, Neha Kakkar", 2014, "friendship"],

  // ───────────── 2015 ─────────────
  ["Chittiyaan Kalaiyaan", "Kanika Kapoor, Meet Bros", 2015, "dambel"],
  ["Sooraj Dooba Hain", "Arijit Singh, Aditi Singh Sharma", 2015, "night"],
  ["Gallan Goodiyaan", "Sukhwinder Singh, Yashita Sharma, Farhan Akhtar, Shankar Mahadevan", 2015, "friendship"],
  ["Prem Ratan Dhan Payo", "Palak Muchhal", 2015, "nostalgia"],

  // ───────────── 2016 ─────────────
  ["Kala Chashma", "Badshah, Neha Kakkar, Indeep Bakshi", 2016, "attitude"],
  ["Kar Gayi Chull", "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", 2016, "dambel"],
  ["Baby Ko Bass Pasand Hai", "Vishal Dadlani, Shalmali Kholgade, Ishita, Badshah", 2016, "dambel"],
  ["Bulleya", "Amit Mishra, Shilpa Rao", 2016, "dilse"],

  // ───────────── 2017 ─────────────
  ["Dil Diyan Gallan", "Atif Aslam", 2017, "dilse"],
  ["Tamma Tamma Again", "Bappi Lahiri, Anuradha Paudwal, Badshah", 2017, "dambel"],
  ["Suit Suit", "Guru Randhawa, Arjun", 2017, "attitude"],
  ["Nazm Nazm", "Arko", 2017, "dilse"],

  // ───────────── 2018 ─────────────
  ["Aankh Marey", "Neha Kakkar, Mika Singh, Kumar Sanu", 2018, "dambel"],
  ["Dil Chori", "Yo Yo Honey Singh, Simar Kaur, Ishers", 2018, "attitude"],
  ["Chogada", "Darshan Raval, Asees Kaur", 2018, "friendship"],
  ["Proper Patola", "Diljit Dosanjh, Badshah, Sunanda Sharma", 2018, "attitude"],

  // ───────────── 2019 ─────────────
  ["Apna Time Aayega", "Ranveer Singh", 2019, "attitude"],
  ["Ghungroo", "Arijit Singh, Shilpa Rao", 2019, "dambel"],
  ["Bekhayali", "Sachet Tandon", 2019, "dilse"],
  ["Tujhe Kitna Chahne Lage", "Arijit Singh", 2019, "dilse"],

  // ───────────── 2020 ─────────────
  ["Garmi", "Badshah, Neha Kakkar", 2020, "dambel"],
  ["Shayad", "Arijit Singh", 2020, "dilse"],
  ["Burj Khalifa", "Shashi, DJ Khushi, Raja Kumari", 2020, "attitude"],
  ["Malang Title Track", "Ved Sharma", 2020, "night"],

  // ───────────── 2021 ─────────────
  ["Raataan Lambiyan", "Jubin Nautiyal, Asees Kaur", 2021, "dilse"],
  ["Param Sundari", "Shreya Ghoshal", 2021, "dambel"],
  ["Jugnu", "Badshah, Nikhita Gandhi", 2021, "attitude"],
  ["Nadiyon Paar", "Shamur, Rashmeet Kaur, IP Singh", 2021, "dambel"],

  // ───────────── 2022 ─────────────
  ["Kesariya", "Arijit Singh", 2022, "dilse"],
  ["The Punjaabban Song", "Tanishk Bagchi, Gippy Grewal, Zahrah S Khan, Romy", 2022, "friendship"],
  ["Thumkeshwari", "Rashmeet Kaur, Ash King, Divya Kumar", 2022, "dambel"],
  ["Jehda Nasha", "Amar Jalal, IP Singh, Yohani, Harjot Kaur", 2022, "attitude"],

  // ───────────── 2023 ─────────────
  ["Jhoome Jo Pathaan", "Arijit Singh, Sukriti Kakar, Vishal Dadlani, Shekhar Ravjiani", 2023, "dambel"],
  ["What Jhumka?", "Arijit Singh, Jonita Gandhi", 2023, "dambel"],
  ["Tere Vaaste", "Varun Jain, Shadab Faridi, Altamash Faridi, Alphons Joseph", 2023, "dilse"],
  ["Chaleya", "Arijit Singh, Shilpa Rao", 2023, "dilse"],

  // ───────────── 2024 ─────────────
  ["Naina", "Diljit Dosanjh, Badshah", 2024, "attitude"],
  ["Tauba Tauba", "Karan Aujla", 2024, "attitude"],
  ["Aaj Ki Raat", "Madhubanti Bagchi, Divya Kumar, Sachin-Jigar", 2024, "dambel"],
  ["Aayi Nai", "Pawan Singh, Simran Choudhary, Divya Kumar, Sachin-Jigar", 2024, "dambel"],

  // ───────────── 2025 ─────────────
  ["Saiyaara", "Faheem Abdullah, Arslan Nizami", 2025, "dilse"],
  ["Bijuria", "Sonu Nigam, Shreya Ghoshal", 2025, "dambel"],
  ["Panwadi", "Arijit Singh, Shashwat Sachdev, Jasmine Sandlas", 2025, "attitude"],
  ["Gehra Hua", "Arijit Singh, Armaan Khan", 2025, "dilse"],
];

// ─────────────────────────────────────────────────────────
// BUILD SONG OBJECTS
// ─────────────────────────────────────────────────────────

export const SONGS: Song[] = TRACKS.map(
  ([title, artist, year, category], index) => ({
    rank: index + 1,
    title,
    artist,
    year,
    category,
    duration: "0:00",
    cover: null,

    // Your currently uploaded royalty-free test track.
    // Later we can attach permitted audio to individual songs.
    audio: index === 0 ? "/naseeb.mp3" : null,
  })
);

// ─────────────────────────────────────────────────────────
// YEARS
// ─────────────────────────────────────────────────────────

export const YEARS = Array.from(
  { length: 26 },
  (_, i) => 2000 + i
);

// ─────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────

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
      categoryMeta(s.category)
        .name
        .toLowerCase()
        .includes(q)
  );
}
