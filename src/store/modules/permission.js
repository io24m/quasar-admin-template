// import Layout from "@/components/layout/Layout"

import constantRouter from '@/router/constantRouter.js'

const state = {
    routers: constantRouter
}
const getters = {
    getRouters(state) {
        return state.routers
    }
}
const mutations = {
    SET_ROUTERS(state, r) {
        state.routers = state.routers.concat(r)
    }
}
const actions = {
    addRouter({
        commit
    }, r) {
        commit("SET_ROUTERS", r)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}