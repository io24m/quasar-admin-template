import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    component: Layout,
    meta: {
        icon: "mail"
    },
    children: [{
        path: "/",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    name: "图标",
    path: "/icons",
    component: Layout,
    meta: {
        icon: "mail"
    },
    children: [{
        name: "图标1",
        path: "/icons",
        component: () => import("@/views/icons/Icons"),
        meta: {
            icon: "5g"
        },
    }, {
        name: "图标1",
        path: "/icons",
        component: () => import("@/views/icons/Icons"),
        meta: {
            icon: "access_alarm"
        },
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