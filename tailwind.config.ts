import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary (teal) ────────────────────────────────────────
        primary: {
          DEFAULT: '#16B0A6',
          50:  '#E6F7F6',
          100: '#C2EAE8',
          200: '#85D5D0',
          300: '#48C0B9',
          400: '#27B8B0',
          500: '#16B0A6',
          600: '#128F87',
          700: '#0D6E68',
          800: '#094D49',
          900: '#042C2A',
        },
        // ── Secondary (coral) ─────────────────────────────────────
        secondary: {
          DEFAULT: '#FF7A59',
          50:  '#FFF0EC',
          100: '#FFD8CE',
          200: '#FFB19D',
          300: '#FF8A6B',
          400: '#FF7A59',
          500: '#FF6040',
          600: '#E04027',
          700: '#BA2C18',
          800: '#8F1B0E',
          900: '#640F07',
        },
        // ── Tertiary (warm orange) ────────────────────────────────
        tertiary: {
          DEFAULT: '#E7835A',
          light:   '#F0A887',
          dark:    '#C45F38',
        },
        // ── Semantic surface tokens ───────────────────────────────
        background: '#0F172A',
        surface: {
          DEFAULT:  '#1A2436',
          elevated: '#243447',
        },
        // ── Text tokens ───────────────────────────────────────────
        text: '#F8FAFC',
        muted: {
          DEFAULT: '#64748B',
          light:   '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary':    '0 0 28px rgba(22, 176, 166, 0.60)',
        'glow-primary-sm': '0 0 16px rgba(22, 176, 166, 0.45)',
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(22,176,166,0.5)' },
          '50%':      { boxShadow: '0 0 36px rgba(22,176,166,0.85)' },
        },
      },
      animation: {
        'glow-pulse': 'pulse_glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
