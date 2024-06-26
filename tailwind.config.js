/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        globalColor1: '#4285f4',
        globalColor2: '#185ABC',
        globalColor5: '#414141',
        globalColor4: '#2d3e50',
        globalColor9: '#ffffff',
        globalColor6: '#656565',
        footerColor: 'rgba(255, 255, 255, 0.5)',
        WhyChooseUsColor: '#F2EEE2',
        WhyChooseUsColorHover: '#F7F5EE',
        customOrange: '#EA7D15',
        customOrangeHover: '#EE8018',
        lightAsh: '#DEE1E2',
        backgroundColor: '#F7FAFC',
        lighDeeptDark: '#2D3E50',
      },
    },
  },
};
