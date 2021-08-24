<template>
  <div class="row">
    <h2 v-if="isFrist">欢迎您! 请输入用户名进行查找</h2>
    <h2 v-else-if="isLoading">正在搜索中,请稍等...</h2>
    <h2 v-else-if="errorMsg">请求失败---{{ errorMsg }}</h2>
    <div v-else class="card" v-for="(user,index) in users" :key='user.username'>
      <a :href="user.userurl" target="_blank">
        <img :src="user.userimg" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data() {
    return {
      isFrist: true,
      isLoading: false,
      users: [],
      errorMsg: ''
    }
  },
  mounted() {
    //获取数据
    this.$bus.$on('searchAjax', this.searchAjax)
    this.test()
  },
  methods: {
    async test() {
      try {
        const res = await axios({
          url: 'http://localhost:8080/api/user/info',
          method: 'GET'
        })
        console.log(res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async searchAjax(keyword) {
      //改数据状态
      this.isFrist = false
      this.isLoading = true
      try {
        const response = await axios({
          // url:`https://api.github.com/search/users?q=${keyword}`,//第一种方式
          // url:'https://api.github.com/search/users?q='+keyword,//第二种方式
          url: 'https://api.github.com/search/users',//与第三种方式配合
          method: 'get',
          //携带query的第三种方式
          params: {
            q: keyword//简写形式为  将接收的参数改为q  此时对象中可以直接写q
          }
        })


        this.isLoading = false
        // console.log(response.data),
        this.users = response.data.items.map(item => ({
          username: item.login,
          userurl: item.url,
          userimg: item.avatar_url
        }))
      } catch (error) {
        console.log(error.message)
        this.isLoading = false
        this.errorMsg = error.message
      }
      //数据已通过参数传递过来 可以发送请求了  下载安装axios
      //接口https://api.github.com/search/users?q=aa  获取请求 一般发送的是get
      //请求方式:
      // get(获取)  post(新增) put(修改) delete(删)
      //get delete 携带query与params参数  post put 一般携带请求体参数 当然也可以携带query与params参数
      //axios是一个对象  一般可以作为函数使用  也可以作为对象使用
      //作为函数使用 参数为一个配置对象
      /*axios({
        // url:`https://api.github.com/search/users?q=${keyword}`,//第一种方式
        // url:'https://api.github.com/search/users?q='+keyword,//第二种方式
        url: 'https://api.github.com/search/users',//与第三种方式配合
        method: 'get',
        //携带query的第三种方式
        params: {
          q: keyword//简写形式为  将接收的参数改为q  此时对象中可以直接写q
        }
      }).then(
          response => {
            this.isLoading = false
            // console.log(response.data),
            this.users = response.data.items.map(item => ({
              username: item.login,
              userurl: item.url,
              userimg: item.avatar_url

            }))
          }
      ).catch(
          error => {
            conlose.log(error.message)
            this.isLoading = false
            this.errorMsg = error.message
          }
      )*/
      //作为对象使用  简写形式
      // let url=`https://api.github.com/search/users?q=${keyword}` //第一种方式
      // axios.get(url)
    }
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
