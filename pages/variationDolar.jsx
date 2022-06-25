import LineChart from "../components/LineChart";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "@framework/api";

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

export default function variationDolar  ( {dataBuy} )  {
  
  let scores = [];
  let labels = [];

  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha = dias_semana[hoy.getDay()] + ', ' + hoy.getDate() + ' de ' + meses[hoy.getMonth()] + ' de ' + hoy.getUTCFullYear();
  const formatDate = (date) => {
    var d = new Date(date),
      hours = '' + d.getHours(),
      minu = '' + d.getMinutes();

    return [hours, minu].join(':');
  };
  const buyDolar = () => {
      dataBuy.forEach( (buyDolar,index) => {
          if ( index % 10 === 0 ) {
              scores.push(buyDolar.value);
              labels.push(formatDate(buyDolar.dateTime));
          }
      }) 
  } 
  buyDolar()    

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
          <Title
            type="h3"
            text={fecha}
            align="right"
          />
        </div>
      </div>
      <div className="containerGraph pt-8">
          <LineChart scores={scores} labels={labels} />
      </div>
      <div className="bg-white p-6">
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticProps(){
  const {data} = await api.getBuy();
  const dataBuy = (data[0].price);
  return {
    props: {
      dataBuy    
    },
  };
};


