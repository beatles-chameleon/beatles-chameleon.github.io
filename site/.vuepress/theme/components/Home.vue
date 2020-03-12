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
          <a class="btn btn-primary" :href="docsEntry">快速开始</a>
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
      <a class="btn btn-primary" :href="docsEntry">快速开始</a>
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
import appH5 from '../images/app_h5.png';
import appHybrid from '../images/app_hybrid.png';
import appWeixin from '../images/app_weixin.png';
import appAlipay from '../images/app_alipay.png';
import appBaidu from '../images/app_baidu.png';
import appQQ from '../images/app_qq.png';
import appByteDance from '../images/app_bytedance.png';
import appQuickApp from '../images/app_quickapp.png';
// 渐进式接入
import runShift from '../images/run_shift.svg';
import runhelper from '../images/run_helper.svg';
// 组件生态圈 & 全方位能力供应
import ecoBase from '../images/eco_base.svg';
import ecoExpand from '../images/eco_expand.svg';
import ecoLight from '../images/eco_light.svg';
import ecoPlugin from '../images/eco_plugin.svg';
import ecoLinter from '../images/eco_linter.svg';
import ecoGitHub from '../images/eco_github.svg';
// MVVM+ 跨端标准协议
import sdkDev from '../images/sdk_dev.svg';
import sdkPut from '../images/sdk_put.svg';
import sdkIO from '../images/sdk_io.svg';
import sdkPlug from '../images/sdk_plug.svg';
import sdkLib from '../images/sdk_lib.svg';
import sdkUni from '../images/sdk_uni.svg';
// 应用案例
import case1 from '../images/case_1.png';
import case2 from '../images/case_2.png';
import case3 from '../images/case_3.png';
import case4 from '../images/case_4.png';
import case5 from '../images/case_5.png';
import case6 from '../images/case_6.png';

const { title, description } = config;

const docsEntry = '/docs/introduction.html';
const gitHubUrl = 'https://github.com/didi/chameleon';
const baseUIUrl = '/components/base.html';
const expandUIUrl = '/components/expand.html';

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
      // 链接
      docsEntry,
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
              link: baseUIUrl,
              icon: ecoBase,
            },
            {
              name: 'CML UI',
              desc: '丰富基础组件，支持按需引用',
              link: expandUIUrl,
              icon: ecoExpand,
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
          icon: sdkIO,
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
  mounted() {
    document.title = `${title} - ${description}`;
    this.navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    isExternal(url) {
      return url.includes('http') || url.includes('mailto');
    },
    onScroll() {
      const { scrollY } = window;

      if (!this.navbarAdded && scrollY > 270) {
        this.navbarAdded = true;
        this.navbar.classList.add('scroll');
        return;
      }

      if (this.navbarAdded && scrollY <= 270) {
        this.navbarAdded = false;
        this.navbar.classList.remove('scroll');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/palette.styl';
@import '~@/styles/mixins.styl';

/* Base
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.home {
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  h1,
  h2 {
    font-weight: 700;
  }
  h3,
  h4 {
    font-weight: 600;
  }
  h2 {
    padding-bottom: 0;
    border-bottom: 0;
    +desktop() {
      font-size: 2.4rem;
    }
    +mobile() {
      font-size: 1.6rem;
    }
  }
  h3 {
    font-size: 1.2rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border-radius: 3rem;
    +desktop() {
      height: 3.2rem;
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      font-size: 1.1rem;
    }
    +mobile() {
      height: 2.8rem;
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: 1rem;
    }
    + .btn {
      margin-left: 1rem;
    }
    &.btn-primary {
      color: #fff;
      background: $accentColor;
    }
    &.btn-default {
      border: 2px solid $accentColor;
    }
  }
}

/* Sections
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.home {
  section {
    +desktop() {
      padding: 7rem 2.5rem;
    }
    +mobile() {
      padding: 3rem 1.5rem;
    }
    &.gray {
      background: $grayBg;
    }
  }
  .hero {
    padding-top: 8.5rem;
    padding-bottom: 8rem;
    +desktop() {
      display: flex;
    }
    .left {
      display: flex;
      +desktop() {
        width: 45%;
        justify-content: flex-end;
      }
      +mobile() {
        justify-content: center;
      }
      .logo {
        +desktop() {
          width: 14.5rem;
          margin-right: 5rem;
        }
        +mobile() {
          width: 11.5rem;
        }
      }
    }
    .right {
      +desktop() {
        flex: 1;
      }
      +mobile() {
        margin-top: 2rem;
      }
      .title {
        position: relative;
        +desktop() {
          display: inline-block;
        }
        +mobile() {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }
        span {
          +desktop() {
            font-size: 5rem;
          }
          +mobile() {
            font-size: 4.5rem;
          }
        }
        sup {
          padding: .3rem .6rem;
          color: $accentColor;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          background: rgba($accentColor, .1);
          border-radius: .4rem;
          +desktop() {
            position: absolute;
            top: .4rem;
            left: 96%;
          }
        }
      }
      .desc {
        margin-top: 0.1rem;
        margin-bottom: 1.2rem;
        font-weight: 500;
        +desktop() {
          font-size: 1.5rem;
        }
        +mobile() {
          font-size: 1.2rem;
          text-align: center;
        }
      }
      .links {
        display: flex;
        +mobile() {
          justify-content: center;
        }
      }
    }
  }
  .cards {
    padding-top: 2rem;
    padding-bottom: 2rem;
    +desktop() {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .card {
      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 0 4rem rgba(#000, 0.05);
      +desktop() {
        width: 20rem;
        margin: 1.2rem;
        padding: 2rem;
      }
      +mobile() {
        padding: 1.5rem;
        + .card {
          margin-top: 2rem;
        }
      }
      h2 {
        +desktop() {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        +mobile() {
          margin-bottom: 1.3rem;
          font-size: 1.3rem;
        }
      }
      li {
        color: $minorColor;
      }
      &.sticks {
        li {
          display: flex;
          align-items: center;
          + li {
            margin-top: .6rem;
          }
        }
        img {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-right: 0.6rem;
        }
        .icon-check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          margin-left: auto;
          background: $greenColor url('../images/icon_check.svg') center / 14px no-repeat;
          border-radius: 100%;
        }
      }
      &.blocks {
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 5.1rem;
          padding: 0.8rem;
          text-align: center;
          border-radius: 0.5rem;
          &.model {
            background: linear-gradient(to right, #ec72da 0%, #f59249 57%, #f6b926 100%);
          }
          &.view {
            background: linear-gradient(to right, #a377ff 0%, #3296ff 61%);
          }
          &.view-model {
            background: linear-gradient(to right, #23c435 0%, #55bbf9 100%);
          }
          + li {
            margin-top: 1.2rem;
          }
        }
        h3 {
          color: #fff;
        }
        p {
          color: rgba(#fff, 0.8);
        }
      }
      &.sets {
        li {
          display: flex;
          + li {
            margin-top: 2rem;
          }
        }
        img {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          padding: 0.5rem;
          background: rgba($accentColor, 0.2);
          border-radius: 0.7rem;
        }
        h3 {
          margin-bottom: 0.4rem;
        }
        p {
          color: $hintColor;
        }
      }
    }
  }
  .bars {
    +desktop() {
      display: flex;
      align-items: center;
      &.reverse {
        flex-direction: row-reverse;
        h2 {
          padding-left: 5rem;
          padding-right: 0;
          text-align: left;
        }
        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
    }
    h2 {
      +desktop() {
        flex: 1 .8 50%;
        padding-right: 5rem;
        font-size: 3rem;
        text-align: right;
      }
      +mobile() {
        margin-bottom: 2rem;
        text-align: center;
      }
    }
    ul {
      +desktop() {
        flex: 1 0 50%;
      }
      li {
        position: relative;
        display: flex;
        background: #fff;
        border-radius: 0.8rem;
        box-shadow: 0 0.2rem 2rem rgba(#000, 0.1);
        +desktop() {
          padding: 1.2rem;
          width: 28rem;
        }
        +mobile() {
          padding: 1rem;
        }
        &:hover i {
          right: 0;
          opacity: 1;
        }
        + li {
          margin-top: 1.5rem;
        }
      }
      img {
        margin-right: 1rem;
        padding: 0.5rem;
        background: rgba($accentColor, 0.5);
        border-radius: 0.7rem;
        +desktop() {
          width: 3.5rem;
          height: 3.5rem;
        }
        +mobile() {
          width: 3rem;
          height: 3rem;
        }
      }
      div {
        flex: 1;
        h3 {
          +desktop() {
            line-height: 1.9rem;
          }
          +mobile() {
            line-height: 1.5rem;
          }
        }
        p {
          margin-top: .2rem;
          color: $hintColor;
          line-height: 1.5rem;
          +desktop() {
            margin-bottom: -.1rem;
          }
          +mobile() {
            margin-bottom: -.2rem;
          }
        }
      }
      span {
        +desktop() {
          position: relative;
          margin-top: 1rem;
          margin-left: 1rem;
          width: 5rem;
          &.active {
            color: rgba($accentColor, 0.9);
          }
          &.disable {
            color: $unableColor;
          }
          i {
            position: absolute;
            font-style: normal;
            transition: 0.1s;
            right: .5rem;
            opacity: 0;
          }
        }
        +mobile() {
          display: none;
        }
      }
      a {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: pointer;
      }
    }
  }
  .grid {
    color: transparent;
    background: linear-gradient(150deg, #DD79D3 30%, #9D79F7, #7B84F7, #5796EF, #71BF4C 70%);
    background-clip: text;
    h2 {
      text-align: center;
      +desktop() {
        margin-bottom: 1rem;
        font-size: 2.4rem;
      }
    }
    ul {
      +desktop() {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-view();
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        +desktop() {
          margin-top: 3rem;
          width: 20rem;
        }
        +mobile() {
          margin-top: 2rem;
        }
      }
      img {
        width: 3.5rem;
        height: 3.5rem;
      }
      h3 {
        margin-top: 1.2rem;
        margin-bottom: .8rem;
        color: $textColor;
      }
      p {
        text-align: center;
      }
    }
  }
  .slider {
    background: linear-gradient($grayBg, #fff);
    h2 {
      text-align: center;
      +desktop() {
        margin-bottom: 3rem;
      }
      +mobile() {
        margin-bottom: 2rem;
      }
    }
  }
  .entry {
    display: flex;
    justify-content: center;
  }
}

/* Slider
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.VueCarousel {
  +desktop() {
    max-view();
  }
  /deep/ .VueCarousel-wrapper {
    /deep/ .VueCarousel-inner {
      .VueCarousel-slide {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        img {
          padding: 1.5rem .6rem;
          border-radius: 1.5rem;
          background: #fff;
          box-shadow: 0 .1rem 1rem rgba(#000, .1);
          +desktop() {
            width: 16rem;
          }
          +mobile() {
            max-width 16rem;
            width: 72%;
          }
        }
      }
    }
  }
  /deep/ .VueCarousel-navigation {
    .VueCarousel-navigation-button {
      width: 3.5rem;
      height: 3.5rem;
      text-indent: -9999rem;
      background-color: #fff;
      background-size: 1.3rem;
      background-repeat: no-repeat;
      border-radius: 100%;
      box-shadow: 0 .2rem 1rem rgba(#000, .1);
      outline: 0;
      &.VueCarousel-navigation-prev {
        left: 1rem;
        background-image: url('../images/arrow_left.svg');
        background-position: 1rem center;
        +mobile() {
          left: 3.5rem;
        }
      }
      &.VueCarousel-navigation-next {
        right: 1rem;
        background-image: url('../images/arrow_right.svg');
        background-position: right 1rem center;
        +mobile() {
          right: 3.5rem;
        }
      }
      &.VueCarousel-navigation--disabled {
        box-shadow: none;
        opacity: 0.7;
      }
    }
  }
}
</style>
