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

const scores1 = [3.545, 3.650, 3.710, 3.732, 3.742, 3.753, 3.701, 3.721, 3.751, 3.761, 3.511, 3.651, 3.701, 3.731, 3.741, 3.751];
const scores2 = [3.711, 3.851, 3.901, 3.931, 3.941, 3.951, 3.901, 3.921, 3.951, 3.961, 3.71, 3.851, 3.901, 3.931, 3.941, 3.951];
const labels = ['14:02','14:20','14:40','15:00','15:20','15:40','16:00','16:20','16:40','17:00','17:20','17:40','18:00','18:20','18:40','19:00'];

const options = {
    response : true,
    scales : {
        y: {
            min: 3.2,
            max:4
        },
        x: {
            min:0
        }
    },
}

function LineChart() {
    const data = useMemo(function(){

        return {
            datasets:[
                {
                    label:"Compra",
                    data: scores1,
                    tension: 0.3,
                    borderColor: "rgb(124, 15, 82)",

                },
                {
                    label:"Venta",
                    data: scores2,
                    tension: 0.3,
                    borderColor: "rgb(9, 103, 89)",
                }
            ],
            labels

        }

    },[]);

    return <Line data={data} options={options} />
}

export default LineChart;