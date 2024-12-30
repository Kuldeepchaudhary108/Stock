/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0d0d0d",
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
