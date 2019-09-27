<template>
  <Slide id="sidemenu">
    <router-link to="/profile">
      Profil
    </router-link>
    <router-link to="/">
      Übersichtskarte
    </router-link>
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
