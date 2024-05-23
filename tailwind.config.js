/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        globalColor1: '#4285f4',
        globalColor5: '#414141',
      },
    },
  },
  plugins: [],
};
