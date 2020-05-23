module.exports = {
  purge: false,
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Karla', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    colors: {
      'lightgray': '#727272'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', 
      'xl': '2rem',
      'xxl': '3rem' //48px
    },
    inset: {
      'smileylg':'16rem',
      'smileymd':'4rem',
      'smileysm':'4rem'
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}
