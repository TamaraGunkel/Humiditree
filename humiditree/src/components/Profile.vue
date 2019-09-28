<template>
  <b-container id="app" class="p-0">
    <b-row no-gutters>
      <b-col id="header">
        <sidemenu></sidemenu>
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-grow-1">
      <b-col class="h-100">
        <b-container fluid id="profile">
          <b-row>
            <b-col>
              <b-container class="p-0">
                <b-row id="profile-image" class="mb-0">
                  <b-container>
                    <b-row>
                      <b-col>
                        <img src="../assets/profile-tree.png"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col id="username">
                        <h3>Baumfreund</h3>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-row>
                <b-row>
                  <b-col id="active-field">
                    <p class="text-center">Mitglied seit:</p>
                    <h3 class="text-center">28.09.2019</h3>
                  </b-col>
                  <b-col id="tree-field">
                    <p class="text-center"> Gegossene Bäume:</p>
                    <h3 class="text-center">10</h3>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
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
                  <img src="../assets/Tree_Award2.png"/>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card title="Meine Baumpartenschaften">
                <h3>Du hast leider noch keine Baumpatenschaft abgeschlossen.</h3><img src="../assets/sad.png"/>
              </b-card>
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
  }

  /deep/ .row {
    margin-bottom: 1em;
  }

  #username {
    text-align: center;
  }

  #profile-image {
    background-image: linear-gradient(220deg, #84fab0 0, #8fd3f4 100%);
  }

  #active-field {
    background-color: #84fab0;
  }

  #tree-field {
    background-color: #8fd3f4;
  }

</style>

<style>
  #header {
    height: 0;
    background-color: transparent;
    z-index: 100;
  }
</style>
