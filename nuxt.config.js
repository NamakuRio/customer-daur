export default {
  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME || 'Customer Daur',
    APP_ENV: process.env.APP_ENV || 'local',
    APP_VERSION: process.env.APP_VERSION || 'v0.1.1',
    APP_URL: process.env.APP_URL || 'http://localhost:3001',
    API_URL: process.env.API_URL || 'https://daur.oxxiv.com',
    MIDTRANS_URL: process.env.MIDTRANS_URL,
    MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
    MAPS_KEY: process.env.MAPS_KEY,
  },
  ssr: false,
  target: 'static',
  generate: {
    fallback: true,
  },
  head: {
    title: 'Customer - Daur.id',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Customer - Daur.id',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      },
    ],
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/cleave', ssr: false },
    { src: '~/plugins/helpers', ssr: false },
    { src: '~/plugins/infiniteloading', ssr: false },
    { src: '~/plugins/midtrans', ssr: false },
    { src: '~/plugins/vcalendar', ssr: false },
  ],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
    '@nuxtjs/moment',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
  ],
  build: {},
  router: {
    middleware: ['check-authentication'],
  },
  axios: {
    baseUrl: process.env.API_URL || 'https://daur.oxxiv.com',
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyC8xC87DnG26NBmKtrh-r_cCWAguAhpkNI',
      authDomain: 'pushnotification-c8c20.firebaseapp.com',
      projectId: 'pushnotification-c8c20',
      storageBucket: 'pushnotification-c8c20.appspot.com',
      messagingSenderId: '1069110692188',
      appId: '1:1069110692188:web:f7d887b8cfab9e5aced999',
      measurementId: 'G-HC69BQGPVQ',
    },
    services: {
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          'BHchk6Pn4tmekIk1rHk8FfQHG2GABbsM4eDec4trPdgM9i4huzaTT7q6p_GlzfZAJ4UmkuxHSDEZG70Ws3pb5ao',
      },
    },
  },
  moment: {
    defaultLocale: 'id',
    locales: ['id'],
  },
  pwa: {
    icon: false,
    meta: {
      theme_color: '#3E7380',
    },
    manifest: {
      name: 'Customer - Daur.id',
      short_name: 'Customer Daur',
      description: 'Customer - Daur.id',
      lang: 'id',
      start_url: '/',
    },
  },
}
