module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-main': '#55b4b7',
        'custom-main-hover': '#0b7285',
        'custom-sub': '#c4c4c4',
        'custom-sub-hover': '#868e96',
      },
    },
    screens: {
      sm: '640px',
      // // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      // lg: '1024px',
      // // => @media (min-width: 1024px) { ... }
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
