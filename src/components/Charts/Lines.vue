<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        datasets: [
          {
            label: "Temperatura",
            data: [10, 25, 30, 35, 22, 12, 10],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
          {
            label: "Humedad",
            data: [37, 28, 12, 4, 1, 8, 14],
            backgroundColor: "transparent",
            borderColor: "rgba(110, 155, 15, 0.68)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
          {
            label: "Gas",
            data: [12, 7, 2, 0, 5, 3, 0],
            backgroundColor: "transparent",
            borderColor: "rgba(210, 10, 0, 0.68)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    );
  }
};
</script>