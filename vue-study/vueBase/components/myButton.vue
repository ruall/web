<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="count++">按钮</button>
  </div>
</template>

<script>
export default {
  name: "myButton",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
h2 {
  color: pink;
}
</style>