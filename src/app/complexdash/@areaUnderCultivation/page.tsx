"use client";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { impactOutcomes } from "@/app/data/projectData";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
});

export default function PieChart() {
  const theData = impactOutcomes.filter((item) => item.areaUnderProduciton);
  const arrayOfObjects = theData[0].areaUnderProduciton;
  const crops = arrayOfObjects?.map((items) => items.crop);
  const areaHa = arrayOfObjects?.map((items) => items.areaHa);
  return (
    <div>
      <Doughnut
        data={{
          labels: crops,
          datasets: [
            {
              label: "",
              data: areaHa,
              backgroundColor: ["#37b", "#75a", "tan"],
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
              align: "end",
              formatter: function (value, context) {
                const datapoints = context.dataset.data;

                const totalValue = datapoints.reduce(
                  (total, datapoints) => total + datapoints,
                  0
                );
                const percentage = (value / totalValue) * 100;
                const display = [`${percentage.toFixed(1)}%`, `${value}`];

                return display;
              },
              display: true,
              color: "black",
              font: {
                size: 15,
              },
              anchor: "end",
              offset: 0,
              textAlign: "center",
            },
            title: {
              display: true,
              text: "Area Under Production (ha)",
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
