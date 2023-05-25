<template>
    <div id="table6"></div>
</template>
<script setup lang="ts">
import { Chart } from '@antv/g2';
import { nextTick } from 'vue';
// 准备数据
const data6 = [
    { id: '支付宝', value: 526 },
    { id: '微信', value: 220 },
    { id: '银联', value: 325 },
    { id: '苹果', value: 561 },
    { id: '其他', value: 54 },
];

const table6 = () => {
    const chart = new Chart({
        container: 'table6',
        theme: 'classic',
        width: 500,
        height: 400,
    });

    chart.coordinate({ type: 'theta', innerRadius: 0.25, outerRadius: 0.8 });

    chart
        .interval()
        .data(data6)
        .transform({ type: 'stackY' })
        .encode('y', 'value')
        .encode('color', 'id')
        .scale('color', {
            range: ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'],
        })
        .label({
            text: 'value',
            style: {
                fontWeight: 'bold',
                offset: 14,
            },
        })
        .label({
            text: 'id',
            position: 'spider',
            connectorDistance: 0,
            style: {
                fontWeight: 'bold',
                textBaseline: 'bottom',
                textAlign: (d:any) => (['c', 'sass'].includes(d.id) ? 'end' : 'start'),
                dy: -4,
            },
        })
        .style('radius', 4)
        .style('stroke', '#fff')
        .style('lineWidth', 2)
        .animate('enter', { type: 'waveIn' })
        .legend(false);

    chart.render();
}
nextTick(() => {
    table6()
})
</script>

<style scoped></style>
