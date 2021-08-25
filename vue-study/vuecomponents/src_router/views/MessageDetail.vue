<template>
  <ul class="list-group">
    <!--    <li class="list-group-item">{{ $route.params. }}</li>-->
    <li class="list-group-item">{{ msgid }}</li>
    <li class="list-group-item">{{ content }}</li>
    <li class="list-group-item">{{ title }}</li>
  </ul>
</template>

<script>

let msgArr = [
  {id: 1, title: 'title01'},
  {id: 2, title: 'title02'},
  {id: 3, title: 'title03'},
]

export default {
  name: "MessageDetail",
  props: ['msgid', 'content'],
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.findTitle()
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        this.findTitle()
      }
    }
  },
  methods: {
    findTitle() {
      setTimeout(() => {
        this.title = msgArr.find(item => item.id === this.msgid).title
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>