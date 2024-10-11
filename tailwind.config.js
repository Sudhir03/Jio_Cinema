/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        dynamic: "calc(100vh - 76.8px)", // Example of a calculated height
      },
    },
  },
  plugins: [],
};
