<template>
    <div id="table5"></div>
</template>
<script setup lang="ts">
import { Chart } from '@antv/g2';
import { nextTick } from 'vue';
// 准备数据
const data5 = [
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Wholesale and Retail Trade", "unemployed": 1000 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Manufacturing", "unemployed": 734 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Leisure and hospitality", "unemployed": 782 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Business services", "unemployed": 655 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Construction", "unemployed": 745 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Education and Health", "unemployed": 353 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Government", "unemployed": 430 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Finance", "unemployed": 228 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Self-employed", "unemployed": 239 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Other", "unemployed": 274 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Transportation and Utilities", "unemployed": 236 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Information", "unemployed": 125 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Agriculture", "unemployed": 154 },
    { "date": "2000-01-01T00:00:00.000Z", "industry": "Mining and Extraction", "unemployed": 19 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Wholesale and Retail Trade", "unemployed": 1023 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Manufacturing", "unemployed": 694 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Leisure and hospitality", "unemployed": 779 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Business services", "unemployed": 587 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Construction", "unemployed": 812 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Education and Health", "unemployed": 349 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Government", "unemployed": 409 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Finance", "unemployed": 240 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Self-employed", "unemployed": 262 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Other", "unemployed": 232 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Transportation and Utilities", "unemployed": 223 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Information", "unemployed": 112 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Agriculture", "unemployed": 173 },
    { "date": "2000-02-01T00:00:00.000Z", "industry": "Mining and Extraction", "unemployed": 25 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Wholesale and Retail Trade", "unemployed": 983 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Manufacturing", "unemployed": 739 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Leisure and hospitality", "unemployed": 789 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Business services", "unemployed": 623 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Construction", "unemployed": 669 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Education and Health", "unemployed": 381 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Government", "unemployed": 311 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Finance", "unemployed": 226 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Self-employed", "unemployed": 213 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Other", "unemployed": 247 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Transportation and Utilities", "unemployed": 192 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Information", "unemployed": 140 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Agriculture", "unemployed": 152 },
    { "date": "2000-03-01T00:00:00.000Z", "industry": "Mining and Extraction", "unemployed": 17 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Wholesale and Retail Trade", "unemployed": 793 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Manufacturing", "unemployed": 736 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Leisure and hospitality", "unemployed": 658 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Business services", "unemployed": 517 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Construction", "unemployed": 447 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Education and Health", "unemployed": 329 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Government", "unemployed": 269 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Finance", "unemployed": 197 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Self-employed", "unemployed": 218 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Other", "unemployed": 240 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Transportation and Utilities", "unemployed": 191 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Information", "unemployed": 95 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Agriculture", "unemployed": 135 },
    { "date": "2000-04-01T00:00:00.000Z", "industry": "Mining and Extraction", "unemployed": 20 },
    { "date": "2000-05-01T00:00:00.000Z", "industry": "Wholesale and Retail Trade", "unemployed": 821 },
    { "date": "2000-05-01T00:00:00.000Z", "industry": "Manufacturing", "unemployed": 685 },
    { "date": "2000-05-01T00:00:00.000Z", "industry": "Leisure and hospitality", "unemployed": 675 },
]

const table5 = () => {
    const chart = new Chart({
        container: 'table5',
        theme: 'classic',
    });

    chart.data({
        value: data5,
    });

    chart
        .area()
        .transform([
            { type: 'stackY' }, // Try to remove this line.
        ])
        .encode('x', (d: any) => new Date(d.date))
        .encode('y', 'unemployed')
        .encode('color', 'industry')
        .encode('shape', 'smooth');
    chart.render();
}
nextTick(() => {
    table5()
})
</script>

<style scoped></style>
