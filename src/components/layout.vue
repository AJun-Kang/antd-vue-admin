<template>
    <a-layout style="min-height: 100vh" >
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo">
                <a-image :width="30" src="../static/images/vite.svg" />
                <span v-if="!collapsed" style="margin-left: 20px;">后台管理系统</span>
            </div>
            <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
                @select="select">
                <a-menu-item key="1">
                    <template #icon>
                        <PieChartOutlined />
                    </template>
                    <span>数据可视化</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <template #icon>
                        <DesktopOutlined />
                    </template>
                    <span>表单</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <template #icon>
                        <InboxOutlined />
                    </template>
                    <span>用户列表</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #icon>
                        <MailOutlined />
                    </template>
                    <template #title>二级</template>
                    <a-menu-item key="4">表格</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>三级</template>
                    <a-menu-item key="9">Option 9</a-menu-item>
                    <a-menu-item key="10">Option 10</a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="11">Option 11</a-menu-item>
                        <a-menu-item key="12">Option 12</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding:0 40px;">
                <a-dropdown style="float: right;">
                    <a class="ant-dropdown-link" @click.prevent>
                        Admin
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0">
                                个人信息
                            </a-menu-item>
                            <a-menu-item key="1" @click="out">
                                退出登录
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-layout-header>
            <slot></slot>
            <a-layout-footer style="text-align: center">
                vue-antd-admin
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import {
    PieChartOutlined,
    DesktopOutlined,
    DownOutlined,
    InboxOutlined,
    MailOutlined,
    AppstoreOutlined
} from '@ant-design/icons-vue';
import { ref, reactive } from 'vue';
import router from '../router';
const collapsed = ref<boolean>(false);
const menu_index = localStorage.getItem('menu_index') || false
const state = reactive({
    collapsed: false,
    selectedKeys: menu_index ? [menu_index] : ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});

const out = () => {
    router.push('/login')
    localStorage.clear()
}

const select = (e: any) => {
    localStorage.setItem('menu_index', e.key)
    state.selectedKeys = [e.key]
    switch (e.key) {
        case '1':
            router.push('Home')
            break;
        case '2':
            router.push('Form')
            break;
        case '3':
            router.push('List')
            break;
        case '4':
            router.push('table')
            break;
        default:
            break;
    }

}
</script>
<style scoped>
.logo {
    height: 64px;
    line-height: 64px;
    text-align: center;
    color: #fff;
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}

.ant-dropdown-trigger {
    float: right;
}
</style>
  