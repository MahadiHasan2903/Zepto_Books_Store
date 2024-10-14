/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1b83c4",
        secondary: "#11b7dd",
        tertiary: "#ea830f",
      },
      backgroundImage: {
        hero: "url(./src/assets/bg_image.webp)",
      },
    },
  },
  plugins: [],
};
