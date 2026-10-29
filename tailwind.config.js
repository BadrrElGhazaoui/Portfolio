/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f8fafc",
        secondary: "#5c6b7e",
        tertiary: "#ffffff",
        accent: "#315a82",
        navy: "#10243d",
        "black-100": "#edf1f6",
        "black-200": "#dce4ee",
        "white-100": "#334155",
      },
      boxShadow: {
        card: "0 24px 60px -34px rgba(16, 36, 61, 0.16)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
