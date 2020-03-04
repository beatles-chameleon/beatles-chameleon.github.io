<template>
  <div class="container">
    <section class="hello">
      <div class="left">
        <img class="logo" :src="logo" alt="logo" />
      </div>
      <div class="right">
        <h1 class="title">{{ title }}</h1>
        <p class="desc">{{ description }}</p>
        <div class="links">
          <a class="btn btn-primary" href="/get-started.html">快速开始</a>
          <a
            class="btn btn-default"
            href="https://github.com/didi/chameleon"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
        </div>
      </div>
    </section>
    <section class="flows gray">
      <div class="card platforms">
        <h2>多端支持</h2>
        <ul>
          <li v-for="item in platforms">
            <img :src="item.icon" alt="icon" />
            <span>{{ item.name }}</span>
            <span class="icon-check"></span>
          </li>
        </ul>
      </div>
      <div class="card binders">
        <h2>MVVM 统一标准</h2>
        <ul>
          <li v-for="item in binders" :class="item.className">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
      </div>
      <div class="card handlers">
        <h2>渐进式接入</h2>
        <ul>
          <li v-for="item in handlers">
            <img :src="item.icon" alt="icon" />
            <div>
              <h3>{{ item.name }}</h3>
              <p v-for="child in item.list">{{ child }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="cycle normal">
      <h2>组件生态圈</h2>
      <ul>
        <li v-for="item in eco">
          <img :src="item.icon" alt="icon" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.link" class="right link">查看详情<i>→</i></span>
          <span v-else-if="item.link !== undefined" class="right disable">敬请期待</span>
          <span v-else class="right"></span>
          <a v-if="item.link" class="cover-link" :href="item.link"></a>
        </li>
      </ul>
    </section>
    <section class="cycle gray reverse">
      <h2>全方位能力供应</h2>
      <ul>
        <li v-for="item in supply">
          <img :src="item.icon" alt="icon" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.link" class="right link">查看详情<i>→</i></span>
          <span v-else-if="item.link !== undefined" class="right disable">敬请期待</span>
          <span v-else class="right"></span>
          <a v-if="item.link" class="cover-link" :href="item.link"></a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
/**
 * TheHome - 官网首页
 * (因 VuePress 默认主题存在 "Home.vue" 组件，故命名为 "TheHome" 避免冲突)
 */
import config from '@/config';
import logo from '@/public/brand/logo.svg';
// 多端支持
import iconH5 from '@/public/images/icon_h5.png';
import iconHy from '@/public/images/icon_hy.png';
import iconWx from '@/public/images/icon_wx.png';
import iconAp from '@/public/images/icon_ap.png';
import iconBd from '@/public/images/icon_bd.png';
import iconQQ from '@/public/images/icon_qq.png';
import iconTt from '@/public/images/icon_tt.png';
import iconQa from '@/public/images/icon_qa.png';
// 渐进式接入
import iconEntry from '@/public/images/icon_entry.svg';
import iconEasy from '@/public/images/icon_easy.svg';
// 组件生态圈
import iconBase from '@/public/images/icon_base.svg';
import iconExpand from '@/public/images/icon_expand.svg';
import iconLight from '@/public/images/icon_light.svg';
// 全方位能力供应
import iconPlugin from '@/public/images/icon_plugin.svg';
import iconLinter from '@/public/images/icon_linter.svg';
import iconGitHub from '@/public/images/icon_github.svg';

const { title, description } = config;

export default {
  data() {
    return {
      logo,
      title,
      description,
      // 多端支持
      platforms: [
        { name: 'Web 端', icon: iconH5 },
        { name: 'Hybrid (iOS, Android)', icon: iconHy },
        { name: '微信小程序', icon: iconWx },
        { name: '支付宝小程序', icon: iconAp },
        { name: '百度小程序', icon: iconBd },
        { name: 'QQ 小程序', icon: iconQQ },
        { name: '头条小程序', icon: iconTt },
        { name: '快应用', icon: iconQa },
      ],
      // MVVM 统一标准
      binders: [
        { name: 'Model', desc: '标准 JS 语法，标准系统接口', className: 'model' },
        { name: 'View', desc: '标准 Render Engine', className: 'view' },
        { name: 'View Model', desc: '标准模版 DSL', className: 'view-model' },
      ],
      // 渐进式接入
      handlers: [
        {
          name: '组件导入与导出',
          list: ['支持导入各端原生组件', 'CML 组件导出至各端'],
          icon: iconEntry,
        },
        {
          name: 'easy-chameleon',
          list: ['优雅升级 CML 跨端方案', '使用方便，简洁高效'],
          icon: iconEasy,
        },
      ],
      // 组件生态圈
      eco: [
        {
          name: 'chameleon-ui-builtin',
          desc: '内置基础组件，多端适配性强',
          link: 'ui-base.html',
          icon: iconBase,
        },
        {
          name: 'CML UI',
          desc: '丰富基础组件，支持按需引用',
          link: 'ui-expand.html',
          icon: iconExpand,
        },
        {
          name: 'Light UI',
          desc: '配置灵活多样，可定制化程度高',
          link: '',
          icon: iconLight,
        },
      ],
      // 全方位能力供应
      supply: [
        {
          name: '编辑器插件',
          desc: 'VS Code、Atom、WebStorm、Sublime 插件，语法高亮、指令补全支持',
          icon: iconPlugin,
        },
        {
          name: 'Chameleon Linter',
          desc: '多端规范检查，语法错误提示，运行时多态检查',
          icon: iconLinter,
        },
        {
          name: 'GitHub 社区',
          desc: 'Star 数 7000+，氛围活跃，有问必答',
          link: 'https://github.com/didi/chameleon',
          icon: iconGitHub,
        },
      ],
    };
  },
  created() {
    document.title = `${title} - ${description}`;
  },
};
</script>

<style lang="stylus" scoped>
@import './TheHome.styl';
</style>
