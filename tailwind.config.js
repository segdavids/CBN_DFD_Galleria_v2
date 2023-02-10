/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      'xs2': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        customGreen: '#07A254',
        customLightGreen: '#E3EEE8',
        customBlack: '#161E17',
        customBlack2: '#161616',
        grayText: '#999999',
        grayText2: '#ffffffb3'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans']
      }
    },
  },
  plugins: [],
}
