<template>
  <div class="home">
    <section class="hero">
      <div class="left">
        <img class="logo" :src="logo" alt="logo" />
      </div>
      <div class="right">
        <h1 class="title">
          <span>{{ title }}</span>
          <sup>原 Chameleon</sup>
        </h1>
        <p class="desc">{{ description }}</p>
        <div class="links">
          <a class="btn btn-primary" href="/get-started.html">快速开始</a>
          <a class="btn btn-default" :href="gitHubUrl" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </section>
    <section class="cards gray">
      <div class="card sticks">
        <h2>多端支持</h2>
        <ul>
          <li v-for="item in apps">
            <img :src="item.icon" alt="icon" />
            <p>{{ item.name }}</p>
            <span class="icon-check"></span>
          </li>
        </ul>
      </div>
      <div class="card blocks">
        <h2>MVVM 统一标准</h2>
        <ul>
          <li v-for="item in mvvm" :class="item.className">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
      </div>
      <div class="card sets">
        <h2>渐进式接入</h2>
        <ul>
          <li v-for="item in run">
            <img :src="item.icon" alt="icon" />
            <div>
              <h3>{{ item.name }}</h3>
              <p v-for="child in item.list">{{ child }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section v-for="group in eco" class="bars" :class="group.className">
      <h2>{{ group.name }}</h2>
      <ul>
        <li v-for="item in group.list">
          <img :src="item.icon" alt="icon" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.link" class="active">查看详情<i>→</i></span>
          <span v-else-if="item.link !== undefined" class="disable">敬请期待</span>
          <span v-else class="none"></span>
          <template v-if="item.link">
            <a v-if="isExternal(item.link)" :href="item.link" target="_blank" rel="noopener"></a>
            <a v-else :href="item.link"></a>
          </template>
        </li>
      </ul>
    </section>
    <section class="grid">
      <h2>MVVM+ 跨端标准协议</h2>
      <ul>
        <li v-for="item in sdk">
          <img :src="item.icon" alt="icon" />
          <h3>{{ item.name }}</h3>
          <p v-for="child in item.list">{{ child }}</p>
        </li>
      </ul>
    </section>
    <section class="slider">
      <h2>应用案例</h2>
      <carousel
        :per-page-custom="[
          [0, 1],
          [720, 2],
          [960, 3], // if (window >= 960) then show 3 slides per page
        ]"
        :navigation-enabled="true"
        :pagination-enabled="false"
        :scroll-per-page="false"
      >
        <slide v-for="item in cases">
          <img :src="item" alt="image" />
        </slide>
      </carousel>
    </section>
    <section class="entry gray">
      <a class="btn btn-primary" href="/get-started.html">快速开始</a>
      <a class="btn btn-default" :href="gitHubUrl" target="_blank" rel="noopener">GitHub</a>
    </section>
    <Footer />
  </div>
</template>

<script>
/**
 * 官网首页 (除 Header、Footer 外内容)
 */
import { Carousel, Slide } from 'vue-carousel';
import Footer from './Footer';

import config from '@/config';
// Brand
import logo from '@/public/logo.svg';
// 多端支持
import appH5 from '@/public/app_h5.png';
import appHybrid from '@/public/app_hybrid.png';
import appWeixin from '@/public/app_weixin.png';
import appAlipay from '@/public/app_alipay.png';
import appBaidu from '@/public/app_baidu.png';
import appQQ from '@/public/app_qq.png';
import appByteDance from '@/public/app_bytedance.png';
import appQuickApp from '@/public/app_quickapp.png';
// 渐进式接入
import runShift from '@/public/run_shift.svg';
import runhelper from '@/public/run_helper.svg';
// 组件生态圈 & 全方位能力供应
import ecoBase from '@/public/eco_base.svg';
import ecoCML from '@/public/eco_cml.svg';
import ecoLight from '@/public/eco_light.svg';
import ecoPlugin from '@/public/eco_plugin.svg';
import ecoLinter from '@/public/eco_linter.svg';
import ecoGitHub from '@/public/eco_github.svg';
// MVVM+ 跨端标准协议
import sdkDev from '@/public/sdk_dev.svg';
import sdkPut from '@/public/sdk_put.svg';
import sdkLink from '@/public/sdk_link.svg';
import sdkPlug from '@/public/sdk_plug.svg';
import sdkLib from '@/public/sdk_lib.svg';
import sdkUni from '@/public/sdk_uni.svg';
// 应用案例
import case1 from '@/public/case_1.png';
import case2 from '@/public/case_2.png';
import case3 from '@/public/case_3.png';
import case4 from '@/public/case_4.png';
import case5 from '@/public/case_5.png';
import case6 from '@/public/case_6.png';

const { title, description } = config;
const gitHubUrl = 'https://github.com/didi/chameleon';

export default {
  components: {
    Carousel,
    Slide,
    Footer,
  },
  data() {
    return {
      // Brand
      logo,
      title,
      description,
      gitHubUrl,
      // 多端支持
      apps: [
        { name: 'Web 端', icon: appH5 },
        { name: 'Hybrid (iOS, Android)', icon: appHybrid },
        { name: '微信小程序', icon: appWeixin },
        { name: '支付宝小程序', icon: appAlipay },
        { name: '百度小程序', icon: appBaidu },
        { name: 'QQ 小程序', icon: appQQ },
        { name: '字节跳动小程序', icon: appByteDance },
        { name: '快应用', icon: appQuickApp },
      ],
      // MVVM 统一标准
      mvvm: [
        { name: 'Model', desc: '标准 JS 语法，标准系统接口', className: 'model' },
        { name: 'View', desc: '标准 Render Engine', className: 'view' },
        { name: 'View Model', desc: '标准模版 DSL', className: 'view-model' },
      ],
      // 渐进式接入
      run: [
        {
          name: '组件导入与导出',
          list: ['支持导入各端原生组件', 'CML 组件导出至各端'],
          icon: runShift,
        },
        {
          name: 'easy-chameleon',
          list: ['优雅升级 CML 跨端方案', '使用方便，简洁高效'],
          icon: runhelper,
        },
      ],
      // 组件生态圈 & 全方位能力供应
      eco: [
        {
          name: '组件生态圈',
          list: [
            {
              name: 'chameleon-ui-builtin',
              desc: '内置基础组件，多端适配性强',
              link: 'base-ui.html',
              icon: ecoBase,
            },
            {
              name: 'CML UI',
              desc: '丰富基础组件，支持按需引用',
              link: 'cml-ui.html',
              icon: ecoCML,
            },
            {
              name: 'Light UI',
              desc: '配置灵活多样，可定制化程度高',
              link: '',
              icon: ecoLight,
            },
          ],
        },
        {
          name: '全方位能力供应',
          className: 'gray reverse',
          list: [
            {
              name: '编辑器插件',
              desc: 'VS Code、WebStorm、Sublime、Atom 插件，语法高亮、指令补全',
              icon: ecoPlugin,
            },
            {
              name: 'Chameleon Linter',
              desc: '多端规范检查，语法错误提示，运行时多态检查',
              icon: ecoLinter,
            },
            {
              name: 'GitHub 社区',
              desc: '7000+ Star，氛围活跃，有问必答',
              link: gitHubUrl,
              icon: ecoGitHub,
            },
          ],
        },
      ],
      // MVVM+ 跨端标准协议
      sdk: [
        {
          name: '开发效率高',
          list: ['独创强大的跨多端语法检查功能', '拥有业内最优秀工程化设计'],
          icon: sdkDev,
        },
        {
          name: '可维护性好',
          list: ['独创多态协议', '轻松维护一套代码实现跨多端'],
          icon: sdkPut,
        },
        {
          name: '渐进式接入',
          list: ['一键导出原生组件', '无污染引用原生组件'],
          icon: sdkLink,
        },
        {
          name: '扩展性强',
          list: ['基于多态协议，可扩展任意底层接口', '不强依赖框架的更新'],
          icon: sdkPlug,
        },
        {
          name: '基础库丰富',
          list: ['统一的 CML Native SDK', '丰富的组件、API 库'],
          icon: sdkLib,
        },
        {
          name: '多端高度一致',
          list: ['统一的代码、界面交互、开发流程', '多层次高度统一'],
          icon: sdkUni,
        },
      ],
      // 应用案例
      cases: [case1, case2, case3, case4, case5, case6],
    };
  },
  created() {
    document.title = `${title} - ${description}`;
  },
  mounted() {
    this.headerLogo = document.querySelector('.logo');
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    isExternal(link) {
      return link.includes('http') || link.includes('mailto');
    },
    onScroll() {
      const { scrollY } = window;

      if (!this.headerLogoShow && scrollY > 270) {
        this.headerLogoShow = true;
        this.headerLogo.classList.add('show');
        return;
      }

      if (this.headerLogoShow && scrollY <= 270) {
        this.headerLogoShow = false;
        this.headerLogo.classList.remove('show');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './Home.styl';
</style>
