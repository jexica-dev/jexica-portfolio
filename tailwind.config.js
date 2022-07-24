module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        gradient01: "url('/gradient-1.png')",
        gradient02: "url('/gradient-34.png')",
      },
      fontFamily: {
        gintonord: ["ABC Ginto Nord"],
        ginto: ["ABC Ginto"],
        social: ["ABC Social"],
        monument: ["ABC Monument Grotesk Mono"],
        whytemono: ["ABC Whyte Mono"],
        whyteinktrap: ["ABC Whyte Inktrap"],
      },
      cursor: {
        star: "url('/star-cursor.png')",
      },
      animation: {
        movebg: "20s linear infinite alternate",
      },
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
