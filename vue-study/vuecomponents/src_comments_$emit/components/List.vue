<template>
  <ul class="todo-main">
    <Item v-for="(item,index) in todos" :key="item.id" :todo="item" :updateOne="updateOne" :index="index"></Item>
    <!--    :deleteOne="deleteOne"-->
  </ul>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "List",
  components: {
    Item
  },
  // props: ['todos', 'updateOne', 'deleteOne']
  props: ['todos', 'updateOne']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>