export default {
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
  plugins: ['~/plugins/axios', { src: '~/plugins/helpers', ssr: false }],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
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
      apiKey: 'AIzaSyDxC4pAw6doaTPn78lTxpkLyLu1RZROey8',
      authDomain: 'personal-waste-management.firebaseapp.com',
      projectId: 'personal-waste-management',
      storageBucket: 'personal-waste-management.appspot.com',
      messagingSenderId: '41443225848',
      appId: '1:41443225848:web:0f6eb71a62323666180b0d',
      measurementId: 'G-XT6PVC1D4X',
    },
    services: {
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          'BNxru2g85AHtqLcXZ2pcCWBuHpj7mgXzZBJD6Y1lDfgGXYCu9EK1npDcJQ204Ku27Z9dzedt5DKiapRH99aToTc',
      },
    },
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
