import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    component: Layout,
    meta: {
        icon: "fa-tachometer"
    },
    children: [{
        path: "/",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}];


 

constantRouter.push({
    hidden: true,
    path: '/*',
    redirect: "/404",
    component: Layout,
    meta: {
        icon: 'mdi-school'
    },
    children: [{
        path: "/404",
        component: () => import("@/components/error/Page404")
    }]
});
export default constantRouter