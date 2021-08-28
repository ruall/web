<template>
  <div></div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: '测试数据'
    }
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

}
</script>

<style>

</style>
