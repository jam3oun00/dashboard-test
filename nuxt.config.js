import en from 'vuetify/lib/locale/en'
import ar from 'vuetify/lib/locale/ar'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  server: {
    port: 6060 // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - digital-marketing',
    title: 'digital-marketing',
    htmlAttrs: {
      lang: process.env.defualtLanguage
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/style/swiper.css', '~/style/main.scss'],
  plugins: [
    { src: '~/mixin/index' },
    { src: '~/plugins/notify', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/axios' }
    // { src: '~/plugins/dropzone', ssr: false }
  ],
  loading: {
    color: '#FFCB04',
    height: '4px'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['@/components', '@/components/utils', '@/components/custome', '@/components/charts'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/style/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  // https://i18n.nuxtjs.org/setup
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
        iso: 'en-US'
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.js',
        iso: 'ar-AR'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: process.env.defualtLanguage,
    vueI18n: {
      fallbackLocale: process.env.defualtLanguage,
      silentTranslationWarn: true
    },
    loadLanguagesAsync: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'redirected',
      alwaysRedirect: true,
      fallbackLocale: process.env.defualtLanguage
    },
    vueI18nLoader: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://backend.the360.marketing/api/v1'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    lang: {
      locales: { ar, en },
      current: process.env.defualtLanguage
    },
    customVariables: ['~/style/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        light: {
          primary: '#001556',
          accent: '#FFCB04',
          accentlight: '#FFFAE6',
          subtitle: '#969BA0',
          danger: '#F24242',
          lighty: '#e9ecff'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    defualtLanguage: 'en'
  },
  devServerHandlers: []
}
