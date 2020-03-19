<template>
  <div>
    <div id="lateral" class="md-content main-nav md-scrollbar md-theme-default">
      <div class="main-nav-content">
        <md-button class="md-raised md-primary">Modelo</md-button>
        <md-button class="md-raised md-primary">Tipo</md-button>
      </div>
    </div>
    <div class="container">
      <div class="cuadrado">
        <md-card class="md-primary" md-theme="purple-card" md-with-hover>
          <md-ripple>
            <md-card-media>
              <img src="../assets/Disp.png" />
            </md-card-media>
            <md-card-header>
              <div class="md-title">Dispositivo</div>
              <div class="md-subhead">Modelo Especifico</div>
            </md-card-header>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#lateral {
  width: auto;
  padding-top: 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  transition-property: top;
  background-color: #e6e6e6;
}
.container {
  padding-left: 200px;
}
.cuadrado {
  margin: 10px;
  display: block;
}

.main-nav-content > .md-button {
  display: block;
  margin: 0;
  margin-top: 1px;
  width: 200px;
  border: solid;
  border-color: #000000;
}

.cuadrado > .md-card {
  width: 300px;
  float: left;
  margin: 4px;
  vertical-align: top;
}
.md-card-media{
  display: inline-block;
  padding-top: 12px;
  width: 100px;
  height: 100px;
}
</style>