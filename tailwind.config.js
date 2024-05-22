/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        basic:"#FF930F",
        second:"#00008B",
      },
      fontFamily:{
        dm:'"DM Sans", sans-serif',
        siliguri:'"Hind Siliguri", sans-serif',
      },
      backgroundImage: {
        'basic-bg': "url('https://i.ibb.co/3N4vv7G/pexels-therato-19275547.jpg')",
        'signIn': "url('https://i.ibb.co/f0gTBDS/pexels-bri-schneiter-28802-346529.jpg')",
        'newsletter': "url('https://i.ibb.co/bL2xbYT/pexels-leo-willians-789496294-19365740.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

