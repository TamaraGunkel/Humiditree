<template>
  <b-container id="app" class="p-0">
    <b-row no-gutters>
      <b-col id="headerMap">
        <sidemenu></sidemenu>
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100">
        <l-map id="treemap" :zoom="zoom" :options="{zoomControl: false}" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"/>
          <vue2-leaflet-marker-cluster>
            <l-marker v-for="tree in trees" v-bind:key="tree.id" :lat-lng="getLatLng(tree.lat, tree.lon)">
              <l-icon v-if="tree.dryness==1" :icon-anchor="anchor1">
                <img src="../assets/watering-can-30.png"/>
              </l-icon>
              <l-icon v-if="tree.dryness==0" :icon-anchor="anchor2">
                <img src="../assets/tree-64.png"/>
              </l-icon>
              <l-popup>
                <h4>{{tree.species}}</h4>
                <img class="w-75 mx-auto d-block" v-if="tree.id == 0" src="../assets/kastanie.jpg"/>
                <p class="mb-0">Alter: {{tree.age}}</p>
                <p class="mt-0">Zuletzt gegossen: {{tree.last_watered}}</p>
                <p v-if="!tree.dryness">
                  Danke, ich bin versorgt!
                </p>
                <div id="example-1">
                  <b-button size="sm" class="waterBtn" v-if="tree.dryness" v-on:click=pressButton(tree.id)>Hab's gegossen</b-button>
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
    import Sidemenu from "./Sidemenu";

    const API_URL = "http://172.16.2.43:3000/trees";

    export default {
        name: "TreeMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LIcon,
            Vue2LeafletMarkerCluster,
            Sidemenu
        },
        data() {
            return {
                zoom: 18,
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(51.950429, 7.638429),
                center: latLng(51.950429, 7.638429),
                trees: [],
                staticAnchor: [0, 0],
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
            },
        },
        computed: {
            anchor1() {
                let size = 30;
                return [0, size / 4];
            },
            anchor2() {
                let size = 64;
                return [size / 2 + 4, size * 0.9];
            }
        },
    }
</script>

<style>
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";


  #headerMap {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background: #93fa84;
  }

  /deep/ .leaflet-container {
    font-family: 'Roboto', sans-serif;
  }

  #headerMap .bm-burger-bars {
    box-shadow: none;
    background-color: black;
  }

  .waterBtn {
    color: black;
    background-color: #8fd3f4;
    border-color: #8fd3f4;
  }

</style>
