<template>
  <l-map id="treemap" :zoom="zoom" :options="{zoomControl: false}" :center="center">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker :lat-lng="withPopup">
      <l-popup>
        Trockenheitslvl 3 <br> <a href="#">Kirschbaum</a>
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
    import { latLng } from "leaflet";
    import {LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";

    export default {
        name: "TreeMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        data() {
            return {
                zoom: 18,
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution:  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(51.950429, 7.638429),
                center: latLng(51.950429, 7.638429)
            }
        }
    }
</script>

<style scoped>

</style>
