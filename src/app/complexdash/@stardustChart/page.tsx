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
import { stardustWorks } from "@/app/data/projectData";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
});

export default function BarChar() {
  const community = stardustWorks.map((comm) => comm.community);
  const length = stardustWorks.map((len) => len.length);
  const progress = stardustWorks.map((pro) => pro.progress);
  return (
    <div>
      <div>{}</div>
      <Bar
        data={{
          labels: community,
          datasets: [
            {
              label: "Km",
              data: length,
              backgroundColor: ["#tan"],
            },
            {
              label: "%",
              data: progress,
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
              formatter: (value, context) => {
                if (context.datasetIndex === 1) {
                  return value + "%";
                }
                return value + "km";
              },
              display: true,
              color: "white",
              anchor: "end",
              offset: -20,
              align: "start",
              font: {
                size: 10,
              },
            },
            title: {
              display: true,
              text: "Stardust Company",
              // color: "white",
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
