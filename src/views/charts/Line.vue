<template>
    <div id="table4"></div>
</template>
<script setup lang="ts">
import { Chart } from '@antv/g2';
import { nextTick } from 'vue';
// 准备数据
const data4 = [
    { "date": "2011-10-01T00:00:00.000Z", "value": 62.7 },
    { "date": "2011-10-02T00:00:00.000Z", "value": 59.9 },
    { "date": "2011-10-03T00:00:00.000Z", "value": 59.1 },
    { "date": "2011-10-04T00:00:00.000Z", "value": 58.8 },
    { "date": "2011-10-05T00:00:00.000Z", "value": 58.7 },
    { "date": "2011-10-06T00:00:00.000Z", "value": 57 },
    { "date": "2011-10-07T00:00:00.000Z", "value": 56.7 },
    { "date": "2011-10-08T00:00:00.000Z", "value": 56.8 },
    { "date": "2011-10-09T00:00:00.000Z", "value": 56.7 },
    { "date": "2011-10-10T00:00:00.000Z", "value": 60.1 },
    { "date": "2011-10-11T00:00:00.000Z", "value": 61.1 },
    { "date": "2011-10-12T00:00:00.000Z", "value": 61.5 },
    { "date": "2011-10-13T00:00:00.000Z", "value": 64.3 },
    { "date": "2011-10-14T00:00:00.000Z", "value": 67.1 },
    { "date": "2011-10-15T00:00:00.000Z", "value": 64.6 },
    { "date": "2011-10-16T00:00:00.000Z", "value": 61.6 },
    { "date": "2011-10-17T00:00:00.000Z", "value": 61.1 },
    { "date": "2011-10-18T00:00:00.000Z", "value": 59.2 },
    { "date": "2011-10-19T00:00:00.000Z", "value": 58.9 },
    { "date": "2011-10-20T00:00:00.000Z", "value": 57.2 },
    { "date": "2011-10-21T00:00:00.000Z", "value": 56.4 },
    { "date": "2011-10-22T00:00:00.000Z", "value": 60.7 },
    { "date": "2011-10-23T00:00:00.000Z", "value": 65.1 },
    { "date": "2011-10-24T00:00:00.000Z", "value": 60.9 },
    { "date": "2011-10-25T00:00:00.000Z", "value": 56.1 },
    { "date": "2011-10-26T00:00:00.000Z", "value": 54.6 },
    { "date": "2011-10-27T00:00:00.000Z", "value": 56.1 },
    { "date": "2011-10-28T00:00:00.000Z", "value": 58.1 },
    { "date": "2011-10-29T00:00:00.000Z", "value": 57.5 },
    { "date": "2011-10-30T00:00:00.000Z", "value": 57.7 },
    { "date": "2011-10-31T00:00:00.000Z", "value": 55.1 },
    { "date": "2011-11-01T00:00:00.000Z", "value": 57.9 },
    { "date": "2011-11-02T00:00:00.000Z", "value": 64.6 },
    { "date": "2011-11-03T00:00:00.000Z", "value": 56.2 },
    { "date": "2011-11-04T00:00:00.000Z", "value": 50.5 },
    { "date": "2011-11-05T00:00:00.000Z", "value": 51.3 },
    { "date": "2011-11-06T00:00:00.000Z", "value": 52.6 },
    { "date": "2011-11-07T00:00:00.000Z", "value": 51.4 },
    { "date": "2011-11-08T00:00:00.000Z", "value": 50.6 },
    { "date": "2011-11-09T00:00:00.000Z", "value": 54.6 },
    { "date": "2011-11-10T00:00:00.000Z", "value": 55.6 },
    { "date": "2011-11-11T00:00:00.000Z", "value": 53.9 },
    { "date": "2011-11-12T00:00:00.000Z", "value": 54 },
    { "date": "2011-11-13T00:00:00.000Z", "value": 53.8 },
    { "date": "2011-11-14T00:00:00.000Z", "value": 53.5 },
    { "date": "2011-11-15T00:00:00.000Z", "value": 53.4 },
    { "date": "2011-11-16T00:00:00.000Z", "value": 52.2 }
]


const table4 = () => {
    const chart = new Chart({
        container: 'table4',
        theme: 'classic',
    });

    chart
        .line()
        .data(data4)
        .scale('x', { utc: true })
        .scale('y', { nice: true })
        .scale('color', { palette: 'turbo' })
        .encode('x', (d:any) => new Date(d.date))
        .encode('y', 'value')
        .encode('shape', 'hvh')
        .encode('color', 'value')
        .encode('series', () => undefined)
        .style('gradient', 'y')
        .style('lineWidth', 2)
        .style('lineJoin', 'round')
        .axis('x', { title: 'date' });

    chart.render();
}
nextTick(() => {
    table4()
})
</script>

<style scoped></style>
