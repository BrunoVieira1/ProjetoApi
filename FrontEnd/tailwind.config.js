import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: { colors: colors },
  },
  plugins: [],
};
