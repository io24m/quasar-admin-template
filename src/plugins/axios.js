import Vue from 'vue'
import request from '@/utils/request.js'

const axiosPlugin = {
    install(Vue, instance) {
        if (this.installed) {
            return
        }
        this.installed = true

        if (!instance) {
            console.error('not axios instance')
            return
        }

        Vue.axios = instance

        Object.defineProperties(Vue.prototype, {
            axios: {
                get: function get() {
                    return instance
                }
            },
            $http: {
                get: function get() {
                    return instance
                }
            }
        })
    }
}

Vue.use(axiosPlugin, request)