import Vue from "vue"
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user.js'

Vue.use(Vuex)

const modules = {
    permission,
    user
}

const store = new Vuex.Store({
    modules
})

export default store