<template>
  <DefaultLayout>
    <template #page-top>
      <div class="not-found">
        <h1>404</h1>
        <p>"{{ getMsg() }}"</p>
        <RouterLink to="/">回到首页</RouterLink>
      </div>
    </template>
    <template #page-bottom>
      <Footer />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@parent-theme/layouts/Layout.vue';
import Footer from '../components/Footer.vue';

const msgs = [
  '这里好像什么都没有',
  '我们怎么到这儿的？',
  '这里是四〇四研究所',
  '看来我们的链接不太对',
];

export default {
  components: {
    DefaultLayout,
    Footer,
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>
