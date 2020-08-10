module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#111111',
        light: '#f9f9fa',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        brand: {
          100: '#EEEFFC',
          200: '#D4D7F6',
          300: '#BABEF1',
          400: '#868EE7',
          500: '#525DDC',
          600: '#4A54C6',
          700: '#313884',
          800: '#252A63',
          900: '#191C42',
        },
        inherit: 'inherit',
      },
      fontFamily: {
        sans: [
          '"Work Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xxs: '0.675rem',
        md: '0.9rem',
      },
      spacing: {
        '7': '1.75rem',
        '52': '13rem',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      minWidth: theme => ({
        '1/2': '50%',
        ...theme('spacing'),
      }),
      listStyleType: {
        square: 'square',
        circle: 'circle',
      },
      letterSpacing: {
        widest: '.25em',
      },
      syntax: {
        color: {
          background: '#292929',
          border: '#e1e1e8',
          base: '#fff',
          debug: 'red',
          fade: '#fff',
          comment: '#6f705e',
          keyword: '#f12770',
          value: '#76d9e6',
          string: '#babef1',
          name: '#e6d06c',
          number: '#fff',
          variable: '#fff',
          selector: '#a6e22d',
          punctuation: '#fff',
        },
        tabSize: 2,
        hyphens: 'none',
        blockPadding: '2px',
        inlinePadding: '2px 6px',
        border: {
          width: '1px',
          style: 'solid',
          radius: '5px',
        },
        weight: {
          important: 'bold',
          normal: 'normal',
        },
        boxShadow: '1px 1px 0.3em -0.1em #000 inset',
        textShadow: '0 1px 0 #000',
        highlight: {
          lineHeight: 1.4,
          marginTop: '0.85rem',
          marginBottom: '0.85rem',
        },
        namespace: {
          oapcity: 0.7,
        },
      },
    },
  },
  variants: {},
  plugins: [
    ({addUtilities}) => {
      addUtilities({
        '.border-t-white': {
          'border-top-color': '#fff',
        },
      })
    },
    require('./tailwind-syntax'),
  ],
}
