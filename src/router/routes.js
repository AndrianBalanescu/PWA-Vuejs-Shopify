import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * @param  {} component
 * @param  {} {return(
 * @param  {} =>System.import(`./${component}.vue`
 */

function load(component) {
  return () => System.import(`./${component}.vue`);
}

const route = [
  { path: '/', name: 'MainScreen', redirect: '/shop',  component: load('MainScreen'),
    children: [
      { path: '/shop', name: 'ShopScreen', component: load('shop/ShopScreen') },
      { path: '/orders', name: 'OrdersScreen', component: load('orders/OrdersScreen') },
      { path: '/contact', name: 'ContactScreen', component: load('contact/ContactScreen') },
      { path: '/news', name: 'NewsScreen', component: load('news/NewsScreen') },
    ],
  },
];

export default new Router({
  mode: 'history',
  routes: route,
  linkActiveClass: 'active',
});
