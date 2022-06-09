import LineChart from "../components/LineChart";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  useEffect, useState } from "react";

const exportAsPicture = () => {
  var html = document.getElementsByTagName("HTML")[0];
  var body = document.getElementsByTagName("BODY")[0];
  var htmlWidth = html.clientWidth;
  var bodyWidth = body.clientWidth;
  var data = document.getElementById("converter");
  var newWidth = data.scrollWidth - data.clientWidth;
  if (newWidth > data.clientWidth) {
    htmlWidth += newWidth;
    bodyWidth += newWidth;
  }
  html.style.width = htmlWidth + "px";
  body.style.width = bodyWidth + "px";
  html2canvas(data).then((canvas) => {
    var image = canvas.toDataURL("image/png", 1.0);
    var fileName = currentExport.split("Export")[0] + ".png";
    saveAs(image, fileName);
  });
};

const variationDolar = ( onlineVariationDolar, menu ) => {
  
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  
  const [ graphInfo, setGraphInfo ] = useState({
    labels : [],
    scores : [],
    min : 0 ,
    max : 0
    }
);

const formatDate = (date) => {
    var d = new Date(date),
      hours = '' + d.getHours(),
      minu = '' + d.getMinutes();

    return [hours, minu].join(':');
  };
  /* const scores =graphInfo.scores
  const labels =graphInfo.labels */

  useEffect(() => {
    const buyDolar = async () => {
        const {data} = await api.getBuy();
        const dataBuy = (data[0].price);
        dataBuy.forEach( (buyDolar,index) => {
            if ( index % 10 === 0 ) {
                scores.push(buyDolar.value);
                labels.push(formatDate(buyDolar.dateTime));
            }
        })
       /*  console.log("Valores: ",scores);
        console.log("Labels: ",labels); */
        setGraphInfo(
            ...graphInfo,
            labels,
            scores
        )
    }
    
    buyDolar()
    .catch(console.error)    
    }
,[])

  /* const scores = [3.545, 3.650, 3.710, 3.732, 3.742, 3.753, 3.701, 3.721, 3.751, 3.761, 3.511, 3.651, 3.701, 3.731, 3.741, 3.751];
  const labels = ['14:02','14:20','14:40','15:00','15:20','15:40','16:00','16:20','16:40','17:00','17:20','17:40','18:00','18:20','18:40','19:00'];  */



  return (
    <>
      <Navbar/>
      <div className="bg-white p-6">
      </div>
      <div className="containerTitle">
        <Title
          type="h2"
          text="Variación del precio del dólar en el Perú"
          align="center"
        />
        <Title
          type="h3"
          text="Sigue el tipo de cambio en línea y encuentra el mejor momento para comprar o vender dolares en el Perú" 
          align="center"
        />

        <div className="w-full mt-4">
          <div className="text-center">
            <button
              onClick={exportAsPicture}
              className="mt-2 bg-lgreen w-[140px] h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
            >
              Compartir
            </button>
          </div>
          <Title
            type="h3"
            text={hoy.toDateString()}
            align="right"
          />
        </div>
      </div>
      <div className="containerGraph pt-8">
        {graphInfo.scores.length && graphInfo.labels.length ?
        (
          <LineChart scores={graphInfo.scores} labels={graphInfo.labels} />
        ):undefined}
        {/* <LineChart scores={graphInfo.scores} labels={graphInfo.labels} /> */}
      </div>
      <div className="bg-white p-6">
      </div>
      <Footer/>
    </>
  )
}

export default variationDolar;
