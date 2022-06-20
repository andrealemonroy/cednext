import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart({ scores, labels }) {
  const options = {
    response: true,
    scales: {
      x: {
        min: 0,
      },
    },
  };

  const dataImagen = useMemo(function () {
    return {
      datasets: [
        {
          label: "Compra",
          data: scores,
          // tension: 0.3,
          borderColor: "rgb(0, 150, 166)",
          backgroundColor: "rgb(0, 150, 166)",
        },
      ],
      labels,
    };
  }, []);
  return <Line data={dataImagen} options={options} />;
}
