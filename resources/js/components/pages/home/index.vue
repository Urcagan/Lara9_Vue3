<!--<template>-->
<!--    <h2>Welcome to home pages website</h2>-->
<!--    <div>-->
<!--            <router-link to="/admin/home">Admin dashboard</router-link>-->
<!--    </div>-->
<!--</template>-->

<template>
        <div class="container">
            <h2>Bar Chart</h2>
                <router-link to="/DK_A/home">111 ДК-1А</router-link>
        </div>
<div class="container">
    <Bar :chart-data="chartData" :height="100" :options="{responsive: true, maintainAspectRatio: true}" />

</div>
<DK_A></DK_A>
</template>

<script>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

import DK_A from "../home/DK_A.vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar, DK_A },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12]
                    }
                ]
            }
        }
    }
}
</script>
