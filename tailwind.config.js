/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/pexels-skitterphoto-390089.jpg')"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

