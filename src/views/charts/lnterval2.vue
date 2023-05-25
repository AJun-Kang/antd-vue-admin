<template>
    <div id="table2"></div>
</template>
<script setup lang="ts">
import { Chart } from '@antv/g2';
import { nextTick } from 'vue';
// 准备数据

const data2 = [
    { "gender": "female", "height": 161.2, "weight": 51.6 },
    { "gender": "female", "height": 167.5, "weight": 59 },
    { "gender": "female", "height": 159.5, "weight": 49.2 },
    { "gender": "female", "height": 157, "weight": 63 },
    { "gender": "female", "height": 155.8, "weight": 53.6 },
    { "gender": "female", "height": 170, "weight": 59 },
    { "gender": "female", "height": 159.1, "weight": 47.6 },
    { "gender": "female", "height": 166, "weight": 69.8 },
    { "gender": "female", "height": 176.2, "weight": 66.8 },
    { "gender": "female", "height": 160.2, "weight": 75.2 },
    { "gender": "female", "height": 172.5, "weight": 55.2 },
    { "gender": "female", "height": 170.9, "weight": 54.2 },
    { "gender": "female", "height": 172.9, "weight": 62.5 },
    { "gender": "female", "height": 153.4, "weight": 42 },
    { "gender": "female", "height": 160, "weight": 50 },
    { "gender": "female", "height": 147.2, "weight": 49.8 },
    { "gender": "female", "height": 168.2, "weight": 49.2 },
    { "gender": "female", "height": 175, "weight": 73.2 },
    { "gender": "female", "height": 157, "weight": 47.8 },
    { "gender": "female", "height": 167.6, "weight": 68.8 },
    { "gender": "female", "height": 159.5, "weight": 50.6 },
    { "gender": "female", "height": 175, "weight": 82.5 },
    { "gender": "female", "height": 166.8, "weight": 57.2 },
    { "gender": "female", "height": 176.5, "weight": 87.8 },
    { "gender": "male", "height": 174, "weight": 71 },
    { "gender": "male", "height": 184, "weight": 79.6 },
    { "gender": "male", "height": 192.7, "weight": 93.8 },
    { "gender": "male", "height": 171.5, "weight": 70 },
    { "gender": "male", "height": 173, "weight": 72.4 },
    { "gender": "male", "height": 176, "weight": 85.9 },
    { "gender": "male", "height": 176, "weight": 78.8 },
    { "gender": "male", "height": 180.5, "weight": 77.8 },
    { "gender": "male", "height": 172.7, "weight": 66.2 },
    { "gender": "male", "height": 176, "weight": 86.4 },
    { "gender": "male", "height": 173.5, "weight": 81.8 },
    { "gender": "male", "height": 178, "weight": 89.6 },
    { "gender": "male", "height": 180.3, "weight": 82.8 },
    { "gender": "male", "height": 180.3, "weight": 76.4 },
    { "gender": "male", "height": 164.5, "weight": 63.2 },
    { "gender": "male", "height": 173, "weight": 60.9 },
    { "gender": "male", "height": 183.5, "weight": 74.8 },
    { "gender": "male", "height": 175.5, "weight": 70 },
]

const table2 = () => {
    const chart = new Chart({
        container: 'table2',
        theme: 'classic',
    });
    chart
        .point()
        .data(data2)
        .encode('x', 'height')
        .encode('y', 'weight')
        .encode('color', 'gender');

    chart.render();
}
nextTick(()=>{
    table2()
})
</script>

<style scoped></style>
