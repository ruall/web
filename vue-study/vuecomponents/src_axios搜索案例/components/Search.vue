<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">gitHub用户搜索</h3>
    <div>
      <input v-model="keyword" type="text" placeholder="请输入用户名...."/>
      <button @click="search">搜索</button>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      //获取用户输入 并将用户输入传递给需要数据的组件
      const {keyword} = this
      if (keyword.trim()) {
        this.$bus.$emit('searchAjax', keyword)
      } else {
        alert('输入不合法')
      }
      this.keyword = ''
    }
  }
}
</script>

<style scoped>

</style>
