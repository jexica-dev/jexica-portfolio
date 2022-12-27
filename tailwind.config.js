module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        gradient01: "url('/gradient-1.png')",
        gradient02: "url('/gradient-2.png')",
        gradient03: "url('/gradient-3.png')",
        gradient04: "url('/gradient-4.png')",
        gradient05: "url('/gradient-5.png')",
        gradient06: "url('/gradient-6.png')",
        gradient07: "url('/gradient-7.png')",
        gradient08: "url('/gradient-8.png')",
        gradient09: "url('/gradient-9.png')",
      },
      fontFamily: {
        gintonord: ["ABC Ginto Nord"],
        prophet: ["ABC Prophet"],
        ginto: ["ABC Ginto"],
        social: ["ABC Social"],
        monument: ["ABC Monument Grotesk Mono"],
        whytemono: ["ABC Whyte Mono"],
        whyteinktrap: ["ABC Whyte Inktrap"],
        dxsitrus: ["Dx Sitrus"],
        mrpixel: ["Mister Pixel"],
        format: ["Format"],
      },
      spacing: {
        128: "32rem",
        132: "34rem",
        140: "40rem",
        150: "50rem",
        180: "90rem",
        container: "1700px",
      },
      cursor: {
        star: "url(/star-cursor.png), default",
      },
      animation: {
        "bounce-slow": "bounce-slow 1s ease-in-out infinite",
        movebg: "20s linear infinite alternate",
        fadein: "fadein 5.25s",
        "fadein-02": "fadein 7s",
        "fadein-03": "fadein 9s",
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
        fadein: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-02": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-03": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
    lineHeight: {
      12: "3rem",
      13: "4rem",
      15: "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
