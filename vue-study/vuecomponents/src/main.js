import Vue from 'vue'
import App from '@/App'
/**
 * 完整引入element-ui
 * */
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)*/
/**
 * 按需引入element-ui
 * */
import {Button} from 'element-ui';

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el: '#app',
    render: h => h(App)
})