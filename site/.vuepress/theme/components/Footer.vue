<template>
  <footer class="footer">
    <div class="content">
      <div class="left">
        <a class="brand" href="/">
          <img :src="logo" alt="logo" />
          <span>{{ title }}</span>
        </a>
        <div class="info">{{ copyright }}</div>
      </div>
      <div class="right">
        <div v-for="col in cols" class="col">
          <h4>{{ col.name }}</h4>
          <template v-for="item in col.list">
            <template v-if="item.link">
              <a v-if="isExternal(item.link)" :href="item.link" target="_blank" rel="noopener">
                {{ item.name }}
              </a>
              <a v-else :href="item.link">{{ item.name }}</a>
            </template>
            <template v-else-if="item.img">
              <a>
                <span>{{ item.name }}</span>
                <img :src="item.img" alt="image" />
              </a>
            </template>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import config from '@/config';
import logo from '@/public/brand/logo_dark.svg';
import qrWeixin from '../images/qr_weixin.png';
import qrQQ from '../images/qr_qq.jpg';
import qrDeer from '../images/qr_deer.png';

const { title } = config;
const nowYear = new Date().getFullYear();

export default {
  data() {
    return {
      logo,
      title,
      copyright: `Copyright © ${nowYear} DiDi Chuxing Inc.`,
      cols: [
        {
          name: '资源',
          list: [
            { name: `${title} UI`, link: '/components/expand.html' },
            { name: `${title} Demo`, link: 'https://github.com/beatles-chameleon/cml-demo' },
            { name: `Awesome ${title}`, link: 'https://github.com/chameleon-team/awesome-cml' },
            { name: '更新记录', link: 'https://github.com/didi/chameleon/releases' },
          ],
        },
        {
          name: '社区',
          list: [
            { name: 'GitHub', link: 'https://github.com/didi/chameleon/issues' },
            { name: '微信交流群', img: qrWeixin },
            { name: 'QQ 交流群', img: qrQQ },
            { name: '顺风公鹿', img: qrDeer },
          ],
        },
        {
          name: '关于',
          list: [
            {
              name: `${title} 团队`,
              link: 'https://github.com/didi/chameleon/wiki/Chameleon%E5%9B%A2%E9%98%9F',
            },
            {
              name: '加入我们',
              link: 'https://github.com/didi/chameleon/wiki/%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC',
            },
            { name: '联系我们', link: 'mailto:CML@didichuxing.com' },
            { name: '贡献者', link: 'https://github.com/didi/chameleon/wiki/Contributors' },
          ],
        },
      ],
    };
  },
  methods: {
    isExternal(link) {
      return link.includes('http') || link.includes('mailto');
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/palette.styl';
@import '~@/styles/mixins.styl';

.footer {
  .content {
    +desktop() {
      display: flex;
      justify-content: space-between;
      padding: 7rem 2.5rem;
    }
    .left {
      display: flex;
      flex-direction: column;
      +desktop() {
        justify-content: space-between;
        margin-bottom: .4rem;
      }
      +mobile() {
        margin-bottom: 1.3rem;
      }
      .brand {
        align-self: flex-start;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        img {
          +desktop() {
            width: 3.5rem;
            margin-right: 1rem;
          }
          +mobile() {
            width: 3rem;
            margin-right: .8rem;
          }
        }
        span {
          color: $textColor;
          font-weight: 700;
          +desktop() {
            font-size: 2.4em;
          }
          +mobile() {
            font-size: 2em;
          }
        }
      }
      .info {
        color: $hintColor;
        font-size: .75rem;
        line-height: 1.6;
      }
    }
    .right {
      +desktop() {
        display: flex;
      }
      .col {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        +desktop() {
          margin-left: 6vw;
        }
        +mobile() {
          padding-top: 1.4rem;
          padding-bottom: 1rem;
          border-top: 1px solid $borderColor;
        }
        h4 {
          margin-top: 0;
          margin-bottom: .5rem;
        }
        a {
          color: $hintColor;
          line-height: 2.2;
          font-size: .9rem;
          cursor: pointer;
          white-space: nowrap;
          img {
            display: none;
            position: absolute;
            z-index: 1;
            bottom: 50%;
            max-width: none;
            width: 14rem;
            padding: .8rem;
            background: #fff;
            border-radius: .8rem;
            box-shadow: 0 .2rem 2rem rgba(#000, .12);
            transform: translateY(50%);
            +desktop() {
              right: calc(100% + 1.5rem);
            }
            +mobile() {
              right: 0;
            }
          }
          &:hover {
            img {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
