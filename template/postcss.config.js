module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')({
      cascade: false,
      grid: true
    }),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('cssnano')({
      preset: 'default',
      discardComments: { removeAll: true },
      zindex: false
    })
  ]
}
