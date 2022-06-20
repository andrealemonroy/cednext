import React from "react";
import Title from "./Title";

const EquivalenceMoney = ({ buy, sale }) => {
  const table_1 = [1, 5, 10, 50, 100, 500, 1000, 5000];
  const table_2 = [1, 5, 10, 50, 100, 500, 1000, 5000];
  return (
    <div>
      <Title type="h2" text="Equivalencias" align="left" />
      <div className="grid pt-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div className="borderEquivalencia grid items-center">
          <p className="text-center lightGray">Dólares a soles</p>
          <div className="grid grid-cols-4 gap-4 items-center ">
            <div className="grid text-center  text-4xl text-[#0096A6]">$</div>
            <div className="grid  gap-4 pr-6">
              {table_1.map((dolar) => (
                <div key={dolar} className="flex justify-end">
                  <p>{dolar}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
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
        <div className="borderEquivalencia grid items-center">
          <p className="text-center lightGray">Soles a dólares</p>
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="grid justify-center items-center text-4xl text-[#0096A6]">
              S/
            </div>
            <div className="grid  gap-4 pr-6">
              {table_2.map((sol) => (
                <div key={sol} className="flex justify-end">
                  <p>{sol}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 pr-6 ">
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
