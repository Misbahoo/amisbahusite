"use client";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
});

export default function BarChar() {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Kware - Marbawa",
            "Hamma'ali Clinic",
            "Yar Barade - Kagara",
          ],
          datasets: [
            {
              label: "Km",
              data: [4.71, 0.6, 1.13],
              backgroundColor: ["lightblue"],
            },
            {
              label: "%",
              data: [100, 100, 100, 0, 100, 100, 100, 45, 100, 100, 100],
              backgroundColor: ["orange"],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          aspectRatio: 3,
          plugins: {
            legend: {
              position: "right",
            },
            datalabels: {
              display: true,
              color: "black",
              anchor: "end",
              offset: -20,
              align: "start",
            },
            title: {
              display: true,
              text: "AG.Vision Nig. Ltd.",
              color: "black",
              font: {
                size: 20,
              },
              padding: 20,
            },
          },
          scales: {
            y: {
              ticks: {
                stepSize: 10,
              },
            },
          },
        }}
      />
    </div>
  );
}
