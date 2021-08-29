<template>
  <div>
    Buy 组件
  </div>
</template>

<script>
export default {
  name: "Buy",
  mounted() {
    console.log(this.$route.params.a);
    console.log(this.$route.params.b);
  }
}
</script>

<style scoped>

</style>