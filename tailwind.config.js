module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'bg-black',
      'bg-white',
      'text-white',
      'text-black',
      'from-pink-300',
      'via-purple-300',
      'to-indigo-400',
      'from-pink-500',
      'via-red-500',
      'to-yellow-500',
      'from-green-300',
      'to-blue-400',
    ],
  },
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
