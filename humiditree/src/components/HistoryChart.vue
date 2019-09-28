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
                        backgroundColor: '#55f89c',
                        data: [0, 1, 0, 2, 1, 0, 1]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    }
</script>

<style scoped>

</style>
