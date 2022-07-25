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
        "bounce-slow": "bounce-slow 1s ease-in-out infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, .5, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic - bezier(0, 0, 0.1, 1)",
          },
        },
      },
    },
    lineHeight: {
      12: "3rem",
      15: "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
