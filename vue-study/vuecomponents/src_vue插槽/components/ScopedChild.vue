<template>
  <ul>
    <li v-for="item in todos" :key="item.id">
      <!--作用域插槽-->
      <slot :todo="item">{{ item.content }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ScopedChild",
  props: ['todos']
}
</script>

<style scoped>

</style>