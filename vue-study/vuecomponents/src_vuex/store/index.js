//引入并声明使用vuex插件
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// state是一个包含多个属性的对象，用来存储数据
const state = {
    count: 0
}
//mutations是一个包含了多个方法的对象，用里面的方法直接去操作数据 方法不能包含 if for 异步
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    ADD(state, v) {
        state.count += v
    }
}
//actions包含多个方法的对象，用来和vue当中用户的操作相关联 方法里面可以包含if for 异步
const actions = {
    increment(context) {
        context.commit('INCREMENT')
    },
    decrement({commit}) {
        commit('DECREMENT')
    },
    incrementIfOdd({commit, state}) {
        if (state.count % 2 === 1) {
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000)
    },
    add({commit}, v) {
        commit('ADD', v)
    }
}
//getters包含了多个方法的对象，每个方法对应一个计算属性的get,就是通过state中的已有数据计算出一个新的属性数据
const getters = {}


//向外暴露一个store的实例化对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})