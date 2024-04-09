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
            "F.Sarki - Bayawa",
            "Argungu-D.Kwalle",
            "Ka'oje - Buya",
            "Kamba - Tukurwa",
            "Kamba - G.Yamma",
            "S.Tunga Clinic",
          ],
          datasets: [
            {
              label: "Km",
              data: [15.5, 1.0, 11.2, 4.52, 2.21, 0.9],
              backgroundColor: ["tan"],
            },
            {
              label: "%",
              data: [100, 100, 100, 0, 100, 100],
              backgroundColor: ["green"],
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
              text: "Stardust Company",
              color: "black",
              font: {
                size: 15,
                weight: "bold",
              },
              padding: 20,
            },
          },
          scales: {
            y: {
              ticks: {
                stepSize: 5,
              },
            },
          },
        }}
      />
    </div>
  );
}
