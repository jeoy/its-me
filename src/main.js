// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/vuex';
import './assets/css/iconfont/iconfont.css';
import {
    Button,
    Radio,
    Popover
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(Radio);
Vue.use(Popover);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: {
        App
    },
    template: '<App/>'
});
