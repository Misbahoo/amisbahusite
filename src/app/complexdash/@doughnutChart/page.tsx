"use client";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
});

export default function DoughnutChart() {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Women", "Men", "Boys", "Girls"],
          datasets: [
            {
              label: "Revenue",
              data: [2000, 3000, 1000, 2500],
              backgroundColor: [
                "tan",
                "rgba(63,52,93,0.8)",
                "rgba(21,19,38,0.5",
                "teal",
              ],
            },
          ],
        }}
        options={{
          cutout: 40,
          plugins: {
            title: {
              display: true,
              text: "Revenue",
              font: {
                size: 20,
              },
              color: "black",
            },
          },
        }}
        className="w-full"
      />
    </div>
  );
}
