<template>
  <DefaultLayout>
    <template #page-bottom>
      <Footer />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@parent-theme/layouts/Layout.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    DefaultLayout,
    Footer,
  },
};
</script>
