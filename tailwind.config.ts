import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          300: '#93c5fd',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        seconday: {

        },
        ink: {
          900: '#0b1220',
          700: '#1f2937',
          500: '#6b7280',
        },
        bg: '#f7fafc',
        card: '#ffffff', // ⬅️ moved into colors
      },
      borderRadius: {
        lg: '18px',
        xl: '36px',
      },
      boxShadow: {
        DEFAULT: '0 10px 30px rgba(17, 24, 39, 0.12)',
        'inner-white': 'inset 0 0 0 2px rgba(255, 255, 255, 0.25)',
        'primary-glow': '0 8px 18px rgba(37, 99, 235, 0.35)',
        'logo': '0 6px 16px rgba(37, 99, 235, 0.35)',
        'cta': '0 10px 24px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #1e3a8a, #2563eb 55%, #93c5fd)',
        'glass':
          'linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.12))',
        'hero-radial':
          'radial-gradient(1200px 600px at 80% -50%, rgba(96,165,250,0.25), transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
