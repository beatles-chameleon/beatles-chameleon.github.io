const path = require('path');

module.exports = {
  title: 'CML',
  description: '小程序跨端开发统一解决方案',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  dest: './dist',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    logo: '/logo.svg',
    nav: [{ text: '文档', link: '/guide/' }],
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
