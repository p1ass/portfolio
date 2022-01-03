module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    fontFamily: {
      sans: [
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Segoe UI',
        'Roboto',
        'Noto Sans CJK JP',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Sans Emoji'
      ]
    },
    extend: {}
  },
  // variants: {
  //   extend: {
  //     borderWidth: ['first']
  //   }
  // },
  plugins: []
}
