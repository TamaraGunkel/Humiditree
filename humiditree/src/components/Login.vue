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
    
    background-repeat: no-repeat;
/*     background-image: url("../assets/wood.jpg");
 */    background-size: contain;
    
    background-position: center center;
    background-repeat: no-repeat;

    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
    width: 100%;
    text-align: center;
    display: block;

}

 #input1 {
     height: 25px;
     width: 50%;
     margin-bottom: 0px;
     margin-top: 40px;
     border: 0.2px solid  rgba(0, 0, 0, 0.11);
     box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.308);
 

}

#input2 {
     height: 25px;
     width: 50%;
     margin-bottom: 30px;
     margin-top: 10px;
     border: 0.2px solid  rgba(0, 0, 0, 0.11);
     box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.308);
 

}

img {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: block;

}
</style>