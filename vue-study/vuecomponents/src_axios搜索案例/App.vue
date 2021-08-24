<template>
  <div class="container">
    <Search></Search>
    <Main></Main>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'

export default {
  name: '',
  components: {
    Search,
    Main
  }
}
</script>

<style scoped>

</style>