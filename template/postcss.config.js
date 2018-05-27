module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-cssnext'),
    require('cssnano')({
      preset: 'default',
      discardComments: { removeAll: true }
    })
  ]
}
