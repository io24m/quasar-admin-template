import Vue from "vue"
import Router from "vue-router"
import constantRouter from './constantRouter.js'
import { LoadingBar } from 'quasar'


// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// import {
//     getToken
// } from '@/utils/auth.js'

// import settings from '@/settings.js'

// NProgress.configure({
//     showSpinner: false
// })

Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: constantRouter
})

const router = createRouter()

router.beforeEach(async (to, from, next) => {
    LoadingBar.start()

    //NProgress.start()
    // document.title = to.meta && to.meta.title || settings.app.title
    // const token = getToken()
    // if (!token) {
    //     if (to.path === '/login') {
    //         next()
    //     } else {
    //         next(`/login`)
    //        // NProgress.done()
    //     }
    //     return
    // }
    // if (to.path === '/login') {
    //     next()
    //     // next("/")
    //     //NProgress.done()
    //     return
    // }
    //auth
    
    next()
});
router.afterEach(() => {
    //NProgress.done()
    LoadingBar.stop()
})

export default router