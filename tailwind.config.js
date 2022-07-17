/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cursive-title": ['"Great Vibes"', "cursive"],
        "guest-names": ["Merienda", "cursive"],
        "header-style": ["Shrikhand", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
