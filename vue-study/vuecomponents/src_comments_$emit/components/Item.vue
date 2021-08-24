<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{myClass:isShow}">
    <label>
      <!--
        checkbox两种用法
          1、多个复选框一组，那么每个复选框需要自己填写value值，最终收集到一个数组里面
          2、单个复选框使用，此时不需要填写value值，v-model操作数据，对应操作的就是复选框的属性值
      -->
      <!--第一种用法-->
      <input type="checkbox" :checked="todo.isOver" @click="updateO"/>
      <!--第二种用法-->
      <!--      <input type="checkbox" v-model="isChecked">-->
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delO">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    //第二种写法，写对象，可以对传递过来的属性值类型进行限定
    todo: Object,
    updateOne: Function,
    // deleteOne: Function,
    //props的第三种写法，也是对象写法，只是比第二种对象写法更加严格
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.todo.isOver
      },
      set() {
      }
    }
  },
  methods: {
    updateO() {
      this.updateOne(this.index)
    },
    delO() {
      //props
      // this.deleteOne(this.index)
      //全局事件总线
      this.$bus.$emit('deleteOne', this.index)
    }
  }
}
</script>

<style scoped>
.myClass {
  background-color: pink;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>