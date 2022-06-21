import React from "react";
import Title from "./Title";

const EquivalenceMoney = ({ buy, sale }) => {
  const table_1 = [1, 5, 10, 50, 100, 500, 1000, 5000];
  const table_2 = [1, 5, 10, 50, 100, 500, 1000, 5000];
  return (
    <div>
      <Title type="h2" text="Equivalencias" align="left" />
      <div className="grid pt-[31px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 px-2">
        <div className="borderEquivalencia grid">
          <p className="text-center pt-[25px] text-lightGray">
            Dólares a soles
          </p>
          <div className="grid pt-6 pb-6 grid-cols-4 gap-3 items-center ">
            <div className="grid text-body text-center font-bold text-[42px] text-[#0096A6]">
              $
            </div>
            <div className="grid text-[18px] gap-1.5 pr-6">
              {table_1.map((dolar) => (
                <div key={dolar} className="flex justify-end">
                  <p>{dolar}</p>
                </div>
              ))}
            </div>
            <div className="grid text-[18px] gap-1.5 pr-6">
              {table_1.map((dolar) => (
                <div key={dolar} className="flex justify-start">
                  <p className="align-left">
                    {Number.parseFloat(dolar * buy).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid text-body font-bold justify-center items-center text-[42px] text-[#0096A6]">
              S/
            </div>
          </div>
        </div>
        <div className="borderEquivalencia grid">
          <p className="text-center pt-[25px] text-lightGray">
            Soles a dólares
          </p>
          <div className="grid pt-6 pb-6 grid-cols-4 gap-3 items-center">
            <div className="grid text-body font-bold justify-center items-center text-[42px] text-[#0096A6]">
              S/
            </div>
            <div className="grid text-[18px] gap-1.5 pr-6">
              {table_2.map((sol) => (
                <div key={sol} className="flex justify-end">
                  <p>{sol}</p>
                </div>
              ))}
            </div>
            <div className="grid text-[18px] gap-1.5 pr-6 ">
              {table_2.map((sol) => (
                <div key={sol} className="flex justify-start">
                  <p className="align-left">
                    {Number.parseFloat(sol / buy).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid text-body font-bold justify-center items-center text-[42px] text-[#0096A6]">
              $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquivalenceMoney;
