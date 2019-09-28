<template>
    <div id="box" classname>
        <div id="background">
        <img src="../assets/logo3.png"/>
        </div>
        <input id="input1" v-model="message" placeholder=Benutzername>
        <input id="input2" v-model="message" placeholder="Passwort">
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
#background {
    background: radial-gradient(rgb(211, 255, 141), rgb(203, 255, 81));
    margin-left: auto;
    margin-right: auto;   
    width: 50%;
    display: block;
    border-radius: 10px;
    margin-bottom: 10px;
}
#box {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
    width: 100%;
    text-align: center;
    display: block;
}

img {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: block;

}
</style>