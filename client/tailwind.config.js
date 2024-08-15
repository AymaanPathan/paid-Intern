/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-start": "hsla(239, 62%, 63%, 1)",
        "custom-mid": "hsla(236, 76%, 75%, 1)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, theme(colors.custom-start) 0%, theme(colors.custom-mid) 50%, theme(colors.custom-mid) 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
