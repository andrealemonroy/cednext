import { data } from "autoprefixer";
import React, { useState } from "react";
import Title from "./Title";
import { FaAngleUp, FaAngleDown, FaAngleDoubleRight } from "react-icons/fa";

const Money = () => {
  const [expanded, SetExpanded] = useState({
    dolares: true,
    soles: true,
  });

  const toggle = (money) => {
    SetExpanded({
      ...expanded,
      [money]: !expanded[money],
    });
  };
  const monedas = {
    dolares: [
      {
        denominacion: "$ 100 ",
        link: "https://cuantoestaeldolar.pe/blog/como-detectar-billetes-de-100-dolares-falsos/",
      },
      {
        denominacion: "$ 50 ",
        link: "https://cuantoestaeldolar.pe/blog/como-detectar-50-dolares-falsos/",
      },
      {
        denominacion: "$ 20 ",
        link: "https://cuantoestaeldolar.pe/blog/como-identificar-20-dolares-falsos/",
      },
    ],
    soles: [
      {
        denominacion: "S/ 200 ",
        link: "https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/",
      },
      {
        denominacion: "S/ 100 ",
        link: "https://cuantoestaeldolar.pe/blog/6-claves-para-detectar-si-un-billete-de-s-100-es-falso/",
      },
      {
        denominacion: "S/ 50 ",
        link: "https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-50-soles-es-falso/",
      },
      {
        denominacion: "S/ 10 ",
        link: "#",
      },
    ],
  };
  return (
    <div>
      <div className="pt-[31px]">
        <div
          className="flex justify-between cursor-pointer bg-[#F9F9F9] align-middle pt-1.5 pb-[5px] pl-3.5 pr-3 rounded-md border border-gray bg-gray shadow-[0_px_1px_1px_rgba(0,0,0,0.25)]"
          onClick={() => toggle("dolares")}
        >
          <Title type="h4" text="Dólares" color="lgreen" weight="normal" />
          <button>
            {expanded.dolares ? (
              <FaAngleUp color="#8E8E8E" fontSize="20" />
            ) : (
              <FaAngleDown color="#8E8E8E" fontSize="20" />
            )}
          </button>
        </div>

        <div className={expanded.dolares ? "content show" : "content"}>
          {monedas.dolares.map((billete) => (
            <li
              key={billete.link}
              className="flex font-body pt-[3px] pb-0.5 pl-4"
            >
              <a href={billete.link} className="font-body flex align-middle">
                {billete.denominacion}
              </a>
              <FaAngleDoubleRight fontSize="22" className="pt-2" />
            </li>
          ))}
        </div>
      </div>
      <div>
        <div
          className="flex justify-between cursor-pointer bg-[#F9F9F9] align-middle pt-1.5 pb-[5px] pl-3.5 pr-3 rounded-md border border-gray bg-gray shadow-[0_px_1px_1px_rgba(0,0,0,0.25)]"
          onClick={() => toggle("soles")}
        >
          <Title type="h4" text="Soles" color="lgreen" weight="normal" />
          <button>
            {expanded.soles ? (
              <FaAngleUp color="#8E8E8E" fontSize="20" />
            ) : (
              <FaAngleDown color="#8E8E8E" fontSize="20" />
            )}
          </button>
        </div>
        <div className={expanded.soles ? "content show" : "content"}>
          {monedas.soles.map((billete) => (
            <li
              key={billete.link}
              className="flex font-body pt-[3px] pb-0.5 pl-4"
            >
              <a href={billete.link}>{billete.denominacion}</a>
              <FaAngleDoubleRight fontSize="20" className="pt-2" />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Money;

/* <Accordion
        sx={{ marginTop: "0px", marginBottom: "0px" }}
        expanded={expanded.dolares}
        onClick={() => handleChange("dolares")}
      >
        <AccordionSummary
          sx={{ marginTop: "0px", marginBottom: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classNameName="m-[2px] font-body"
        >
          <Typography sx={{ marginTop: "0px", marginBottom: "0px" }}>
            DÓLARES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {monedas.dolares.map((billete) => (
            <li classNameName="content font-body font-normal" key={billete.link}>
              <a href={billete.link} classNameName="font-body font-normal">
                {billete.denominacion}
              </a>
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginTop: "0px", marginBottom: "0px" }}
        expanded={expanded.soles}
        onClick={() => handleChange("soles")}
      >
        <AccordionSummary
          sx={{ marginTop: "0px", marginBottom: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ marginTop: "0px", marginBottom: "0px" }}>
            SOLES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {monedas.soles.map((billete) => (
            <li classNameName="content font-body font-normal" key={billete.link}>
              <a href={billete.link} classNameName="font-body font-normal">
                {billete.denominacion}
              </a>
            </li>
          ))}
        </AccordionDetails>
      </Accordion> */
