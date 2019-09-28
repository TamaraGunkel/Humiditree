<template>
  <router-view></router-view>
</template>

<script>
    import Sidemenu from './components/Sidemenu'

    export default {
        name: 'app',
        components: {
            Sidemenu
        }
    }
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
