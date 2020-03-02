const path = require('path');

module.exports = {
  title: 'CML',
  description: '小程序跨端开发统一解决方案',
  dest: './dist',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: ['/', '/guide/'],
    activeHeaderLinks: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname),
      },
    },
  },
};
