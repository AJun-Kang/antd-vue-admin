<template>
        <a-layout-content style="margin: 0 16px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>后台</a-breadcrumb-item>
                <a-breadcrumb-item>可视化</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="tables">
                <interval></interval>
                <interval2></interval2>
                <interval3></interval3>
                <Line></Line>
                <Area></Area>
                <Pie></Pie>
            </div>
        </a-layout-content>
</template>
<script lang="ts" setup>
import interval from '../views/charts/lnterval.vue'
import interval2 from '../views/charts/lnterval2.vue'
import interval3 from '../views/charts/lnterval3.vue'
import Line from '../views/charts/Line.vue'
import Area from '../views/charts/Area.vue'
import Pie from '../views/charts/Pie.vue'
</script>
<style scoped>
.tables {
    padding: 24px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
}
</style>
  


  