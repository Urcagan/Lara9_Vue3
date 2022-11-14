<template>

    <div class="container">
        <h2>Line Chart</h2>
        <router-link to="/">Home page</router-link>
    </div>


    <div class="container">
        <Line :chart-data="chartData" :height="100" :options="{responsive: true, maintainAspectRatio: true}" />

    </div>

</template>

<script>
// DataPage.vue
// import { Line } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
//
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import 'chart.js/auto';
import { Line } from 'vue-chartjs'

export default {
    name: 'BarChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
                datasets: [
                    {
                        label: 'Data 1',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45],
                    },
                    {
                        label: 'Data 0',
                        backgroundColor: 'rgb(25, 99, 132)',
                        borderColor: 'rgb(25, 99, 132)',
                        data: [10, 15, 15, 20, 2, 5, 4],
                    }
                ]
            }
        }
    }
}
</script>
