"use client";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
});

export default function PieChart() {
  return (
    <div>
      <Pie
        data={{
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "",
              data: [303981, 104776],
              backgroundColor: ["teal", "cyan"],
            },
          ],
        }}
        options={{
          aspectRatio: 1,
          plugins: {
            legend: {
              position: "top",
            },
            datalabels: {
              align: "center",
              formatter: function (value, context) {
                const datapoints = context.dataset.data;

                function totalNumb(total: number, datapoints: number[]) {
                  return total + datapoints;
                }
                const totalValue = datapoints.reduce(totalNumb, 0);
                const percentage = (value / totalValue) * 100;
                const display = [`${percentage.toFixed(1)}%`, `${value}`];

                return display;
              },
              display: true,
              color: "darkblue",
              font: {
                size: 15,
              },
              anchor: "center",
              offset: -20,
              textAlign: "center",
            },
            title: {
              display: true,
              text: "Jobs Created",
              color: "black",
              font: {
                size: 15,
                weight: "bold",
              },
              padding: 20,
            },
          },
        }}
      />
    </div>
  );
}
