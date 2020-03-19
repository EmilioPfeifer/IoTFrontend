<template>
  <div>
    <div id="lateral" class="md-content main-nav md-scrollbar md-theme-default">
      <div class="main-nav-content">
        <md-button class="md-raised md-primary">Dispositivo 1</md-button>
        <md-button class="md-raised md-primary">Dispositivo 2</md-button>
        <md-button class="md-raised md-primary">Dispositivo 3</md-button>
      </div>
    </div>
    <div class="container">
      <LineChart />
      <div id="especifc">
          <div id="ALeft">
              <p><b>Dispositivo: </b>xxxx</p>
              <p><b>Fecha ult. envio: </b>xx/xx/xxxx</p>
          </div>
          <div id="ARight">
              <p><b>Fecha de Inicio: </b>xx/xx/xxxx</p>
              <p><b>Tiempo de Actividad: </b>xxxx</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./Charts/Lines";

export default {
  components: {
    LineChart
  },
  data() {
    return {};
  }
};
</script>

<style>
#especifc {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 50%;
    height: 150px;
}
#especifc > #ALeft{
    float: left;
}
#especifc > #ARight{
    float: right;
}

</style>