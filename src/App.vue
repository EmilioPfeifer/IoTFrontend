<template>
  <div id="app">
    <div id="tabs">
      <md-tabs class="md-primary" md-sync-route>
        <md-tab id="tab-1" md-label="Reportes" to="/" exact></md-tab>
        <md-tab id="tab-2" md-label="Dispositivos" to="/Dispositivos"></md-tab>
        <md-tab id="tab-3" md-label="Dashboard" to="/Dashboard"></md-tab>
        <md-tab id="tab-4" md-label="Alertas" to="/Alertas"></md-tab>
      </md-tabs>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tabs {
  border: solid;
  border-color: #084B8A;
}
</style>
