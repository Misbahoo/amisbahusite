"use client";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register({
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
});

export default function BarChar() {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
          ],
          datasets: [
            {
              label: "Revenue",
              data: [2000, 3000, 1000, 2500, 1000, 3300, 1200, 3500, 3253],
              backgroundColor: [
                "#253323",
                "green",
                "orange",
                "beige",
                "tan",
                "rgba(63,52,93,0.8)",
                "rgba(21,19,38,0.5",
                "teal",
                "blue",
              ],
            },
          ],
        }}
        options={{
          aspectRatio: 4,
          plugins: {
            title: {
              display: true,
              text: "Line Chart",
              align: "start",
              color: "black",
              font: {
                size: 20,
              },
            },
          },
          scales: {
            y: {
              ticks: {
                stepSize: 1500,
              },
            },
          },
        }}
      />
    </div>
  );
}
