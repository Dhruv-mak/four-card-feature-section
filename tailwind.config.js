/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        red_m: 'hsl(0, 78%, 62%)',
        cyan_m: 'hsl(180, 62%, 55%)',
        orange_m: 'hsl(34, 97%, 64%)',
        blue_m: 'hsl(212, 86%, 64%)',
        very_dark_blue: 'hsl(234, 12%, 34%)',
        grayish_blue: 'hsl(229, 6%, 66%)',
        very_light_gray: 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

