<template>
  <div id="guide">
    <div class="guideItem">
      <!--params传参-->
      <router-link to="/home/1">首页</router-link>
    </div>
    <div class="guideItem">
      <!--query传参-->
      <router-link to="/category?a=1&b=2">分类</router-link>
    </div>
    <div class="guideItem">
      <!--静态路由-->
      <!--      <router-link to="buy">值得买</router-link>-->
      <!--动态路由-->
      <router-link :to="{name:'Buy',params:{a:1,b:2}}">值得买</router-link>
    </div>
    <div class="guideItem">
      <router-link to="cart">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideFooter"
}
</script>

<style scoped>

</style>