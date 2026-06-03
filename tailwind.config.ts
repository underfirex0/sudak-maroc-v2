import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C82128',
          dark: '#A31A1F',
          light: '#E0343B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          1: '#111111',
          2: '#1A1A1A',
          3: '#242424',
          4: '#2E2E2E',
          5: '#3A3A3A',
        },
        cream: {
          DEFAULT: '#F2EDE8',
          muted: '#A8A4A0',
          faint: '#6A6460',
        },
        gold: '#C49A5E',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'Impact', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultrawide: '0.25em',
        mega: '0.4em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.21, 0.47, 0.32, 0.98)',
      },
    },
  },
  plugins: [],
}

export default config
