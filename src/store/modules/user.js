import { getToken, setToken } from '@/utils/auth.js'
import request from '@/utils/request.js'
const state = {
    token: getToken(),
    authData: null,
    user: {
        name: "Lee"
    }
}
const getters = {
    getUser(state) {
        return state.user
    },
    getUserNameFirst() {
        return state.user.name && state.user.name.length > 0 && state.user.name[0]
    }
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
}
const actions = {
    login({ commit }, user) {
        const { userName, password } = user
        return new Promise((resolve, reject) => {
            request({
                url: '/login',
                method: 'post',
                data: {
                    userName,
                    password
                }
            }).then(function (res) {
                if (res.success) {
                    commit('SET_TOKEN', res.result)
                    setToken(res.result)
                    resolve(res)
                } else {
                    reject(res)
                }
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    // authData({ commit }, user) {
    //     return new Promise((resolve, reject) => {

    //     })
    // }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}