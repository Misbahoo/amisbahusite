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
import { qlTeknicWorks } from "@/app/data/projectData";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
});

export default function BarChar() {
  const community = qlTeknicWorks.map((comm) => comm.community);
  const length = qlTeknicWorks.map((len) => len.length);
  const progress = qlTeknicWorks.map((pro) => pro.progress);
  return (
    <div>
      <Bar
        data={{
          labels: community,
          datasets: [
            {
              label: "km",
              data: length,
              backgroundColor: ["tan"],
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
              color: "black",
              anchor: "end",
              offset: -20,
              align: "start",
            },
            title: {
              display: true,
              text: "QL-TEKNIK LTD",
              color: "black",
              font: {
                size: 15,
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
