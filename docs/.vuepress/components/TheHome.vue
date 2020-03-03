<template>
  <div class="container">
    <section class="brand">
      <div class="left">
        <img class="logo" :src="logo" />
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
    <section class="cards">
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
  </div>
</template>

<script>
/**
 * TheHome - 官网首页
 * 命名为 "TheHome" 是因为 VuePress 默认主题中存在 "Home.vue" 组件，避免冲突
 */
import config from '@/config';
import logo from '@/public/brand/logo.svg';
// platforms
import iconH5 from '@/public/images/icon_h5.png';
import iconHy from '@/public/images/icon_hy.png';
import iconWx from '@/public/images/icon_wx.png';
import iconAp from '@/public/images/icon_ap.png';
import iconBd from '@/public/images/icon_bd.png';
import iconQQ from '@/public/images/icon_qq.png';
import iconTt from '@/public/images/icon_tt.png';
import iconQa from '@/public/images/icon_qa.png';
// handles
import iconEntry from '@/public/images/icon_Entry.png';
import iconEasy from '@/public/images/icon_easy.png';

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
    };
  },
  created() {
    document.title = `${title} - ${description}`;
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/styles/palette.styl";

.container {
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, p {
    margin-top: 0;
    margin-bottom: 0;
  }
  h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (min-width: $MQMobile + 1px) {
    section {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .brand {
      .left {
        width: 45%;
        .logo {
          margin-right: 5rem;
        }
      }
    }
    .cards {
      display: flex;
      justify-content: center;
      .card {
        width: 20rem;
      }
    }
  }
  @media (max-width: $MQMobile) {
    section {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .brand {
      .left {
        width: 100%;
        .logo {
          margin-right: auto;
        }
      }
      .right {
        align-items: center;
        margin-top: 2rem;
        .links {
          justify-content: center;
        }
      }
    }
    .cards {
      .card + .card {
        margin-top: 2rem;
      }
    }
  }
  .brand {
    display: flex;
    flex-wrap: wrap;
    padding-top: 7rem;
    padding-bottom: 7rem;
    .left {
      display: flex;
      .logo {
        width: 14.5rem;
        margin-left: auto;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 5rem;
        font-weight: 700;
      }
      .desc {
        margin-top: .1rem;
        margin-bottom: 1.2rem;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .links {
        display: flex;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3.2rem;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 3rem;
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
    }
  }
  .cards {
    padding-top: 3rem;
    padding-bottom: 3rem;
    background: $bgColor;
    .card {
      margin-left: 1rem;
      margin-right: 1rem;
      padding: 2rem;
      background: #fff;
      border-radius: .5rem;
      box-shadow: 0 0 4rem rgba(#000, 0.05);
      h2 {
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
      }
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      li {
        color: $minorColor;
      }

      &.platforms {
        li {
          display: flex;
          align-items: center
        }
        li + li {
          margin-top: .5rem;
        }
        img {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-right: .6rem;
        }

        .icon-check {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 18px;
          height: 18px;
          margin-left: auto;
          background: $greenColor;
          border-radius: 100%;

          &::before {
            content: '';
            width: 8px;
            height: 4px;
            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: translateY(-1px) rotate(-45deg);
          }
        }
      }
      &.binders {
        li {
          padding: .8rem;
          text-align: center;
          border-radius: .5rem;
          &.model {
            background: linear-gradient(to right, #ec72da 0%, #f59249 57%, #f6b926 100%);
          }
          &.view {
            background: linear-gradient(to right, #a377ff 0%, #3296ff 61%);
          }
          &.view-model {
            background: linear-gradient(to right, #23c435 0%, #55bbf9 100%);
          }
        }
        li + li {
          margin-top: 1.2rem;
        }
        h3 {
          margin-bottom: .2rem;
          color: #fff;
        }
        p {
          color: rgba(#fff, .8);
        }
      }
      &.handlers {
        li {
          display: flex;
        }
        li + li {
          margin-top: 2rem;
        }
        img {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          padding: .5rem;
          background: #a694ff;
          border-radius: .5rem;
        }
        h3 {
          margin-bottom: .5rem;
        }
        p {
          color: $hintColor;
        }
      }
    }
  }
}
</style>
