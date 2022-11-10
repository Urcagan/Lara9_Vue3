<template>
    <h2> Data 111 DK A</h2>
    <div class="spinner-border" role="status">
        <span class="sr-only"></span>
    </div>
    <div class="list-group">
        <a class="list-group-item" v-for="point in pointData">
            {{point.PI7026A}}
        </a>
    </div>
</template>

<script>
export default {
    name: "DK_A",

    data: function () {
        return {
            pointData: [],
        }
    },

    mounted() {
        this.loadPointData();
    },

    methods: {
        loadPointData: function () {
            axios.get('/api/dk_a_data')
                .then((response) => {
                    this.pointData = response.data.data;

                    console.log(response.data.data)
                })
                .catch(function (error){
                    console.log(error);
                })
        }
    },
}
</script>

<style scoped>

</style>
