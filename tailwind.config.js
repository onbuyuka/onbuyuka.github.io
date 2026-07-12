/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          800: '#1a1720',
          850: '#141019',
          900: '#0c0910',
          950: '#070509',
        },
        brand: {
          amber: '#fbbf24',
          rose: '#fb7185',
          violet: '#a78bfa',
        },
        accent: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.55' },
          '33%': { transform: 'translate3d(6%,-4%,0) scale(1.12)', opacity: '0.75' },
          '66%': { transform: 'translate3d(-5%,5%,0) scale(0.95)', opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'aurora-slow': 'aurora 22s ease-in-out infinite',
        'aurora-slower': 'aurora 30s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
