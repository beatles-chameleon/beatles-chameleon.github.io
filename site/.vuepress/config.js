const path = require('path');

// 顶栏
const nav = [
  { text: '文档', link: '/docs/' },
  { text: '组件', link: '/components/' },
  { text: 'API', link: '/api/' },
  { text: '教程', link: '/tutorial/' },
  { text: 'FAQ', link: '/faq/' },
];

// 侧边栏
const sidebar = {
  '/docs/': [
    {
      title: '开始',
      children: ['introduction', 'setup', 'cli', 'folder'],
      sidebarDepth: 0,
    },
    {
      title: '框架',
      children: ['view', 'cmss', 'cml', 'cml-vue', 'logic', 'store', 'custom', 'config'],
    },
    {
      title: '高级指引',
      children: ['poly', 'project', 'io', 'sdk', 'mvvm'],
    },
    {
      title: '迁移',
      children: [
        'migrate-guide',
        'migrate-wx-to-cml',
        'migrate-vue-to-cml',
        'migrate-weex-to-cml',
        'exp-bytedance-app',
        'exp-quickapp-app',
      ],
      sidebarDepth: 0,
    },
  ],
  '/components/': [
    {
      title: '内置组件',
      path: 'base',
      children: [
        {
          title: '基础',
          children: ['view', 'cover-view', 'text', 'richtext', 'page', 'block', 'cell'],
          sidebarDepth: 0,
        },
        {
          title: '布局',
          children: [
            'scroller',
            'list',
            'container',
            'row',
            'col',
            'carousel',
            'carousel-item',
            'refresh-view',
          ],
          sidebarDepth: 0,
        },
        {
          title: '表单',
          children: ['button', 'input', 'textarea', 'switch', 'radio', 'checkbox'],
          sidebarDepth: 0,
        },
        {
          title: '媒体',
          children: ['image', 'video', 'audio'],
          sidebarDepth: 0,
        },
      ],
    },
    {
      title: '扩展组件',
      path: 'expand',
      children: [
        'c-toast',
        'c-loading',
        'c-dialog',
        'c-popup',
        'c-tip',
        'c-actionsheet',
        'c-tab',
        'c-picker',
        'c-picker-panel',
        'c-picker-item',
        'c-checkbox-group',
        'c-radio-group',
        'c-tabbar',
      ],
    },
  ],
  '/api/': [''],
  '/tutorial/': [
    {
      title: '教程',
      children: [
        'cml-app',
        'cml-web-wx-only-app',
        'poly-api',
        'poly-echarts',
        'use-gestures',
        'project-config',
        'use-cml-component',
        'use-cml-in-webpack',
        'use-android-sdk',
        'use-ios-sdk',
        'normal-vs-cml',
        'use-editor-plugin',
        'how-to-deploy',
        'use-bundle-splitting',
      ],
      sidebarDepth: 0,
    },
  ],
  '/faq/': [
    {
      title: 'FAQ',
      children: [['', '问题列表']],
    },
  ],
};

const setCollapse = (list) => {
  if (!Array.isArray(list)) return;
  list.forEach((item) => {
    if (Object.prototype.toString.call(item) !== '[object Object]') return;
    item.collapsable = false;
    setCollapse(item.children);
  });
};

Object.values(sidebar).forEach(setCollapse);

module.exports = {
  title: 'CML',
  description: '小程序跨端开发统一解决方案',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  dest: './dist',
  themeConfig: { logo: '/logo.svg', nav, sidebar, activeHeaderLinks: false },
  plugins: ['@vuepress/back-to-top'],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname),
      },
    },
  },
};
