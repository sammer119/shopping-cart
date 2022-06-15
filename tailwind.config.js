/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B4141",
        secondary: "#0EB1D2",
        tertiary: "#34E4EA",
        quaternary: "#8AB9B5",
        quinary: "#C8C2AE",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
