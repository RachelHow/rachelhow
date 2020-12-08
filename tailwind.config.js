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
      display: ['Argesta Headline', 'Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    fontWeight: {
      l: 300,
      r: 400,
      m: 500,
      sb: 600,
      b: 700
    },
    colors: {
      'white':'#fff',
      'lightestgray': '#f2f2f2', //prev F2F2F2
      'lightgray': '#525252', //prev 525252
      'medgray': '#8E96A4', //prev C2C2C2
      'black':'#2D3A53'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', 
      'xl': '1.75rem', //28px
      'xxl': '2.5rem', //32px
      'xxxl': '3.4rem' //48px
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
