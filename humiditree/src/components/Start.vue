<template>
  <b-container class="p-0 mt-5">
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100 text-center">
        <div id="background">
          <img src="../assets/logo3.png"/>
        </div>
        <b-form-input class="w-50 mx-auto mb-2" v-model="message" placeholder=Benutzername></b-form-input>
        <b-form-input type="password" class="w-50 mx-auto mb-3" v-model="message" placeholder="Passwort"></b-form-input>
        <router-link to="/map">
          <b-button id="loginBtn">Login</b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "Start"
    }
</script>

<style scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: block;

  }

  #background {
    background: radial-gradient(rgb(199, 229, 151), rgb(196, 224, 129));
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 3px 5px #ddd;
    box-shadow: 0 1px 3px #ddd;
    width: 80%;
    display: block;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  body {
    overflow: visible;
    height: 100%;
    width: 100%;
  }

  #loginBtn {
    color: black;
    background-color: rgb(196, 224, 129);
    border-color: rgb(196, 224, 129);
  }
</style>
