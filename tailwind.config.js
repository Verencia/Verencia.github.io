module.exports = {
  purge: {
    enabled: true,
    content: [
      './index.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      }
    },
  },
  variants: {},
  plugins: [],
}
