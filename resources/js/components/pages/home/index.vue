<!--<template>-->
<!--    <h2>Welcome to home pages website</h2>-->
<!--    <div>-->
<!--            <router-link to="/admin/home">Admin dashboard</router-link>-->
<!--    </div>-->
<!--</template>-->

<template>
        <div class="container">
            <h2>Bar Chart</h2>
                <router-link to="/admin/home">Admin dashboard</router-link>
        </div>
<div class="container">
    <Bar :chart-data="chartData" :height="100" :options="{responsive: true, maintainAspectRatio: true}" />

</div>

</template>

<script>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
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
