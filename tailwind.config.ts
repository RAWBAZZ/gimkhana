import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF3E7",
        clay: "#C1442A",
        clayDeep: "#8C2E1C",
        brick: "#E4623F",
        ink: "#241A14",
        sand: "#E9D9BE",
        leaf: "#3F5D3A",
        dusk: "#2C4A66",
        gold: "#D8A248",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        deva: ["'Baloo 2'", "cursive"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        pill: "0 12px 30px rgba(36,26,20,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
