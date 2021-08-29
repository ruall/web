<template>
  <div>Personal组件</div>
</template>

<script>
export default {
  name: "Personal",
  mounted() {
    console.log('Personal mounted');
  },
  activated() {
    console.log('Personal activated');
  }
}
</script>

<style scoped>

</style>