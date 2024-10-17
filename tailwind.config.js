/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
       fontFamily: {

        
=======
      height: {
        dynamic: "calc(100vh - 76.8px)", // Example of a calculated height
      },
       backgroundImage: {
         'custom-radial': 'radial-gradient(86.28% 289.13% at 50% 50%, rgb(87, 0, 91) 0%, rgb(48, 13, 49) 50%)',
         
      },
     
        colors: {
        gold: '#FFD700',  // Define a golden color
>>>>>>> 3b1acbf243ca440810b616ae5dfadca7846d0f99
      },
    },
  },
  plugins: [ 
     require('tailwind-scrollbar-hide'),
  ],
};
