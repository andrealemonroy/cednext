import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Money() {
  const [selected, setSelected] = useState(null);

  const monedas = [
    {
      titulo: "dolares",
      moneys: [
        {
          denominacion: "$ 100 >>",
          link: "https://cuantoestaeldolar.pe/blog/como-detectar-billetes-de-100-dolares-falsos/",
        },
        {
          denominacion: "$ 50 >>",
          link: "https://cuantoestaeldolar.pe/blog/como-detectar-50-dolares-falsos/",
        },
        {
          denominacion: "$ 20 >>",
          link: "https://cuantoestaeldolar.pe/blog/como-identificar-20-dolares-falsos/",
        },
      ],
    },
    {
      titulo: "soles",
      moneys: [
        {
          denominacion: "S/ 200 >>",
          link: "https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/",
        },
        {
          denominacion: "S/ 100 >>",
          link: "https://cuantoestaeldolar.pe/blog/6-claves-para-detectar-si-un-billete-de-s-100-es-falso/",
        },
        {
          denominacion: "S/ 50 >>",
          link: "https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-50-soles-es-falso/",
        },
        {
          denominacion: "S/ 10 >>",
          link: "#",
        },
      ],
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="acordion">
        <div className="item">
          <div className="title" onClick={() => toogle(i)}>
            <h2>DOLARES</h2>
            <span>+</span>
          </div>
          <div>
            <li className="content font-body font-normal" key={1}>
              <a href={monedas[0].moneys[0].link}>
                {monedas[0].moneys[0].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
            <li className="content font-body font-normal" key={2}>
              <a href={monedas[0].moneys[1].link}>
                {monedas[0].moneys[1].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
            <li className="content font-body font-normal" key={3}>
              <a href={monedas[0].moneys[2].link}>
                {monedas[0].moneys[2].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
          </div>
          <div className="title" onClick={() => toogle(i)}>
            <h2>SOLES</h2>
            <span>+</span>
          </div>
          <div>
            <li className="content font-body font-normal" key={1}>
              <a href={monedas[1].moneys[0].link}>
                {monedas[1].moneys[0].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
            <li className="content font-body font-normal" key={2}>
              <a href={monedas[1].moneys[1].link}>
                {monedas[1].moneys[1].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
            <li className="content font-body font-normal" key={3}>
              <a href={monedas[1].moneys[2].link}>
                {monedas[1].moneys[2].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
            <li className="content font-body font-normal" key={4}>
              <a href={monedas[1].moneys[3].link}>
                {monedas[1].moneys[3].denominacion}
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Money;
