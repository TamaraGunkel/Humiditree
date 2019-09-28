<template>
  <b-container class="p-0 mt-5">
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100 text-center">
        <div id="background">
          <img src="../assets/LogoNeu.png"/>
          
          <h1 id=text>Humiditree</h1>

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

#text{
  font-family: "roboto";
  margin-bottom: 20px;
/*   letter-spacing: 2px;
 */}
  img {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: block;
    margin-bottom: 5px;
    
  }

/*   #background {
    background: #93fa84;
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 3px 5px #ddd;
    box-shadow: 0 1px 3px #ddd;
    width: 50%;
    display: block;
    border-radius: 50%;
    margin-bottom: 40px;
  } */

  body {
    overflow: visible;
    height: 100%;
    width: 100%;
  }

  #loginBtn {
    color: black;
    background-color: #93fa84;
    border-color: #93fa84;
    width: 50%;
  }
</style>
