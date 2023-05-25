<template>
    <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>后台</a-breadcrumb-item>
            <a-breadcrumb-item>list</a-breadcrumb-item>
        </a-breadcrumb>
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 2000 }" :expand-column-width="100">
            <template #bodyCell="{ column }">
                <template v-if="column.key === 'action'">
                    <a>Delete</a>
                </template>
            </template>
            <template #expandedRowRender="{ record }">
                <p style="margin: 0">
                    {{ record.description }}
                </p>
            </template>
            <template #expandColumnTitle>
                <span style="color: red">More</span>
            </template>
        </a-table>
    </a-layout-content>
</template>
<script lang="ts" setup>
import data2 from "../list/json";
const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', fixed: true },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Action', key: 'action' },
];

const data: any[] = data2;

</script>
  
  