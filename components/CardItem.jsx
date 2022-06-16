import React from "react";
import Image from "next/image";

const CardItem = (name, image = "") => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src="/img/cusco.jpg"
        alt={name}
        width={140}
        height={158}
      />
      <div className="font-bold text-xl mb-2">{name}</div>
    </div>
  );
};

export default CardItem;
