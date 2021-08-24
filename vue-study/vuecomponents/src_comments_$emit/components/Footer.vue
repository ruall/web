<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{ overNum }}</span> / 全部{{ allNum }}
        </span>
    <button class="btn btn-danger" @click="del">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['todos'],
  computed: {
    allNum() {
      return this.todos.length
    },
    overNum() {
      /**
       * reduce方法：统计数组当中符合条件的结果（数字或其他类型）
       *  参数：回调函数（参数：prev-上一次统计的解雇 item index arr） 统计的初始值
       *  返回值：返回统计后的结果
       *
       *  暗含遍历，会拿数组的每一项执行回调函数
       *  第一次执行回调的时候，prev的值就是给的初始值
       *  第一次执行完回调函数后会返回prev值作为下一次回调的参数
       * */
      return this.todos.reduce((prev, item) => {
        if (item.isOver) {
          prev += 1
        }
        return prev
      }, 0)
    },
    isCheckAll: {
      get() {
        return this.overNum === this.allNum && this.allNum > 0
      },
      set(val) {
        this.$emit('updateAll', val)
      }
    }
  },
  methods: {
    del() {
      this.$emit('delAll')
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>