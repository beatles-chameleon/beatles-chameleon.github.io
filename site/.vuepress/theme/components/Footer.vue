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
import logo from '@/public/logo_dark.svg';
import qrWeixin from '@/public/qr_weixin.png';
import qrQQ from '@/public/qr_qq.jpg';
import qrDeer from '@/public/qr_deer.png';

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
            { name: `${title} UI`, link: '/cml-ui.html' },
            { name: `${title} DEMO`, link: 'https://github.com/beatles-chameleon/cml-demo' },
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
@import './Footer.styl';
</style>
