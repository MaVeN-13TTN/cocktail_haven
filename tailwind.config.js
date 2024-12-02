/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#1A1A1A',
          accent: '#FF8A00',
          wood: '#8B4513',
        },
        accent: {
          neon: '#FFA500',
          burgundy: '#8B0000',
          copper: '#B87333',
        },
        ui: {
          card: '#2F4F4F',
          text: '#F5F5F5',
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #FF8C00, #FF4500)',
      },
    },
  },
  plugins: [],
};