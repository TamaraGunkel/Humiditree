<template>
  <div id="app">
    <header>
      <sidemenu> </sidemenu>
    </header>
    <router-view></router-view>
  </div>
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
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #46af10;
    color: #ffffff;
  }
</style>
