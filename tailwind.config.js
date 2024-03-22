/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/styles.css", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
