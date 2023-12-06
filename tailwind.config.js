/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "#1f1f1f",
        lightColor: '#f1f1f1'
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
