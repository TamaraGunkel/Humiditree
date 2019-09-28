<template>
  <b-container id="app" class="p-0">
    <b-row no-gutters>
      <b-col id="header">
        <sidemenu></sidemenu>
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100">
        <l-map id="treemap" :zoom="zoom" :options="{zoomControl: false}" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"/>
          <vue2-leaflet-marker-cluster>
            <l-marker v-for="tree in trees" v-bind:key="tree.id" :lat-lng="getLatLng(tree.lat, tree.lon)">
              <l-icon :icon-anchor="staticAnchor">
                <img src="../assets/leaf-red.png"/>
              </l-icon>
              <l-popup>
                {{tree.species}}
                <p v-if="tree.dryness">
                  Gieß mich!
                </p>
                <p v-else>
                  Hab keinen Durst.
                </p>
                <div id="example-1">
                  <button v-if="tree.dryness" v-on:click=pressButton(tree.id) >Gieß Mich</button>
                </div>
              </l-popup>
            </l-marker>
          </vue2-leaflet-marker-cluster>
        </l-map>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import {latLng, icon} from "leaflet";
    import {LMap, LMarker, LPopup, LTileLayer, LIcon} from "vue2-leaflet";
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

    const API_URL = "http://172.16.2.43:3000/trees";

    export default {
        name: "TreeMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LIcon,
            Vue2LeafletMarkerCluster
        },
        data() {
            return {
                zoom: 18,
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(51.950429, 7.638429),
                center: latLng(51.950429, 7.638429),
                trees: [],
                staticAnchor: [0, 0]
            }
        },
        mounted() {
            fetch(API_URL).then(response => {
                return response.json().then((json) => {
                    this.trees = json.trees
                })
            })
        },
        methods: {
            getLatLng(lat, lon) {
                return latLng(lat, lon);
            },
            pressButton(id) {
              fetch(API_URL + "/water/" + id).then(response => {
                  return response.json().then((json) => {
                      this.trees = json.trees
                  })
              })
          }
        }

    }
</script>

<style>
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

  #treemap {

  }
</style>
