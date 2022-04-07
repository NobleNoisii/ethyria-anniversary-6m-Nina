const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, 'docs'),
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Nina 6-Months and 300K';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        description: 'Happy 6-Months Anniversary and Congratulations on 300K Nina!',
        'og:title': 'Nina 6-Months and 300K',
        'og:type': 'website',
        'og:description': 'Happy 6-Months Anniversary and Congratulations on 300K Nina!',
        'og:image': 'https://6months.ninakosaka.com/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Nina 6-Months and 300K',
        'twitter:description': 'Happy 6-Months Anniversary and Congratulations on 300K Nina!',
        'twitter:image': 'https://6months.ninakosaka.com/ogimage.png',
      };
      return args;
    });
  },
  pwa: {
    name: 'Nina 6-Months and 300K',
    themeColor: '#ff0000',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
    assetsVersion: '2022_04_07_02_00',
    manifestOptions: {
      name: 'Nina 6 Months and 300K',
      short_name: 'Nina 6m and 300K',
      description: 'Happy 6-Months Anniversary and Congratulations on 300K Nina!',
      display: 'standalone',
      orientation: 'landscape',
      background_color: '#ffffff',
      start_url: './',
    },
  },
});
