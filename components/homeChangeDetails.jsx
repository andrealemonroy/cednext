import React from "react";
import Footer from "./Footer";
import MapView from "./MapView";
import Navbar from "./Navbar";

const HomeChangeDetails = ({ datos }) => {
  return (
    <>
      <div className="pt-10">
        <p className="pb-5">Nombre : {datos.nombre}</p>
        <MapView datos={datos} />
      </div>
      <div className="border-gray text-cyan-800 border-x-2 rounded-md">
        <p>Dirección : {datos.direccion}</p>
        <p>referencia = {datos.referencia}</p>
        <p>correo = {datos.correo}</p>
        <p>servicios = {datos.servicios}</p>
        <p>horario = {datos.horario}</p>
        <p>telefono = {datos.telefono}</p>
        <p>celular = {datos.celular}</p>
      </div>
    </>
  );
};

export default HomeChangeDetails;
