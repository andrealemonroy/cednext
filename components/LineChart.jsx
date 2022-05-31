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

const scores1 = [3.5, 3.65, 3.70, 3.73, 3.74, 3.75, 3.70, 3.72, 3.75, 3.76, 3.5, 3.65, 3.70, 3.73, 3.74, 3.75, 3.70, 3.72, 3.75, 3.76, 3.75, 3.76, 3.74];
const scores2 = [3.7, 3.85, 3.90, 3.93, 3.94, 3.95, 3.90, 3.92, 3.95, 3.96, 3.7, 3.85, 3.90, 3.93, 3.94, 3.95, 3.90, 3.92, 3.95, 3.96, 3.95, 3.96, 3.96];
const labels = [0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

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