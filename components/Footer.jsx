import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Footer() {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  const [suscribe, setSuscribe] = useState(true);

  const handleClick = (e) => {
    setSuscribe(false);
  };

  return (
    <>
      {suscribe && (
        <div className="bg-[#884485] items-center p-5 bg-primary h-1/2 w-full flex md:flex-row flex-col justify-between md:justify-around items-start sm:px-[185px] text-white">
          <div className="flex justify-between">
            <FaEnvelope style={iconStyles} />
            <p className="pl-5">Enterate sobre el cambio del dolar</p>
          </div>
          <div className="flex items-center">
            <div className="bg-lgreen w-[140px] h-9 text-white text-center align-middle mt-1 pt-1 rounded-3xl shadow-sm shadow-black">
              <p>Suscribirme</p>
            </div>
            <div className="ml-6">
              <AiOutlineCloseCircle
                style={iconStyles}
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 bg-gradient-to-r from-third to-bluefooter  p-5 bg-primary h-1/2 w-full flex md:flex-row flex-col justify-around items-start sm:px-[171px] sm:py-20 text-white">
        <div className="p-1">
          <ul>
            <p className="text font-bold text-lg pb-4">Secciones</p>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Cambio de dólar online
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Casas de Cambio
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Variación del del dólar
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Calcular
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Noticias
            </li>
          </ul>
        </div>
        <div className="p-1">
          <ul>
            <p className="text font-bold text-lg pb-4">Políticas</p>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Términos y condiciones
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Preguntas frecuentes
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Publicidad
            </li>
          </ul>
        </div>
        <div className="p-1">
          <ul>
            <p className="text font-bold text-lg pb-4">Más sobre el dólar</p>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagColombia.svg" />
              Colombia
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagChile.svg" />
              Chile
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagArgentina.svg" />
              Argentina
            </li>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagCostaRica.svg" />
              Costa Rica
            </li>
          </ul>
        </div>
        <div className="p-1">
          <ul>
            <p className="text font-bold text-lg pb-4">Comunícate</p>
            <li className="text text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              © BIG CLICK SAC 2021
            </li>
            <li className="flex text-xs pb-2 hover:text-blue-600 cursor-pointer">
              <FaEnvelope
                style={iconStyles}
                className="p-1 sm:pl-1 md:pl-1 lg:pl-0 text-sm md:text-base lg:text-lg"
              />
              <a href="mailto:publicidad@cuantoestaeldolar.pe">
                publicidad@cuantoestaeldolar.pe
              </a>
            </li>
            <p className="text font-bold text-lg pb-4 mt-2">Síguenos</p>
            <div className="flex gap-6 pb-5">
              <Link href="https://www.facebook.com/cuantoestaeldolar/">
                <a target="_blank">
                  <FaFacebook className="cursor-pointer" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/cuantoestaeldolar/">
                <a target="_blank">
                  <FaInstagram className=" cursor-pointer" />
                </a>
              </Link>
              <Link href="https://twitter.com/cuantoestadolar">
                <a target="_blank">
                  <FaTwitter className=" cursor-pointer" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCjkqalXiCb8YNsQsZlYmLlQ">
                <a target="_blank">
                  <FaYoutube className=" cursor-pointer" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/cuantoestaeldolar/">
                <a target="_blank">
                  <FaLinkedin className=" cursor-pointer" />
                </a>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
