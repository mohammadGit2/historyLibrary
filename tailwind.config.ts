import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        archive: '#07111f',
        ink: '#10233f',
        parchment: '#f3ead7',
        vellum: '#fff8e8',
        gold: '#d7a94b',
        copper: '#a9693d'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        urdu: ['var(--font-urdu)', 'Noto Nastaliq Urdu', 'serif']
      },
      boxShadow: {
        glow: '0 0 80px rgba(215, 169, 75, 0.18)'
      }
    }
  },
  plugins: []
};
export default config;
