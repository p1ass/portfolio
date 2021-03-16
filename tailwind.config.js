module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors: {
      background: {
        dark: '#F9F9FA',
        DEFAULT: '#FFFFFF' // Primary Color
      },
      blue: {
        DEFAULT: '#4172B5' // Primary Color
      },
      gray: {
        DEFAULT: '#1E2126', // Secondary Text Color
        light: '#636E7D' // Third Text Color
      },
      border: {
        DEFAULT: '#DDE0E4', // Primary Border Color
        light: '#FFFFFF' // Primary Border Color
      }
    },
    fontFamily: {
      sans: ['Hiragino Kaku Gothic ProN', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {
      borderWidth: ['first']
    }
  },
  plugins: []
}
