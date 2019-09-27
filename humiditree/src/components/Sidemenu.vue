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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
