<template>
  <div>
    <Child>
      <template>
        <button>按钮</button>
      </template>
      <template slot="abc">
        <p>abc</p>
      </template>
    </Child>

    <Child>
      <template>
        <p>AAA</p>
      </template>
      <template slot="abc">
        <p>aaa</p>
      </template>
    </Child>
    <ScopedChild :todos="todos">
      <template slot-scope="scopeProps">
        <span v-if="scopeProps.todo.isOver" style="color: hotpink">√ {{ scopeProps.todo.content }}</span>
      </template>
    </ScopedChild>
  </div>
</template>

<script>
import Child from "@/components/Child";
import ScopedChild from "@/components/ScopedChild";

export default {
  name: 'App',
  components: {
    Child,
    ScopedChild
  },
  data() {
    return {
      todos: [
        {id: 1, content: '抽烟', isOver: false},
        {id: 2, content: '喝酒', isOver: false},
        {id: 3, content: '烫头', isOver: true},
      ]
    }
  }
}
</script>

<style>
</style>
