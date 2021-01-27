module.exports = {
  // purge: false,
  purge: ['./components//*.{js,ts,jsx,tsx}', './pages//*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        default: '0',
        sm: '2rem',
        md: '0rem',
        lg: '0rem',
      },
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    fontFamily: {
      display: ['Silka', 'Inter', 'sans-serif'],
      semibold: ['Silka Semibold', 'Inter', 'sans-serif'],
      medium: ['Silka Medium', 'Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      mono: ['Silka Mono', 'Inter', 'sans-serif']
    },
    fontWeight: {
      l: 300,
      r: 400,
      m: 500,
      sb: 600,
      b: 700
    },
    colors: {
      'black': '#181818',
      'white':'#ffffff',
      'gray1': '#343434',
      'gray2': '#969696',
      'gray3': '#B2B2B2',
      'lightestgray': '#f8f8f8',
      'orange': '#FF7A00',
      'lightgray': '#525252', //prev 525252
      'medgray': '#969696', //prev 8E96A4
      'cardBgDark': '#212121',
      'headerLight': 'hsla(0, 0%, 100%, 0.4)',
      'headerDark': 'hsla(0, 0%, 0%, 0.4)',
      'lineLight': '#DEDEDE',
      'lineDark': '#2F2F2F'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //overline,12px
      's': '0.875rem', //h5, 14px
      'base': '1rem', //h4, 16px
      'l': '1.5rem',  //h3,24px
      'xl': '1.75rem', //h2,28px
      'xxl': '2rem', //h1,32px
      'xxxl': '2.8rem' //48px
    },
    extend: {
      lineHeight: {
        '12': '2.4rem'
      }
    },
    maxWidth:{
      '600': '600px',
      '800': '800px'
    }
  },
  variants: {},
  plugins: [
    // require('tailwindcss-line-clamp'),
  ],
}
