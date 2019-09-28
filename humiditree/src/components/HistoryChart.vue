<script>
    import {Line} from "vue-chartjs";

    export default {
        name: "HistoryChart",
        extends: Line,
        mounted() {
            this.renderChart({
                labels: ['22.09.', '23.09.', '24.09.', '25.09.', '26.09.', '27.09.', '28.09.'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#93fa84',
                        data: [0, 1, 0, 2, 1, 0, 1]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false, legend: {display: false}})
        }
    }
</script>

<style scoped>

</style>
