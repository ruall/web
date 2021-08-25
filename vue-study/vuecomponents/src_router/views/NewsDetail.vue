<template>
  <ul class="list-group">
    <li class="list-group-item">{{ newsid }}</li>
    <li class="list-group-item">{{ content }}</li>
  </ul>
</template>

<script>
export default {
  name: "NewsDetail",
  props: ['newsid', 'content']
}
</script>

<style scoped>

</style>