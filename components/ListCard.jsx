import React from "react";
import CardItem from "./CardItem";

const ListCard = (nombre, imagen = "") => {
  return (
    <>
      <div className="container mx-auto px-4">
        <CardItem name={nombre} image={imagen}></CardItem>
      </div>
    </>
  );
};

export default ListCard;
