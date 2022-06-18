import React from "react";
import Title from "./Title";

const EquivalenceMoney = ({ buy, sale }) => {
  const table_1 = [1, 5, 10, 50, 100, 500, 1000, 5000];
  const table_2 = [10, 50, 100, 500, 1000, 5000];

  console.log("Dólar", buy, sale);
  //   const buyDolar = parseFloat(buy);
  return (
    <div>
      <Title type="h2" text="Equivalencias" align="left" />
      <div className="grid grid-cols-2">
        <div className="borderEquivalencia ml-10 grid">
          <Title type="h3" text="Dólares a soles" align="center" />
          <div className="container grid grid-cols-4">
            <div className="grid  justify-center items-center text-4xl text-[#0096A6]">
              $
            </div>
            <div className="grid  gap-1 pr-2.5">
              {table_1.map((dolar) => (
                <div key={dolar} className="flex justify-end">
                  <p>{dolar}</p>
                </div>
              ))}
            </div>
            <div className="grid  gap-1 pl-2.5">
              {table_1.map((dolar) => (
                <div key={dolar} className="flex justify-start">
                  <p className="align-left">
                    {Number.parseFloat(dolar * buy).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid justify-center items-center text-4xl text-[#0096A6]">
              S/
            </div>
          </div>
        </div>
        <div className="borderEquivalencia ml-10 grid">
          <Title type="h3" text="Soles a dólares" align="center" />
          <div className="container grid grid-cols-4">
            <div className="grid  justify-center items-center text-4xl text-[#0096A6]">
              S/
            </div>
            <div className="grid  gap-1 pl-2.5">
              {table_2.map((sol) => (
                <div key={sol} className="flex justify-end">
                  <p>{sol}</p>
                </div>
              ))}
            </div>
            <div className="grid  gap-1 pl-2.5">
              {table_2.map((sol) => (
                <div key={sol} className="flex justify-start">
                  <p className="align-left">
                    {Number.parseFloat(sol / buy).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid justify-center items-center text-4xl text-[#0096A6]">
              $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquivalenceMoney;
