<template>
  <div>Home组件</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home mounted');
  },
  activated() {
    //当使用keep-alive的时候可以使用activated代替mounted发送请求
    console.log('Home activated');
  },
  deactivated() {
    //当使用keep-alive的时候可以使用deactivated代替destoyed收尾工作，比如关闭定时器，清除缓存
    console.log('Home deactivated');
  },
}
</script>

<style scoped>

</style>