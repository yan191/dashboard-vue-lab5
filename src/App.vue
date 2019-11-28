<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style>

#app {
  font-family: 'Roboto', sans-serif, 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-text-field--outlined .v-label {
    left: 0 !important;
    right: auto !important;
}

.v-expansion-panel-content__wrap {
  flex: none !important;
}

.theme--light.v-tabs-items {
  background-color: rgba(255,255,255,0) !important;
}
</style>
