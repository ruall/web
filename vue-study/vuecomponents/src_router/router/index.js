import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import News from "@/views/News";
import MessageDetail from "@/views/MessageDetail";
import NewsDetail from "@/views/NewsDetail";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    //路由配置
    routes: [
        {
            path: '/home',
            component: Home, //注册路由组件
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            //:msgid是用来接受路径传过来的params参数
                            path: 'msgdetail/:msgid',
                            component: MessageDetail,
                            name: 'msgdetail', //命名路由
                            // props: true
                            // props: {username: 'aaa'}
                            //如果值为true 会把传递过来的路径当中的params参数映射为接收数据组件中的属性使用
                            props(route) {
                                return {msgid: route.params.msgid, content: route.query.content}
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            path: 'newsdetail/:newsid',
                            component: NewsDetail,
                            name: 'newsdetail',
                            props(route) {
                                return {newsid: route.params.newsid, content: route.query.content}
                            }
                        }
                    ]
                },
                {
                    path: '',
                    redirect: 'message'
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: 'home' //路由重定向
        }
    ]
})