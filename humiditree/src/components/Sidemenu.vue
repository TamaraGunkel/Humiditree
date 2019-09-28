<template>
  <Slide id="sidemenu">
    <router-link to="/profile" class="pb-0">
      <h1 class="text">Profil</h1>
    </router-link>
    <router-link to="/map">
      <h1 class="text">Karte</h1>
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
    height: 25px;
    width: 33px;
    top: 14px;
    left: 15px;
  }

  /deep/ .bm-burger-bars {
    background-color: #fdfdfdfd;
  }

  /deep/ .line-style {
    height: 15%;
    border-radius: 5px;
    box-shadow: 0.4px 0.4px 0.4px rgba(0, 0, 0, 0.582);

  }

  /deep/ .bm-menu {
    background-color: #84fab0;
    top: 0;
    left: 0;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .2);
    padding-top: 20px;
  }

  /deep/ .bm-item-list {
    margin-left: 20px;
  }

  /deep/ .bm-cross {
    background: white;
  }

  .text {
    font-size: 25px;
    color: white;
  }

  .text:hover {
    color: green;
  }
</style>
