import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <>
      <div className="p-5 bg-primary h-1/2 w-full flex md:flex-row flex-col justify-around items-start sm:p-20">
        <div className="sm:p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Secciones</p>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Cambio de dólar online
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Casas de Cambio
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Variación del del dólar
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Calcular
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Noticias
            </li>
          </ul>
        </div>
        <div className="sm:p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Políticas</p>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Términos y condiciones
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Preguntas frecuentes
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              Publicidad
            </li>
          </ul>
        </div>
        <div className="sm:p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Más sobre el dólar
            </p>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagColombia.svg" />
              Colombia
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagChile.svg" />
              Chile
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagArgentina.svg" />
              Argentina
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <img src="icons/flagCostaRica.svg" />
              Costa Rica
            </li>
          </ul>
        </div>
        <div className="sm:p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Comunícate</p>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
              © BIG CLICK SAC 2021
            </li>
            <li className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer flex">
              <MdEmail className="text-md sm:text-2xl cursor-pointer" />{" "}
              <span className="text-xs">publicidad@cuantoestaeldolar.pe</span>
            </li>

            <p className="text-gray-800 font-bold text-2xl pb-4 mt-2">Síguenos</p>
            <div className="flex gap-6 pb-5">
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaInstagram className="text-2xl cursor-pointer" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
