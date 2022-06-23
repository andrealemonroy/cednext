import React from "react";
import Title from "./Title";

const Quotation = ({
  exportAsPicture,
  exchangeSunat,
  exchangeDolar,
  exchangeEuro,
}) => {
  return (
    <div
      id="converter"
      className="sm:flex justify-between md:justify-center sm:justify-center mt-5"
    >
      <div div className="mt-10">
        <div className="flex w-[95vw] sm:w-[95vw] lg:w-[500px]">
          <div className="flex-col-reverse sm:flex-row items-center w-[200px] flex">
            <Title type="h2" text="Cotización" />
            <button
              onClick={exportAsPicture}
              className="bg-lgreen ml-2 w-[140px] h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
            >
              Compartir
            </button>
          </div>
          <div className="flex my-auto justify-around w-full">
            <div>
              <Title type="h4" text="Compra" />
            </div>
            <div>
              <Title type="h4" text="Venta" />
            </div>
          </div>
        </div>
        <div className="w-[95vw] sm:w-[95vw] lg:w-[500px]">
          <div className="flex py-3">
            <div className="w-[350px] flex align-middle">
              <div className="w-10 my-auto">
                <img className="w-7 max-h-9" src="/icons/logoSunat.svg" />
              </div>
              <Title type="h5" text="Sunat" />
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeSunat?.buy.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeSunat?.sale.cost} />
              </div>
            </div>
          </div>
          <div className="flex py-3 bg-gray">
            <div className="w-[350px] flex align-middle">
              <div className="w-10 my-auto">
                <img className="w-7 max-h-9" src="/icons/dolar.svg" />
              </div>
              <Title type="h5" text="Dólar" />
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeDolar?.buy.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeDolar?.sale.cost} />
              </div>
            </div>
          </div>
          <div className="flex py-3">
            <div className="w-[350px] flex align-middle">
              <div className="w-10 my-auto">
                <img className="w-7 max-h-9" src="/icons/euro.svg" />
              </div>
              <Title type="h5" text="Euro" />
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeEuro?.buy.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeEuro?.sale.cost} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
