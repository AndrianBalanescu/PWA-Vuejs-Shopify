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
  { path: '/', component: load('MainScreen'), name: 'Main' },
];

export default new Router({
  mode: 'history',
  routes: route,
  linkActiveClass: 'active',
});
