const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    ...defaultTheme,
    screens: {
      xs: '321px',
      sm: '415px',
      md: '769px',
      lg: '1025px',
      xl: '1281px',
      '2xl': '1537px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      primary: '#36f',
      secondary: '#ff3d71',
      success: '#00d68f',
      cadet: {
        lightest: '#2e3a59',
        light: '#192038',
        DEFAULT: '#181C36',
        dark: '#151a30'
      },
      body: {
        light: '#fbfcfe',
        DEFAULT: '#151a30',
        dark: '#8f9bb3'
      }
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      blog: ["'Open Sans', sans-serif"],
      heading: ["'Raleway', sans-serif"],
      body: ["'Roboto Mono',sans-serif"]
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      opacity: ['disabled'],
      animation: ['motion-reduce'],
      divideColor: ['group-hover'],
      scale: ['focus-within'],
      backgroundColor: ['checked'],
      borderColor: ['checked']
    }
  },
  plugins: []
};
