<template>
  <div>
    <div id="lateral" class="md-content main-nav md-scrollbar md-theme-default">
      <H3>Filtros: </h3>
      <div class="main-nav-content">
        <md-button class="md-raised">+</md-button>
      </div>
    </div>
    <div class="container">
      <div class="cuadrado">
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Table from './Alert_Table';

export default {
  components: {
    Table
  }
}
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
</style>