/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/styles.css", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

var muscle = "chest";
var API_KEY = Y9TrTb2z2iPNTJvoBAdwOg == K6FBSw1ARauKFPzl;
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
  headers: { "X-Api-Key": "API_KEY" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});
