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

export default function LineChart({labels, scores}) {   
    

const options = {
    response : true,
    scales : {
        y: {
            min: 3.72,
            max: 3.77
        },
        x: {
            min:0
        }
    },
}
        
    const dataImagen = useMemo(function(){

        return {
            datasets:[
                {
                    label:"Compra",
                    /* data: graphInfo.scores, */
                    data: scores,
                    // tension: 0.3,
                    borderColor: "rgb(124, 15, 82)",

                },
            ],
            labels
        }
    },[]);
    return <Line data={dataImagen} options={options} />
}
