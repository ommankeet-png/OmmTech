/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "void" replaces navy — the deep-space base
        void: {
          950: '#050810',
          900: '#0b1220',
          800: '#101a30',
          700: '#182647',
        },
        // "signal" (cyan) replaces gold — primary HUD accent
        signal: {
          300: '#9df9ff',
          400: '#7ef8ff',
          500: '#4CF3FF',
          600: '#22c3d6',
        },
        // "pulse" (violet) — secondary accent, used sparingly
        pulse: {
          300: '#d9c9ff',
          400: '#c9b3ff',
          500: '#9C6BFF',
          600: '#7c4fe0',
        },
        // "frost" replaces cream — light text on dark surfaces
        frost: {
          50: '#E7F1FF',
          100: '#cfdcf2',
        },
        // "haze" replaces ink — muted text / hairlines
        haze: {
          900: '#0d1424',
          600: '#7C8BAE',
        },
      },
      fontFamily: {
        // Brand font is "Extocy 30" (a.k.a. Ecstasy) — commercial/blackletter, not
        // web-embeddable and not actually sci-fi. Orbitron stands in as the closest
        // free, genuinely futuristic display face until/unless a licensed file is supplied.
        display: ['Orbitron', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
}
