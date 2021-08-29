<template>
  <div>
    Category 组件
  </div>
</template>

<script>
export default {
  name: "Category",
  mounted() {
    console.log(this.$route.query.a + '----------' + this.$route.query.b);
  }
}
</script>

<style scoped>

</style>