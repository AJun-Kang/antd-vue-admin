<template>
    <div id="table1"></div>
</template>
<script setup lang="ts">
import { Chart } from '@antv/g2';
import { nextTick } from 'vue';
// 准备数据
const data1 = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
];

const table1 = () => {
    // 初始化图表实例
    const chart = new Chart({
        container: 'table1',
        theme: 'classic',
    });

    // 声明可视化
    chart
        .interval() // 创建一个 Interval 标记
        .data(data1) // 绑定数据
        .encode('x', 'genre') // 编码 x 通道
        .encode('y', 'sold'); // 编码 y 通道

    // 渲染可视化
    chart.render();
}
nextTick(()=>{
    table1()
})
</script>

<style scoped></style>
