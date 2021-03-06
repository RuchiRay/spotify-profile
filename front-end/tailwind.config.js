// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'inset 20px 20px 60px #0a0a0a,inset -20px -20px 60px #262626',
        '4xl':' inset 15px 15px 30px #0a0a0a,inset -15px -15px 30px #262626',
        '5xl':'15px 15px 30px #0a0a0a,-15px -15px 30px #262626',
        '6xl':'20px 20px 55px #121212,-20px -20px 55px #1e1e1e'
      }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
