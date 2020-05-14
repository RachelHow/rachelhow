module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    fontFamily: {
      display: ['Karla', 'sans-serif'],
      body: ['Karla', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}
