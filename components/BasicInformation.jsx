import React from "react";
import Title from "../components/Title";
import Image from "next/image";
import { useRouter } from "next/router";

const BasicInformation = () => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Image
          height="89"
          width="200"
          className="h-12 my-auto cursor-pointer"
          src="/icons/logo.svg"
          alt="Logo de cuánto está el dólar"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="pt-4">
        <Title type="h1" align="center" text="cuantoestaeldolar.pe" />
      </div>
      <p className="p-10 text-2xl text-center">
        Somos una plataforma que tiene como propósito democratizar el precio del
        dólar en el Perú, su información es actualizada a diario.
      </p>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
        <div className="flex box-border border-4 border-gray rounded-lg">
          <img
            src="img/buy-dolar.svg"
            className="w-[140px] h-[160px] mt-[30px] ml-[23px]"
          />
          <div className="p-8 flex-2 align-middle">
            <div className="pt-4">
              <Title type="h6" align="left" text="¿Qué es la compra?" />
            </div>
            <div className="text-justify pt-6 text-[18px]">
              Es cuando una casa de cambio te compra tus dólares.
            </div>
          </div>
        </div>
        <div className="flex box-border border-4 border-gray rounded-lg">
          <img
            src="img/sale-dolar.svg"
            className="w-[105.27px] h-[145.13px] mt-[21px] ml-[23px]"
          />
          <div className="p-8 pl-12 md:pl-16 pr-10 flex-2 align-middle">
            <div className="pt-4">
              <Title type="h6" align="left" text="¿Qué es venta?" />
            </div>
            <div className="text-justify pt-4 text-[18px]">
              Es cuando una casa de cambio te VENDE sus dólares.
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-6 pb-2 px-8 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
        <div className="flex">
          <div className="p-6 flex-2 align-middle">
            <div className="pt-8">
              <Title type="h2" align="left" text="¿Qué es el dólar?" />
            </div>
            <div className="text-justify pt-6 text-[18px]">
              Es la moneda oficial de los Estados Unidos de América, cuya
              economía es una de las más importantes a las que el Perú está
              asociada.
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="p-6 flex-2 align-middle">
            <div className="pt-8">
              <Title type="h2" align="left" text="Sobre el dólar en América" />
            </div>
            <div className="text-justify pt-6 text-[18px]">
              El dólar americano tiene un gran impacto en la economía mundial y
              se utiliza en las transacciones internacionales de todo el mundo,
              además es la divisa más utilizada por los turistas.
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-1 pl-8 pr-8 pb-6 grid grid-cols-1 gap-4">
        <div className="flex">
          <div className="p-6 flex-2 align-middle">
            <div className="pt-8">
              <Title type="h2" align="left" text="El dólar en el Perú" />
            </div>
            <div className="text-justify pt-6 text-[18px]">
              El precio del dólar en el Perú, puede verse afectado por
              intervenciones del Banco Central de Reserva (BCR), a fin de
              estabilizar la cotización o el tipo de cambio del sol peruano.
              Asimismo, por diversos indicadores como el crecimiento del
              Producto Bruto Interno (PBI), el comportamiento de las
              exportaciones peruanas, la situación geopolítica internacional,
              etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
