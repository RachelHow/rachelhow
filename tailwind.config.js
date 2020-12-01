module.exports = {
  purge: false,
  theme: {
    container: {
      center: true,
      padding: {
        default: '0',
        sm: '2rem',
        md: '4rem',
        lg: '5rem',
      },
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    fontFamily: {
      display: ['Silka', 'Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      r: 400,
      m: 500,
      sb: 600,
      b: 700,
      eb: 800
    },
    colors: {
      'white':'#fff',
      'lightestgray': '#f2f2f2',
      'lightgray': '#525252',
      'medgray': '#C2C2C2',
      'black':'#1a1a1a'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', 
      'xl': '1.75rem', //28px
      'xxl': '2.25rem', //32px
      'xxxl': '3rem' //48px
    },
    inset: {
      'smileylg':'28rem',
      'smileymd':'4rem',
      'smileysm':'4rem'
    },
    extend: {
      lineHeight: {
        '12': '2.4rem'
      }
    }
  },
  variants: {},
  plugins: [],
}
