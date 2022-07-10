module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "bg-gradient-1": "url('/gradient-1.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
