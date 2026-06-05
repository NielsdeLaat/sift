import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary (blue) ───────────────────────────────────────────
        primary: {
          DEFAULT: "#5B9DF6",
          light: "#7DC1F5",
          lighter: "#A9D3F7",
        },
        // ── Accent ───────────────────────────────────────────────────
        accent: {
          DEFAULT: "#FFA600",
          green: "#3FBE7C",
          red: "#F0605F",
        },
        // ── Neutral (dark backgrounds) ───────────────────────────────
        neutral: {
          base: "#0C1622",
          light: "#16263D",
          border: "#1F3350",
        },
        // ── Contrast (light text / surfaces) ─────────────────────────
        contrast: {
          DEFAULT: "#E8EEF5",
          dark: "#D9D9D9",
          blue: "#C4E2FE",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        "glow-primary": "0 0 28px rgba(91, 157, 246, 0.60)",
        "glow-primary-sm": "0 0 16px rgba(91, 157, 246, 0.45)",
      },
      keyframes: {
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(91,157,246,0.5)" },
          "50%": { boxShadow: "0 0 36px rgba(91,157,246,0.85)" },
        },
      },
      animation: {
        "glow-pulse": "pulse_glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
