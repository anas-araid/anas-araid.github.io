module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  theme: {
    extend: {
      boxShadow: {
        red: '0 25px 50px -12px #EF4444',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
