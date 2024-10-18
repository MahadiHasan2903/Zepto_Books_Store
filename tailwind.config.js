/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0171BB",
        secondary: "#29ABDF",
        tertiary: "#DE522F",
        primary_background: "#F7F7F7",
        secondary_background: "#232323",
      },
      backgroundImage: {
        hero: "url(./src/assets/bg_image.webp)",
        footer: "url(./src/assets/footer.webp)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-in": "slideIn 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
