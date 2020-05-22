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
      'white': '#fff'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', //20px
      'xl': '1.5rem', //24px
      'xxl': '3rem' //48px
    },
    inset: {
      'smiley':'16rem',
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}
