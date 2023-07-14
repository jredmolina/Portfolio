/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      gridAutoColumns: {
        works: "minmax(0,2fr)",
      },
    },
  },
  plugins: [],
};
