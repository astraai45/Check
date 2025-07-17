/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          purple: '#7e22ce',
          blue: '#0ea5e9',
          teal: '#0ea5e9',
          yellow: '#facc15',
          dark: '#0f172a',
          silver: '#e2e8f0',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cosmic': '0 25px 50px -12px rgba(126, 34, 206, 0.25)',
        'nebula': '0 25px 50px -12px rgba(14, 165, 233, 0.25)',
      },
    },
  },
  plugins: [],
};