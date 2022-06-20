import React from "react";
import LineChart from "./LineChart";
import Title from "./Title";
import { dateSpanish, formatDate } from "../utils/dateFormat";

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

const GraphVariation = ({ dataBuy }) => {
  let scores = [];
  let labels = [];

  const buyDolar = () => {
    dataBuy.forEach((buyDolar, index) => {
      if (index % 10 === 0) {
        scores.push(buyDolar.value);
        labels.push(formatDate(buyDolar.dateTime));
      }
    });
  };
  buyDolar();
  const _dateSpanish = dateSpanish(Date.now());
  return (
    <div>
      <div className="bg-white p-6"></div>
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
          <Title type="h3" text={_dateSpanish} align="right" />
        </div>
      </div>
      <div className="containerGraph pt-8">
        <LineChart scores={scores} labels={labels} />
      </div>
      <div className="bg-white p-6"></div>
    </div>
  );
};

export default GraphVariation;
