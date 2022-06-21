import React, { useState } from "react";

const Money = () => {
  const [expanded, SetExpanded] = useState({
    dolares: true,
    soles: true,
  });
  const handleChange = (money) => {
    SetExpanded({
      ...expanded,
      [money]: !expanded[money],
    });
  };
  const monedas = {
    dolares: [
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
    soles: [
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
  };
  return <div></div>;
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
