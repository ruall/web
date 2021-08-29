import Vue from "vue";
import VueRouter from "vue-router";

import routes from "@/router/router";

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

//
/**
 * 全局前置守卫
 * to : 路由跳转目标信息对象
 * from : 路由发起信息对象
 * next : 放行函数
 * */
const isLogin = true
router.beforeEach((to, from, next) => {
    console.log('-----beforeEach------全局的前置守卫');
    //判断用户是否登录
    if (isLogin) {
        next()
    } else {
        if (to.path === '/cart') {
            next('/login')
        } else {
            next()
        }
    }
})

//全局的解析守卫
router.beforeResolve((to, from, next) => {
    console.log('-----beforeEach------全局的解析守卫');
    next()
})

//全局的后置钩子
router.afterEach((to, from) => {
    console.log('-----beforeEach------全局的后置钩子');
})

export default router