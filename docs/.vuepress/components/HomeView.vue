<template>
  <div class="container">
    <section class="hello">
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
          <a class="btn btn-default" :href="linkGitHub" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </section>
    <section class="flows gray">
      <div class="card ends">
        <h2>多端支持</h2>
        <ul>
          <li v-for="item in ends">
            <img :src="item.icon" alt="icon" />
            <span>{{ item.name }}</span>
            <span class="icon-check"></span>
          </li>
        </ul>
      </div>
      <div class="card standard">
        <h2>MVVM 统一标准</h2>
        <ul>
          <li v-for="item in standard" :class="item.className">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
      </div>
      <div class="card helpers">
        <h2>渐进式接入</h2>
        <ul>
          <li v-for="item in helpers">
            <img :src="item.icon" alt="icon" />
            <div>
              <h3>{{ item.name }}</h3>
              <p v-for="child in item.list">{{ child }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="cycle">
      <h2>组件生态圈</h2>
      <ul>
        <li v-for="item in uis">
          <img :src="item.icon" alt="icon" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.link" class="entry link">查看详情<i>→</i></span>
          <span v-else-if="item.link !== undefined" class="entry disable">敬请期待</span>
          <span v-else class="entry"></span>
          <a
            v-if="item.link && item.link.includes('http')"
            class="cover-link"
            :href="item.link"
            target="_blank"
            rel="noopener"
          ></a>
          <a v-else-if="item.link" class="cover-link" :href="item.link"></a>
        </li>
      </ul>
    </section>
    <section class="cycle gray reverse">
      <h2>全方位能力供应</h2>
      <ul>
        <li v-for="item in eco">
          <img :src="item.icon" alt="icon" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.link" class="entry link">查看详情<i>→</i></span>
          <span v-else-if="item.link !== undefined" class="entry disable">敬请期待</span>
          <span v-else class="entry"></span>
          <a
            v-if="item.link && item.link.includes('http')"
            class="cover-link"
            :href="item.link"
            target="_blank"
            rel="noopener"
          ></a>
          <a v-else-if="item.link" class="cover-link" :href="item.link"></a>
        </li>
      </ul>
    </section>
    <section class="uni">
      <h2>MVVM+ 跨端标准协议</h2>
      <ul>
        <li v-for="item in uni">
          <img :src="item.icon" alt="icon" />
          <h3>{{ item.name }}</h3>
          <p v-for="child in item.list">{{ child }}</p>
        </li>
      </ul>
    </section>
    <section class="cases">
      <h2>应用案例</h2>
      <carousel
        :per-page-custom="[
          [0, 1],
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
    <section class="actions gray">
      <a class="btn btn-primary" href="/get-started.html">快速开始</a>
      <a class="btn btn-default" :href="linkGitHub" target="_blank" rel="noopener">GitHub</a>
    </section>
    <footer class="world">
      <div class="left">
        <div class="logo">
          <img :src="logoDark" alt="logo" />
          <span>CML</span>
        </div>
        <div class="copyright">{{ copyright }}</div>
      </div>
      <div class="right">
        <div v-for="group in world" class="col">
          <h4>{{ group.name }}</h4>
          <ul>
            <li v-for="item in group.list">
              <a
                v-if="item.link && item.link.includes('http')"
                :href="item.link"
                target="_blank"
                rel="noopener"
                >{{ item.name }}
              </a>
              <a v-else-if="item.link" :href="item.link">{{ item.name }}</a>
              <a v-else-if="item.img">
                <span>{{ item.name }}</span>
                <img :src="item.img" alt="image" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
/**
 * HomeView - 官网首页 (除导航栏外内容)
 * (因 VuePress 默认主题存在 "Home.vue" 组件，故命名为 "HomeView" 避免冲突)
 */
import { Carousel, Slide } from 'vue-carousel';
import config from '@/config';
// Brand
import logo from '@/public/brand/logo.svg';
import logoDark from '@/public/brand/logo_dark.svg';
// 多端支持
import iconEndH5 from '@/public/images/icon_end_h5.png';
import iconEndHybrid from '@/public/images/icon_end_hybrid.png';
import iconEndWeixin from '@/public/images/icon_end_weixin.png';
import iconEndAlipay from '@/public/images/icon_end_alipay.png';
import iconEndBaidu from '@/public/images/icon_end_baidu.png';
import iconEndQQ from '@/public/images/icon_end_qq.png';
import iconEndByteDance from '@/public/images/icon_end_bytedance.png';
import iconEndQuickApp from '@/public/images/icon_end_quickapp.png';
// 渐进式接入
import iconHelperIO from '@/public/images/icon_helper_io.svg';
import iconHelperEasy from '@/public/images/icon_helper_easy.svg';
// 组件生态圈
import iconUIBase from '@/public/images/icon_ui_base.svg';
import iconUICML from '@/public/images/icon_ui_cml.svg';
import iconUILight from '@/public/images/icon_ui_light.svg';
// 全方位能力供应
import iconEcoPlugin from '@/public/images/icon_eco_plugin.svg';
import iconEcoLinter from '@/public/images/icon_eco_linter.svg';
import iconEcoGitHub from '@/public/images/icon_eco_github.svg';
// MVVM+ 跨端标准协议
import iconUniDev from '@/public/images/icon_uni_dev.svg';
import iconUniPut from '@/public/images/icon_uni_put.svg';
import iconUniLink from '@/public/images/icon_uni_link.svg';
import iconUniPlug from '@/public/images/icon_uni_plug.svg';
import iconUniLib from '@/public/images/icon_uni_lib.svg';
import iconUniOne from '@/public/images/icon_uni_one.svg';
// 应用案例
import imgCase1 from '@/public/images/case_1.png';
import imgCase2 from '@/public/images/case_2.png';
import imgCase3 from '@/public/images/case_3.png';
import imgCase4 from '@/public/images/case_4.png';
import imgCase5 from '@/public/images/case_5.png';
import imgCase6 from '@/public/images/case_6.png';
// Footer
import imgQrCodeWeixin from '@/public/images/qrCodeWeixin.png';
import imgQrCodeQQ from '@/public/images/qrCodeQQ.jpg';
import imgQrCodeDeer from '@/public/images/qrCodeDeer.png';

const { title, description } = config;
const nowYear = new Date().getFullYear();
// 链接
const linkGitHub = 'https://github.com/didi/chameleon';
const linkTeam = 'https://github.com/didi/chameleon/wiki/Chameleon%E5%9B%A2%E9%98%9F';
const linkJoinUs = 'https://github.com/didi/chameleon/wiki/%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC';
const linkContact = 'mailto:CML@didichuxing.com';
const linkCoders = 'https://github.com/didi/chameleon/wiki/Contributors';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      // Brand
      logo,
      logoDark,
      title,
      description,
      // Footer
      linkGitHub,
      copyright: `Copyright © ${nowYear} DiDi Chuxing Inc.`,
      // 多端支持
      ends: [
        { name: 'Web 端', icon: iconEndH5 },
        { name: 'Hybrid (iOS, Android)', icon: iconEndHybrid },
        { name: '微信小程序', icon: iconEndWeixin },
        { name: '支付宝小程序', icon: iconEndAlipay },
        { name: '百度小程序', icon: iconEndBaidu },
        { name: 'QQ 小程序', icon: iconEndQQ },
        { name: '字节跳动小程序', icon: iconEndByteDance },
        { name: '快应用', icon: iconEndQuickApp },
      ],
      // MVVM 统一标准
      standard: [
        { name: 'Model', desc: '标准 JS 语法，标准系统接口', className: 'model' },
        { name: 'View', desc: '标准 Render Engine', className: 'view' },
        { name: 'View Model', desc: '标准模版 DSL', className: 'view-model' },
      ],
      // 渐进式接入
      helpers: [
        {
          name: '组件导入与导出',
          list: ['支持导入各端原生组件', 'CML 组件导出至各端'],
          icon: iconHelperIO,
        },
        {
          name: 'easy-chameleon',
          list: ['优雅升级 CML 跨端方案', '使用方便，简洁高效'],
          icon: iconHelperEasy,
        },
      ],
      // 组件生态圈
      uis: [
        {
          name: 'chameleon-ui-builtin',
          desc: '内置基础组件，多端适配性强',
          link: 'base-ui.html',
          icon: iconUIBase,
        },
        {
          name: 'CML UI',
          desc: '丰富基础组件，支持按需引用',
          link: 'cml-ui.html',
          icon: iconUICML,
        },
        {
          name: 'Light UI',
          desc: '配置灵活多样，可定制化程度高',
          link: '',
          icon: iconUILight,
        },
      ],
      // 全方位能力供应
      eco: [
        {
          name: '编辑器插件',
          desc: 'VS Code、WebStorm、Sublime、Atom 插件，语法高亮、指令补全',
          icon: iconEcoPlugin,
        },
        {
          name: 'Chameleon Linter',
          desc: '多端规范检查，语法错误提示，运行时多态检查',
          icon: iconEcoLinter,
        },
        {
          name: 'GitHub 社区',
          desc: '7000+ Star，氛围活跃，有问必答',
          link: linkGitHub,
          icon: iconEcoGitHub,
        },
      ],
      // MVVM+ 跨端标准协议
      uni: [
        {
          name: '开发效率高',
          list: ['独创强大的跨多端语法检查功能', '拥有业内最优秀工程化设计'],
          icon: iconUniDev,
        },
        {
          name: '可维护性好',
          list: ['独创多态协议', '轻松维护一套代码实现跨多端'],
          icon: iconUniPut,
        },
        {
          name: '渐进式接入',
          list: ['一键导出原生组件', '无污染引用原生组件'],
          icon: iconUniLink,
        },
        {
          name: '扩展性强',
          list: ['基于多态协议，可扩展任意底层接口', '不强依赖框架的更新'],
          icon: iconUniPlug,
        },
        {
          name: '基础库丰富',
          list: ['统一的 CML Native SDK', '丰富的组件、API 库'],
          icon: iconUniLib,
        },
        {
          name: '多端高度一致',
          list: ['统一的代码、界面交互、开发流程', '多层次高度统一'],
          icon: iconUniOne,
        },
      ],
      // 应用案例
      cases: [imgCase1, imgCase2, imgCase3, imgCase4, imgCase5, imgCase6],
      // Footer
      world: [
        {
          name: '品牌',
          list: [
            { name: 'CML', link: '/' },
            { name: 'CML UI', link: '/cml-ui.html' },
          ],
        },
        {
          name: '社区',
          list: [
            { name: 'GitHub', link: linkGitHub },
            { name: '微信交流群', img: imgQrCodeWeixin },
            { name: 'QQ 交流群', img: imgQrCodeQQ },
            { name: '顺风公鹿', img: imgQrCodeDeer },
          ],
        },
        {
          name: '关于',
          list: [
            { name: 'CML 团队', link: linkTeam },
            { name: '加入我们', link: linkJoinUs },
            { name: '联系我们', link: linkContact },
            { name: '贡献者', link: linkCoders },
          ],
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
@import './HomeView.styl';
</style>
