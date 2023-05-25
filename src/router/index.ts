import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';
import Form from '../views/form/form.vue'
import List from '../views/list/list.vue'
import table from '../views/table/table.vue'
import List2 from '../views/table/table.vue'
import index from '../views/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
    },
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: '数据可视化',
                    keepAlive: true
                },
            },
            {
                path: '/form',
                name: 'Form',
                component: Form,
                meta: {
                    title: '表单',
                },
            },
            {
                path: '/list',
                name: 'List',
                meta: {
                    title: '用户表格',
                },
                component: List,
            },
            {
                path: '/table',
                name: 'table',
                meta: {
                    title: 'table表格',
                },
                component: table,
            },
            {
                path: '/list2',
                name: 'List2',
                component: List2,
                meta: {
                    title: '表格2',
                },
                children: []
            },
        ]
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log("页面传递参数:");
    console.log(from);
    document.title = `${to.meta.title} | antd-admin`;
    const role = localStorage.getItem('username');
    if (!role && to.path !== '/login') {
        console.log("去登录");
        next('/login');
    } else if (to.meta.permiss) {
        // 如果没有权限，则进入403
        // next('/403');
    } else {
        next();
    }
});

export default router;
