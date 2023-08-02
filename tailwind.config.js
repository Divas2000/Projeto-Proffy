/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['var(--font-archivo)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.5rem', '2rem'],
        '2xl': ['2.25rem', '2.5rem'],
        '3xl': ['3.5rem', '1']
      },
      borderRadius: {
        DEFAULT: '.5rem',
        'rounded-t': {
          'border-top-left-radius': '.5rem',
          'border-top-right-radius': '.5rem',
        },
        'rounded-b': {
          'border-bottom-left-radius': '.5rem',
          'border-bottom-right-radius': '.5rem',
        }
      },
      boxShadow: {
        sm: '0px 4px 4px rgba(0, 0, 0, .25)',
      },
      colors: {
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFC',
          100: '#F0F0F7',
          200: '#DCDCE5',
          300: '#B0ABBC',
          400: '#9C98A6',
          600: '#6A6180',
        },
        purple: {
          100: '#D4C2FF',
          300: '#A380F6',
          400: '#9871F5',
          500: '#774DD6',
          600: '#6842C2',
          900: '#32264D',
        },
        pink: {
          300: '#E966A0',
          400: '#E6468B',
        },
        red: {
          400: '#E14C4C',
        }
      }
    },
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('daisyui'),
  ],
}
