<template>
  <div>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Alertas</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by Model..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No Alert found"
        :md-description="`No se encuentra la fecha '${search}'.`"
      ></md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Modelo" md-sort-by="modelo">{{ item.modelo }}</md-table-cell>
        <md-table-cell md-label="Tipo Alerta" md-sort-by="tp_alert">{{ item.tp_alert }}</md-table-cell>
        <md-table-cell md-label="Fecha" md-sort-by="fecha">{{ item.fecha }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByModel = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.modelo).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  data: () => ({
    search: null,
    searched: [],
    disps: [
      {
        id: 1,
        modelo: "M1 - test",
        tp_alert: "Nivel de Gas",
        fecha: "2020-03-18"
      },
      {
        id: 2,
        modelo: "M2 - test",
        tp_alert: "Nivel de Gas",
        fecha: "2020-03-18"
      },
      {
        id: 3,
        modelo: "M3 - test",
        tp_alert: "Fuera de Linea",
        fecha: "2020-03-18"
      },
      {
        id: 4,
        modelo: "M4 - test",
        tp_alert: "Nivel de Carga",
        fecha: "2020-03-18"
      },
      {
        id: 5,
        modelo: "MQ5 - Gas",
        tp_alert: "Nivel de Eficiencia",
        fecha: "2020-03-18"
      }
    ]
  }),
  methods: {
    searchOnTable() {
      this.searched = searchByModel(this.disps, this.search);
    }
  },
  created() {
    this.searched = this.disps;
  }
};
</script>

<style scoped>
.md-field {
  max-width: 300px;
}
.md-table-cell {
  text-align: left;
}
</style>