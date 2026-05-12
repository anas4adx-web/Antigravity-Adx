// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05050f',
        secondary: '#11131f',
        accent: {
          from: '#8a2be2',
          to: '#5f9ea0',
        },
      },
      boxShadow: {
        glass: '0 28px 80px rgba(3, 12, 31, 0.45)',
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #8a2be2 0%, #5f9ea0 100%)',
      },
    },
  },
  plugins: [],
};
