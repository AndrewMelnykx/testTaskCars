module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        casualBlue: "#0147FF",
        darkBlack: "#282828",
        disabledWhite: "#F1F1F1",
      },
      fontSize: {
        "76-29": "76.29px",
        "5xl": "3rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        robotoFlex: ['"Roboto Flex"', "sans-serif"],
        bebasNeue: ['"Bebas Neue"', "cursive"],
        robotoCondensed: ['"Roboto Condensed"', "sans-serif"],
      },
      spacing: {
        "10p": "10%",
        "5p": "5%",
        "20p": "20%",
        "5pNeg": "-5%",
        "30p": "30%",
        "6p": "6%",
        "85vh": "85vh",
        "140vh": "140vh",
        "55vh": "55vh",
        "200vh": "200vh",
        "446px": "446px",
        "64px": "64px",
      },
      width: {
        customWidth: "446px",
        "125p": "125%",
        "100p": "100%",
      },
      screens: {
        sm: "390px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
