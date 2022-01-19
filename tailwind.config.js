module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pinkCustom: '#db3a72',
        blueDarkCustom: '#1d202e',
        greenCustom: '#5fb050',
        blueLightCustom: '#00a2e2',
        orangeCustom: '#e94b32',
        grayCustom: '#e3e2e2',
        blueConsufarma: '#1b3052',
        redConsufarma: '#d51025',
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
