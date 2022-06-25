import React from "react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import Title from "./Title";

const CardItem = ({ LocalData }) => {
  const imagen = "/img/imageTmp.svg";
  return (
    <>
      <div className="px-5 pb-6">
        <Title type="h1" text="Casas de cambio" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {LocalData?.map((item, index) => (
          <div key={index} className="rounded mx-1 my-1">
            <div className="w-full">
              <Image
                src={imagen}
                alt={item.departamento}
                width="700"
                height="400"
              />
            </div>
            <div className="px-6 py-4 flex align-middle items-center cursor-pointer">
              <p className="font-bold text-4xl pr-2">{item.departamento}</p>
              <FaAngleDoubleRight fontSize="30" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardItem;
