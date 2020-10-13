/*
 * @Author: vinc
 * @LastEditTime: 2020-10-13 09:12:46
 */
let Http = require('./assets/js/Http.js')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Authmen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      {name: 'renderer', content: 'webkit'},
      {name: 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      {name:"baidu-site-verification",content:"ZtS8U8GhGq"},
      {name: 'email=no', content: 'format-detection'},
      {name: 'telephone=no', content: 'format-detection'},
      {name: 'robots', content: 'all'},
      {hid: 'keywords', name: 'keywords', content: `Autumen`},
      {hid: 'description', name: 'description', content: `Autumen`}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },
  css: ['~/assets/css/main.css','~/assets/css/public.less',],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['mint-ui','axios'],
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true // Can be also an object with default options
  },
  render:{
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  proxy: Http['development'],
  plugins: ['~plugins/mint-ui','~plugins/element','~plugins/axios',{src:'~plugins/no-ssr',ssr:false}],
  router: {
    middleware: 'stats'
  }  
}
;