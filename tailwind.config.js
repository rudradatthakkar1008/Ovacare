/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#b4a7d6',
        'soft-pink': '#f2a7c3',
        'neon-purple': '#c084fc',
        'neon-pink': '#f472b6',
        'dark-bg': '#0a0a0f',
        'dark-card': 'rgba(15, 15, 25, 0.6)',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'accent-blue': '#60a5fa',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'typing': 'typing 1.5s steps(30) forwards',
        'blink': 'blink 0.8s step-end infinite',
        'shimmer': 'shimmer 3s infinite',
      },
    },
  },
  plugins: [],
}
