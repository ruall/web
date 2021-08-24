<template>
  <div>
    <!--    <button @click="add(1)">点击加1</button>
        <button @click="add(2)">点击减1</button>
        <button @click="add(3)">奇数加1</button>
        <button @click="add(4)">延时加1</button>-->
    <button @click="increment">加1</button>
    <button @click="decrement">减1</button>
    <button @click="incrementIfOdd">奇数加1</button>
    <button @click="incrementAsync">异步加1</button>
    <button @click="add(10)">加10</button>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: '',
  /*data() {
    return {
      count: 0
    }
  },*/
  computed: {
    //映射属性数据，
    ...mapState(['count'])
  },
  methods: {
    //简写方法 映射方法
    ...mapActions(['decrement', 'incrementIfOdd', 'incrementAsync']),
    ...mapActions({
      increment() {
        this.$store.dispatch('increment')
      }
    }),
    add(v) {
      this.$store.dispatch('add', v)
    }

    //最原始写法
    /*increment() {
      this.$store.dispatch('incrementA')
    },
    decrement() {
      this.$store.dispatch('decrementA')
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    },*/
    /*add(v) {
      if (v === 1) {
        this.count++
      } else if (v === 2) {
        this.count--
      } else if (v === 3) {
        if (this.count % 2 === 1) {
          this.count++
        }
      } else if (v === 4) {
        setTimeout(() => {
          this.count++
        }, 1000)
      }
    }*/
  }
}
</script>

<style scoped>

</style>