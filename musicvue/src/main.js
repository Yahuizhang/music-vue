import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import _http from './common/js/axios.js'

import 'common/stylus/index.styl'

// 解决移动端点击300毫秒延迟的问题
fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.prototype.$http = _http;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)

})