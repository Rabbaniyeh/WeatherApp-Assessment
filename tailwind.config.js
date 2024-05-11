/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'weather': "url('/src/assets/weather.webp')",
      }
    },
  },
  plugins: [],
}

