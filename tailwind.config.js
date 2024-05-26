/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        globalColor1: '#4285f4',
        globalColor5: '#414141',
        globalColor4: '#2d3e50',
        globalColor9: '#ffffff',
        globalColor6: '#656565',
        footerColor: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
};
