<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in newsList" :key="item.id">
        {{ item.content }}
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            @click="toNewsDetail(item)"
        >{{ item.id }}
        </button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {id: 1, content: 'newsOne'},
        {id: 2, content: 'newsTwo'},
        {id: 3, content: 'newsThree'},
      ]
    }
  },
  methods: {
    toNewsDetail(news) {
      //跳转路由切换组件，有历史记录，可以回退
      // this.$router.push('/home/news/newsDetail/' + news.id + '?content=' + news.content)
      this.$router.push({name: 'newsdetail', params: {newsid: news.id}, query: {content: news.content}})
      //跳转路由切换组件，没有历史记录，不可以回退
    }
  }
}
</script>

<style scoped>

</style>