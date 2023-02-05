/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#009C19',
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
