/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      "2xl": { max: "80em" },
      xl: { max: "65em" },
      lg: { max: "54em" },
      md: { max: "37.5em" },
      sm: { max: "30em" },
    },
  },
  plugins: [],
}

