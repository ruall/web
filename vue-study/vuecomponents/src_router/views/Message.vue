<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in messages" :key="item.id">
        <!--        <router-link to="/home/message/msgdetail">{{ item.content }}</router-link>-->
        <!--
          路由传参写法
            params参数和query参数 params参数是路径的一部分，query参数不占路劲
        -->
        <!-- 1、路径的原始写法-->
        <!--        <router-link :to="'/home/message/msgdetail/'+item.id+'?content='+item.content">{{ item.content }}</router-link>-->
        <!-- 2、路径的对象写法-->
        <router-link :to="{name:'msgdetail',params:{msgid:item.id},query:{content:item.content}}">{{ item.content }}
        </router-link>
      </li>
    </ul>
    <input type="text">
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message1",
  data() {
    return {
      messages: [
        {id: 1, content: 'message01'},
        {id: 2, content: 'message02'},
        {id: 3, content: 'message03'},
      ]
    }
  }
}
</script>

<style scoped>

</style>