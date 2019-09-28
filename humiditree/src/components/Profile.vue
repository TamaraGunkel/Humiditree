<template>
  <div id="profile">
    <img src="../assets/profile-tree.jpg"/>
    <p>Baumfreund</p>

    <history-chart></history-chart>

    <!-- Baumpartenschaft -->
  </div>
</template>

<script>
    import HistoryChart from "./HistoryChart";

    export default {
        name: "Profile",
        components: {
            HistoryChart
        }
    }
</script>

<style scoped>
  img {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
