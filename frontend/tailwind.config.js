/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#2C7BE5", // Medical Blue
        'secondary': "#2ECC71", // Soft Green
        'background-light': "#F8F9FA", // Light Grey
        'text-dark': "#333333" // Dark Grey
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fill, minmax(200px, 1fr))"
      },
    },
  },
  plugins: [],
}