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
  { path: '/', name: 'MainScreen', component: load('MainScreen'), redirect: '/products/',
    children: [
      { path: '/products', name: 'ProductsScreen', component: load('products/ProductsScreen') },
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
