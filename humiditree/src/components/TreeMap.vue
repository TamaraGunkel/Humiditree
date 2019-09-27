<template>
  <l-map id="treemap" :zoom="zoom" :options="{zoomControl: false}" :center="center">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker v-for="tree in trees" :lat-lng="getLatLng(tree.lat, tree.lon)">
      <l-popup>
        {{tree.species}}
        <p v-if="tree.dryness">
          Gieß mich!
        </p>
        <p v-else>
          Hab keinen Durst.
        </p>

      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
    import { latLng } from "leaflet";
    import {LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";
    const trees = require('../json/trees.json').trees;

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
                center: latLng(51.950429, 7.638429),
                trees: trees
            }
        },
        methods: {
            getLatLng(lat, lon) {
                return latLng(lat, lon);
            }
        }
    }
</script>

<style scoped>

</style>
