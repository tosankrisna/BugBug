/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#375845",
        darkGreen: "#1f3227",
        lightGreen: "#afc083",
        grey: "#787878",
        black: "#1D1E22",
        primary: "#eff2e8",
      },
      letterSpacing: {
        widest: ".2em",
      },
      fontFamily: {
        body: ["Inclusive Sans", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
