<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"></Header>
      <!--      <List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>-->
      <!--全局事件总线-->
      <List :todos="todos" :updateOne="updateOne"></List>
      <Footer :todos="todos" @updateAll="updateAll" @delAll="delAll"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  mounted() {
    //在app道中找到总线，给总线绑定一个事件‘deleteOne’
    this.$bus.$on('deleteOne', this.deleteOne)
  },
  watch: {
    deep: true,
    todos: {
      handler(newVla, oldVal) {
        localStorage.setItem('TODOS_KEY', JSON.stringify(newVla))
      }
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    updateOne(index) {
      this.todos[index].isOver = !this.todos[index].isOver
    },
    deleteOne(index) {
      this.todos.splice(index, 1)
    },
    updateAll(val) {
      this.todos.forEach(item => item.isOver = val)
    },
    delAll() {
      //把没完成的过滤出来组成新数组赋值给原数组
      this.todos = this.todos.filter(item => !item.isOver)
    }
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
