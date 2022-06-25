import React from "react";
import Title from "./Title";

const Quotation = ({
  exportAsPicture,
  exchangeSunat,
  exchangeDolar,
  exchangeEuro,
}) => {
  return (
    <div id="converter" className="sm:flex justify-between mt-5">
      <div div className="mt-10">
        <div className="flex sm:w-[500px]">
          <div className="w-[200px] flex">
            <Title type="h2" text="Cotización" />
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
        <div className=" sm:w-[500px]">
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
