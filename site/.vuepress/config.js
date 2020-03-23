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
      children: ['poly', 'build', 'io', 'sdk', 'mvvm'],
    },
    {
      title: '迁移',
      children: ['migrate-guide', 'migrate-wx-to-cml', 'migrate-vue-to-cml', 'migrate-weex-to-cml'],
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
        'first-cml-app',
        'web-wx-only-app',
        'bytedance-cml-app',
        'quickapp-cml-app',
        'poly-api',
        'poly-component',
        'export-cml-component',
        'webpack-with-cml',
        'build-config',
        'deploy-guide',
        'bundle-splitting',
        'android-sdk',
        'ios-sdk',
        'use-gestures',
        'normal-vs-cml',
        'editor-plugin',
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
  head: [['link', { rel: 'icon', href: `/brand/logo.png` }]],
  dest: './dist',
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: '中文', // 将会被设置为 <html> 的 lang 属性
  //     title: 'CML',
  //     description: '一套代码运行多端，一端所见即多端所见'
  //   },
  //   '/zh/': {
  //     lang: 'English',
  //     title: 'CML',
  //     description: 'An overall solution for multi-platform development'
  //   }
  // },
  themeConfig: { 
    logo: '/brand/logo.png',
    nav, 
    sidebar, 
    activeHeaderLinks: false,
    // locales: {
    //   '/': {
    //     selectText: 'Languages',
    //     label: 'English',
    //     ariaLabel: 'Languages',
    //     editLinkText: 'Edit this page on GitHub',
    //     serviceWorker: {
    //       updatePopup: {
    //         message: "New content is available.",
    //         buttonText: "Refresh"
    //       }
    //     },
    //     algolia: {},
    //     nav,
    //     sidebar
    //   },
    //   '/zh/': {
    //     // 多语言下拉菜单的标题
    //     selectText: '选择语言',
    //     // 该语言在下拉菜单中的标签
    //     label: '简体中文',
    //     // 编辑链接文字
    //     editLinkText: '在 GitHub 上编辑此页',
    //     // Service Worker 的配置
    //     serviceWorker: {
    //       updatePopup: {
    //         message: "发现新内容可用.",
    //         buttonText: "刷新"
    //       }
    //     },
    //     // 当前 locale 的 algolia docsearch 选项
    //     algolia: {},
    //     nav,
    //     sidebar
    //   }
    // }
  },
  plugins: ['@vuepress/back-to-top'],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname),
      },
    },
  },
};
