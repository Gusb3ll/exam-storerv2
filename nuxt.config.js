export default {

  ssr: false,

  target: 'static',

  head: {
    titleTemplate: ' %s | EXS',
    title: 'EXS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/css/global.css'
  ],

  plugins: [
    '@/plugins/supabase.client.js'
  ],

  components: true,

  buildModules: [
    'nuxt-swc',
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    'nuxt-animejs'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '/'
    }
  },

  build: {
  },

  serverMiddleware: [
    { path: '/api/rest', handler: '~/server-middleware/rest.js' }
  ],

  router: {
    middleware: ['user-auth']
  }
}
