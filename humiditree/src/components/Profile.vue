<template>
  <b-container fluid id="profile">
    <b-row>
      <b-col>
        <b-container class="p-0">
          <b-row id="profile-image" class="mb-0">
            <b-container>
              <b-row>
                <b-col>
                  <img id=tree src="../assets/profile-tree.png"/>
                </b-col>
              </b-row>
              <b-row>
                <b-col id="username">
                  <h1 id=text>Baumfreund</h1>
                </b-col>
              </b-row>
            </b-container>
          </b-row>
          <b-row>
            <b-col>
              <b-card title="Meine Gießhistorie">
                <b-card-text>
                  <history-chart></history-chart>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card title="Meine Auszeichnungen">
                <b-card-text>
                  <img src="../assets/first_tree.png"/>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card title="Meine Baumpartenschaften"></b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
    import HistoryChart from "./HistoryChart";
    import Sidemenu from "./Sidemenu";

    export default {
        name: "Profile",
        components: {
            HistoryChart,
            Sidemenu
        }
    }
</script>

<style scoped>
  img {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

  }

  

  /deep/ .row {
    margin-bottom: 1em;
  }

  #username {
    text-align: center;
    
  }

  #profile-image {
    background-image: linear-gradient(220deg, #84fab0 0, #8fd3f4 100%);
    box-shadow: inset 0 3px 5px rgb(119, 119, 119);
  }

  #active-field {
    background-color: #84fab0;
  }

  #tree-field {
    background-color: #8fd3f4;
  }

  #text {

      font-family: calibri;
  }

</style>

<style>
  #header {
    height: 0;
    background-color: transparent;
    z-index: 100;
  }
</style>
