import React from "react";
import MapView from "./MapView";
import Title from "./Title";

const HomeChangeDetails = ({ datos }) => {
  return (
    <>
      <div className="pt-10">
        <Title type="h1" text={datos.nombre} align="left" />
        <MapView datos={datos} nombre={datos.nombre} />
      </div>
      <div className="border-gray bg-gray text-cyan-800 border-x-2 rounded-md">
        <Title type="h3" text={"Dirección: " + datos.direccion} align="left" />
        <Title
          type="h3"
          text={datos.referencia ? "Referencia: " + datos.referencia : ""}
          align="left"
        />
        <Title
          type="h3"
          text={datos.correo ? "Correo: " + datos.correo : ""}
          align="left"
        />
        <Title
          type="h3"
          text={datos.servicios ? "Servicios: " + datos.servicios : ""}
          align="left"
        />
        <Title
          type="h3"
          text={datos.horario ? "Horario: " + datos.horario : ""}
          align="left"
        />
        <Title
          type="h3"
          text={"Teléfono: " + datos.telefono ? datos.telefono : ""}
          align="left"
        />
        <Title
          type="h3"
          text={"Celular: " + datos.celular ? datos.celular : ""}
          align="left"
        />
      </div>
    </>
  );
};

export default HomeChangeDetails;
