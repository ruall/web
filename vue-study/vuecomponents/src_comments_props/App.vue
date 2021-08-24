<template>
  <div>
    <Header></Header>
    <div class="container">
      <!--props传值方式-->
      <!--      <Add :addComment="addComment"></Add>-->
      <!--自定义事件回调传值 复杂写法-->
      <!--      <Add ref="add"></Add>-->
      <!--自定义事件回调传值 简单写法-->
      <Add @addComment="addComment"></Add>
      <List :coms="comments" :delComment="delComment"></List>
    </div>
  </div>
</template>

<script>
import Add from '@/components/Add'
import Header from '@/components/Header'
import List from '@/components/List'

export default {
  name: 'App',
  components: {
    Add,
    Header,
    List
  },
  data() {
    return {
      comments: [
        {id: 1, content: 'Vue牛逼', username: '张三'},
        {id: 2, content: 'Vue很好', username: '李四'},
        {id: 3, content: 'Vue很难', username: '王五'},
      ]
    }
  },
  //自定义事件回调传值 复杂写法
  // mounted() {
  //   this.$refs.add.$on('addComment', this.addComment)
  // },
  methods: {
    addComment(com) {
      this.comments.unshift(com)
    },
    delComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
