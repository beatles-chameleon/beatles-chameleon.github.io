export default ({ router }) => {
  router.addRoutes([
    { path: '/docs/', redirect: '/docs/introduction' },
    { path: '/components/', redirect: '/components/base' },
    { path: '/tutorial/', redirect: '/tutorial/first-cml-app' },
  ]);
};
