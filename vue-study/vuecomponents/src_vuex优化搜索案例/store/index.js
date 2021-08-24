//引入并声明使用vuex插件
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const state = {
    isFrist: true,
    isLoading: false,
    users: [],
    errorMsg: ''
}
const mutations = {
    REQUESTING(state) {
        state.isFrist = false
        state.isLoading = true
    },
    REQUESTSUCCESS(state, users) {
        state.isLoading = false
        state.users = users
    },
    REQUESTFAILED(state, error) {
        state.isLoading = false
        state.errorMsg = error.message
    }
}
const actions = {
    async searchAjax({commit}, keyword) {
        commit('REQUESTING')
        try {
            const response = await axios({
                url: 'https://api.github.com/search/users',//与第三种方式配合
                method: 'get',
                params: {
                    q: keyword
                }
            })
            let users = response.data.items.map(item => ({
                username: item.login,
                userurl: item.url,
                userimg: item.avatar_url
            }))
            commit('REQUESTSUCCESS', users)

        } catch (error) {
            commit('REQUESTFAILED', error)
        }
    }
}
const getters = {}

//向外暴露一个store的实例化对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})