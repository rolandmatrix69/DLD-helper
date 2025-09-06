/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],  // default body text
        heading: ["Poppins", "sans-serif"], // for headings
      },
    },
  },
  plugins: [],
}
