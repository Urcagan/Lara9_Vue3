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
        <Line v-if="loaded" :chart-data="chartData"
              :chart-options="chartOptions"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
        />

    </div>

</template>

<script>

// import 'chart.js/auto'; // используется при леннивом спосоде
import {Line} from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, LineElement,LinearScale, PointElement,CategoryScale } from 'chart.js'
//  Title, Tooltip, Legend, LineElement,LinearScale, PointElement,CategoryScale, Plugin

ChartJS.register(Title,Tooltip,Legend,LineElement,LinearScale,PointElement,CategoryScale)
// Title,Tooltip,Legend,LineElement,LinearScale,PointElement,CategoryScale

ChartJS.defaults.elements.line.borderWidth = 1 // Задает глобальное значение толщины всех линий
ChartJS.defaults.elements.point.radius = 1  // Задает глобальное значение радиуса точки
ChartJS.defaults.elements.line.fill = false;
//ChartJS.defaults.backgroundColor = 'rgb(211,27,27)' // заливка линии по умолчанию если нету св-ва backgroundColor:


export default {
    name: 'LineChart',
    components: {Line},
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 150
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            loaded: false,   // ! Признак загрузки данных //
            // chartData: null,

            labelsData: [],
            dataPiont: [],

            localTime: [],
            PI7026A: [],
            PI7028A: [],
            PDI7013A: [],
            ZVI7000A: [],
            ZVI7001A: [],
            ZVI7002A: [],
            ZVI7003A: [],
            KVI7000A: [],
            XVI7000A: [],
            XVI7001A: [],
            XVI7002A: [],
            XVI7003A: [],
            XVI7004A: [],
            XVI7005A: [],
            XVI7006A: [],
            XVI7007A: [],
            TI7006A: [],
            TI7007A: [],
            TI7008A: [],
            TI7009A: [],
            TI7010A: [],
            TI7011A: [],
            TI7012A: [],
            TI7013A: [],
            TI7014A: [],
            TI7015A: [],
            TI7043A: [],
            LI7008A: [],

            // chartOptions: {
            //     responsive: true,
            //     title: {
            //         display: true,
            //         text: 'МГК 111-Н1А'
            //     },
            // }
        }
    },

    async mounted() {
        this.loaded = false

        this.loadPointData();
    },

    methods: {
        loadPointData: function () {

            if(this.chartData != null) {
                this.chartData.des
            }

            axios.get('/api/dk_a_data')
                .then((response) => {
                    this.pointData = response.data.data;

                    this.localTime = response.data.data.map(item => { return item.LocalTime });
                    this.PI7026A = response.data.data.map(item => { return item.PI7026A });
                    this.PI7028A = response.data.data.map(item => { return item.PI7028A });
                    this.PDI7013A = response.data.data.map(item => { return item.PDI7013A });
                    this.ZVI7000A= response.data.data.map(item => { return item.ZVI7000A });
                    this.ZVI7001A= response.data.data.map(item => { return item.ZVI7001A });
                    this.ZVI7002A= response.data.data.map(item => { return item.ZVI7002A });
                    this.ZVI7003A= response.data.data.map(item => { return item.ZVI7003A });
                    this.KVI7000A= response.data.data.map(item => { return item.KVI7000A });
                    this.XVI7000A= response.data.data.map(item => { return item.XVI7000A });
                    this.XVI7001A= response.data.data.map(item => { return item.XVI7001A });
                    this.XVI7002A= response.data.data.map(item => { return item.XVI7002A });
                    this.XVI7003A= response.data.data.map(item => { return item.XVI7003A });
                    this.XVI7004A= response.data.data.map(item => { return item.XVI7004A });
                    this.XVI7005A= response.data.data.map(item => { return item.XVI7005A });
                    this.XVI7006A= response.data.data.map(item => { return item.XVI7006A });
                    this.XVI7007A= response.data.data.map(item => { return item.XVI7007A });
                    this.TI7006A= response.data.data.map(item => { return item.TI7006A });
                    this.TI7007A= response.data.data.map(item => { return item.TI7007A });
                    this.TI7008A= response.data.data.map(item => { return item.TI7008A });
                    this.TI7009A= response.data.data.map(item => { return item.TI7009A });
                    this.TI7010A= response.data.data.map(item => { return item.TI7010A });
                    this.TI7011A= response.data.data.map(item => { return item.TI7011A });
                    this.TI7012A= response.data.data.map(item => { return item.TI7012A });
                    this.TI7013A= response.data.data.map(item => { return item.TI7013A });
                    this.TI7014A= response.data.data.map(item => { return item.TI7014A });
                    this.TI7015A= response.data.data.map(item => { return item.TI7015A });
                    this.TI7043A= response.data.data.map(item => { return item.TI7043A });
                    this.LI7008A= response.data.data.map(item => { return item.LI7008A });

                    // console.log(this.PI7026A)

                    // this.labelsData = this.pointData.map(n => n.LocalTime);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(() => (this.loaded = true))
        }
    },

    computed: {

        chartData() {
            return {
                labels: this.localTime,
                // labels: this.pointData.map(n => n.LocalTime),

                datasets: [
                    {
                        label: 'PI7026A',
                        backgroundColor: '#63faff',
                        borderColor: '#63faff',
                        data: this.PI7026A,
                        // data: this.pointData.map(n => +n.PI7026A),
                        // borderWidth: 1,
                        // radius: 0, // Задает радиус точки
                        yAxisID: 'left-y-axis'
                    },
                    {
                        label: 'PI7028A',
                        backgroundColor: 'rgb(245,235,89)',
                        borderColor: 'rgb(245,235,89)',
                        data: this.PI7028A ,
                        yAxisID: 'left-y-axis'
                    },
                    {
                        label: 'PDI7013A',
                        backgroundColor: 'rgb(52,208,42)',
                        borderColor: 'rgb(52,208,42)',
                        data: this.PDI7013A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'ZVI7000A',
                        backgroundColor: '#2ad0b2',
                        borderColor: '#D0B42AFF',
                        data: this.ZVI7000A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'ZVI7001A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.ZVI7001A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'ZVI7002A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.ZVI7002A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'ZVI7003A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.ZVI7003A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'KVI7000A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.KVI7000A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'XVI7000A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.XVI7000A,
                        yAxisID: 'right-y-axis'
                    },
                    {
                        label: 'XVI7001A',
                        backgroundColor: '#D0B42AFF',
                        borderColor: '#D0B42AFF',
                        data: this.XVI7001A,
                        yAxisID: 'right-y-axis'
                    },


                    // XVI7002A
                    // XVI7003A
                    // XVI7004A
                    // XVI7005A
                    // XVI7006A
                    // XVI7007A
                    // TI7006A
                    // TI7007A
                    // TI7008A
                    // TI7009A
                    // TI7010A
                    // TI7011A
                    // TI7012A
                    // TI7013A
                    // TI7014A
                    // TI7015A
                    // TI7043A
                    // LI7008A

                ],
            }
            /* mutable chart data */
        },

        chartOptions() {
            return {

                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: 'МГК 111-Н1А'
                },

                // scales: {
                //     'left-y-axis': {
                //         type: 'linear',
                //         position: 'left'
                //     },
                //     'right-y-axis': {
                //         type: 'linear',
                //         position: 'right'
                //     },
                // },

                // scales: {
                //     x: {
                //         title: {
                //             display: true,
                //             text: 'Month'
                //         }
                //     },
                //     y: {
                //         title: {
                //             display: true,
                //             text: 'Value'
                //         },
            }/* mutable chart options */
        },

    }
}
</script>
