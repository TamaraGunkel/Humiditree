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
  @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');


 html, body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    font-family: 'Roboto', sans-serif !important;
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
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background: linear-gradient(180deg, rgb(3, 17, 2) 0%, rgb(30, 37, 27) 41%, rgb(30, 37, 27) 60%, rgba(3, 17, 2) 100%);
  }
</style>
