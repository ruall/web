<template>
  <div id="app">
    <h1>App组件</h1>
    <!--tab导航-->
    <div class="tabs">
      <div class="tabItem" @click="changeTab('Home')">
        Home链接
      </div>
      <div class="tabItem" @click="changeTab('Personal')">
        Personal链接
      </div>
    </div>
    <!--内容去-->
    <!--    <Home></Home>-->
    <!--    <Personal></Personal>-->
    <keep-alive :exclude='["Personal"]'>
      <component :is="comName"></component>
    </keep-alive>


    <GuideFooter v-show="$route.meta.isShowFooter"></GuideFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/components/Home";
import GuideFooter from "@/components/GuideFooter/GuideFooter";
// import Personal from "@/components/Personal";

export default {
  name: 'App',
  data() {
    return {
      msg: '测试数据',
      comName: 'Home'
    }
  },
  components: {
    Home, //同步加载
    GuideFooter,
    Personal: () => import('./components/Personal.vue') //异步加载
  },
  beforeCreate() {
    //并没有实现数据劫持代理
    console.log(this.msg);
    //如何在beforeCreate中获取data中的数据
    console.log(this.$options.data().msg);
  },
  created() {
    //已经实现了数据劫持代理
    console.log(this.msg);
  },
  beforeMount() {
  },
  mounted() {
    //数据挂载完毕，在mounted发请求，处理数据，为的是不影响页面初始化渲染
  },
  methods: {
    changeTab(v) {
      this.comName = v
    }
  }
}
</script>

<style>

</style>
