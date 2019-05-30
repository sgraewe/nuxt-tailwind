export default {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | {{ name }}',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Load global CSS
  */
  css: ['@/assets/css/tailwind.css'],
  /*
  ** Load nuxt modules
  */
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** PurgeCSS
  ** https://github.com/Developmint/nuxt-purgecss
  */
  purgeCSS: {},
  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-url': {},
        tailwindcss: './tailwind.config.js',
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
+    ** Extract CSS
+    */
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) { }
  }
}
