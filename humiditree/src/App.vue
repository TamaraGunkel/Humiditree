<template>
  <b-container id="app" class="p-0">
    <b-row no-gutters>
      <b-col id="header">
        <sidemenu></sidemenu>
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
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

  main {
    text-align: center;
    margin-top: 56px;
  }

  #header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #46af10;
    color: #ffffff;
  }
</style>
