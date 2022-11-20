<template>

    <div class="container">
        <h2>Line Chart</h2>
        <router-link to="/">Home page</router-link>
    </div>


    <div class="container">
        <div :class="{'d-flex justify-content-center mt-5': !loaded}">
            <div :class="{'spinner-border text-primary': !loaded} " role="status"></div>
            <!-- ! Значек процесса загрузки -->
        </div>
        <Line v-if="loaded" :chart-data="chartData" :height="100" :options="chartOptions" />

    </div>

</template>

<script>
// DataPage.vue
// import { Line } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
//
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import 'chart.js/auto';
import {Line} from 'vue-chartjs'
import {Chart , Title} from "chart.js";

Chart.defaults.elements.line.borderWidth = 1 // Задает глобальное значение толщины всех линий
Chart.defaults.elements.point.radius = 1  // Задает глобальное значение радиуса точки

export default {
    name: 'BarChart',
    components: {Line},

    data() {
        return {
            loaded: false,   // ! Признак загрузки данных //

            pointData: [],
            // chartData: {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June',  ],
            // labels: ['2022-09-01 00:00:00.000', '2022-09-01 02:00:00.000', '2022-09-01 04:00:00.000', '2022-09-01 06:00:00.000', '2022-09-01 08:00:00.000', '2022-09-01 10:00:00.000',],
            // datasets: [
            //     {
            //         label: 'Data 1',
            //         backgroundColor: 'rgb(255, 99, 132)',
            //         borderColor: 'rgb(255, 99, 132)',
            // data: [0, 10, 5, 2, 20, 30, 45],
            // data: [1.6919258832931519, 1.6673653125762939, 1.6467424631118774, 1.6274768114089966, 1.6357301473617554, 1.6665645837783813,]
            // data: this.pointData.map(n => n.PI7026A),
            //         },
            //     ]
            // }
            labels: [],

        }
    },

    async mounted() {
        this.loadPointData();

    },

    methods: {
        loadPointData: function () {
            axios.get('/api/dk_a_data')
                .then((response) => {
                    this.pointData = response.data.data;
                    // this.loading = false;
                    this.loaded = true
                    this.labels = this.pointData.map(n => n.LocalTime);
                    console.log(this.labels.length)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    computed: {

        chartData() {
            return {
                // labels: ['2022-09-01 00:00:00.000', '2022-09-01 02:00:00.000', '2022-09-01 04:00:00.000', '2022-09-01 06:00:00.000', '2022-09-01 08:00:00.000', '2022-09-01 10:00:00.000',],
                labels: this.pointData.map(n => n.LocalTime),

                datasets: [


                    {
                        label: 'PI7026A',
                        backgroundColor: '#FF6384FF',
                        borderColor: '#FF6384FF',
                        // data: [1.6919258832931519, 1.6673653125762939, 1.6467424631118774, 1.6274768114089966, 1.6357301473617554, 1.6665645837783813,],
                        data: this.pointData.map(n => +n.PI7026A),
                        // borderWidth: 1,
                        // radius: 0, // Задает радиус точки
                        yAxisID: 'left-y-axis'
                    },
                    {
                        label: 'PI7028A',
                        backgroundColor: 'rgb(79,156,243)',
                        borderColor: 'rgb(79,156,243)',
                        // data: [1.6919258832931519, 1.6673653125762939, 1.6467424631118774, 1.6274768114089966, 1.6357301473617554, 1.6665645837783813,],
                        data: this.pointData.map(n => +n.PI7028A),
                        // borderWidth: 1,
                        // radius: 0,
                        yAxisID: 'left-y-axis'
                    },
                    {
                        label: 'PDI7013A',
                        backgroundColor: 'rgb(52,208,42)',
                        borderColor: 'rgb(52,208,42)',
                        // data: [1.6919258832931519, 1.6673653125762939, 1.6467424631118774, 1.6274768114089966, 1.6357301473617554, 1.6665645837783813,],
                        data: this.pointData.map(n => +n.PDI7013A),
                        // borderWidth: 1,
                        // radius: 0,
                        yAxisID: 'right-y-axis'
                    },
                ],
            }
            /* mutable chart data */
        },

        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    'left-y-axis': {
                        type: 'linear',
                        position: 'left'
                    },
                    'right-y-axis': {
                        type: 'linear',
                        position: 'right'
                    },

                },


            }/* mutable chart options */
        },

    }
}
</script>
