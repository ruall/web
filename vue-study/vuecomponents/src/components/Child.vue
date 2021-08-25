<template>
  <div>
    <h2>AAAAA</h2>
    <!--Vue内置的组件标签-->
    <slot>
      <!--默认插槽-->
      <!--slot内部的内容,是等待着父组件使用的时候传过来的-->
    </slot>

    <slot name="abc">
      <!--具名插槽-->
    </slot>
  </div>
</template>

<script>
export default {
  name: "Child"
}
</script>

<style scoped>

</style>