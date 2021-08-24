import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this // 配置总线，把vm挂到Vue原型上，让所有的组件对象都能找到它，进而调用$on、$emit
    },
    render: h => h(App),
}).$mount('#app')
