<template>
  <Slide id="sidemenu">
    <a id="profile" href="#">
      <span>Profil</span>
    </a>
    <a id="map" href="#">
      <span>Übersichtskarte</span>
    </a>
  </Slide>
</template>

<script>
    import {Slide} from 'vue-burger-menu'

    export default {
        name: 'sidemenu',
        components: {
            Slide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .bm-burger-button {
    top: 13px;
    left: 13px;
  }
</style>
