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
      spacing: {
        128: "32rem",
        132: "34rem",
        140: "40rem",
        180: "90rem",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    lineHeight: {
      12: "3rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
