import React, { useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
// import { useState } from "react";

const CasasCambio = ({ onlineExchangeHouses }) => {
  const [showMoreAll, setShowMoreAll] = useState(false);
  const [showMoreId, setShowMoreId] = useState(null);
  const firstPart = onlineExchangeHouses?.slice(0, 10);
  const secondPart = onlineExchangeHouses?.slice(
    10,
    onlineExchangeHouses?.length
  );
  const hideInfo = () => {
    setShowMoreId(null);
    setShowMoreAll(false);
  };
  const showInfo = (id) => {
    setShowMoreAll(true);
    setShowMoreId(id);
  };
  return (
    <>
      <p className="text-gray-800 font-bold text-2xl pb-4 mt-2">
        Cambio online
      </p>
      <div className="flex justify-between align-items-center">
        <p className="align-self: center text-[#8E8E8E] text-[18px] font-normal">
          Despliega para horarios de banco a banco. Diferidas en todas las
          empresas.
        </p>
      </div>
      <div className="sm:flex overflow-hidden max-w-5xl">
        <div className="sm:w-1/2 mr-1">
          <div className="flex h-10">
            { showMoreAll ? (
              <div className="w-40 sm:w-64 flex align-middle" onClick={() => hideInfo()}>
                <span className="text-xs sm:text-base my-auto">
                  Mostrar información adicional
                </span>
                <button className="mx-2">
                  <AiOutlineDownCircle className="text-2xl cursor-pointer" />
                </button>
              </div>
            ) : (
              <div className="w-40 sm:w-64 flex align-middle" onClick={() => setShowMoreAll(true)}>
                <span className="text-xs sm:text-base my-auto">
                  Mostrar información adicional
                </span>
                <button className="mx-2">
                  <AiOutlineDownCircle className="text-2xl cursor-pointer rotate-180" />
                </button>
              </div>
            )}
            <div className="flex ml-24 sm:ml-0">
              <p className="text-sm sm:text-base sm:w-24 mr-1 text-center my-auto">Compra</p>
              <p className="text-sm ml-4 sm:text-base sm:w-24 sm:ml-7 text-center my-auto">Venta</p>
            </div>
          </div>
          { firstPart?.map((item, index) => (
            <>
              <div 
                key={index} 
                className={ index % 2 > 0 || item.id === showMoreId ? "bg-gray flex align-middle py-2 sm:p-4 justify-between" : `flex align-middle py-2 sm:p-4 justify-between` }>
                <div className="sm:max-w-32 sm:w-32 flex align-middle">
                  <img className="w-24 max-w-24 pr-2 sm:w-40 sm:max-w-40 sm:max-h-8 my-auto" src={item.img}/>
                </div>
                { showMoreAll || item.id === showMoreId ? (
                  <button className="mx-2" onClick={() => hideInfo()}>
                    <AiOutlineDownCircle className="text-2xl cursor-pointer" />
                  </button>
                ) : (
                  <button className="mx-2" onClick={() => setShowMoreId(item.id)}>
                    <AiOutlineDownCircle className="text-2xl cursor-pointer rotate-180" />
                  </button>
                ) }

                <button className="py-1 px-2 sm:px-4 text-white rounded-full" style={{ backgroundColor: item.color }}>
                  Cambiar
                </button>
                <div className="w-24 flex items-center justify-between text-xl">
                  <p className="text-sm sm:text-base">{item.rates[0].buy.cost}</p>
                  <p className="text-sm mr-1 sm:text-base">{item.rates[1].sale.cost}</p>
                </div>
              </div>
              { showMoreAll || item.id === showMoreId ? (
                <div className="bg-gray flex p-2 mb-2 mt-1 text-sm">
                  <div className="sm:w-36 sm:mx-4">
                    <p>{item.bank}</p>
                  </div>
                  <div className="sm:mx-10 sm:w-60">
                    <p>Lunes a viernes: {item.schedule["M-F"]}</p>
                    <p>Sábados:{" "}{ item.schedule.Saturdays === "" ? "No hay atención": item.schedule.Saturdays }</p>
                    <p>Domingos:{" "}{item.schedule.Sundays === ""? "No hay atención": item.schedule.Sundays }</p>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </div>
        <div className="sm:w-1/2 ml-1">
          <div className="hidden h-10 sm:flex">
            <div className="sm:w-64 flex align-middle"></div>
            <p className="sm:w-24 mr-1 text-center my-auto">Compra</p>
            <p className="sm:w-24 ml-7 text-center my-auto">Venta</p>
          </div>
          { secondPart?.map((item, index) => (
            <>
              <div
                key={index}
                className={ index % 2 > 0 || item.id === showMoreId ? "bg-gray flex align-middle py-2 sm:p-4 justify-between": `flex align-middle py-2 sm:p-4 justify-between`}>
                <div className="sm:max-w-32 sm:w-32 flex align-middle">
                  <img className="w-24 max-w-24 pr-2 sm:w-40 sm:max-w-40 sm:max-h-8 my-auto" src={item.img}/>
                </div>
                { showMoreAll || item.id === showMoreId ? (
                  <button className="mx-2" onClick={() => hideInfo()}>
                    <AiOutlineDownCircle className="text-2xl cursor-pointer" />
                  </button>
                ) : (
                  <button className="mx-2" onClick={() => setShowMoreId(item.id)}>
                    <AiOutlineDownCircle className="text-2xl cursor-pointer rotate-180" />
                  </button>
                ) }

                <button className="py-1 px-2 sm:px-4 text-white rounded-full" style={{ backgroundColor: item.color }}>
                  Cambiar
                </button>
                <div className="w-24 flex items-center justify-between text-xl">
                  <p className="text-sm sm:text-base">{item.rates[0].buy.cost}</p>
                  <p className="text-sm mr-1 sm:text-base">{item.rates[1].sale.cost}</p>
                </div>
              </div>
              {showMoreAll || item.id === showMoreId ? (
                <div className="bg-gray flex p-2 mb-2 mt-1 text-sm">
                  <div className="sm:w-36 sm:mx-4">
                    <p>{item.bank}</p>
                  </div>
                  <div className="sm:mx-10 sm:w-60">
                    <p>Lunes a viernes: {item.schedule["M-F"]}</p>
                    <p>Sábados:{" "} {item.schedule.Saturdays === "" ? "No hay atención": item.schedule.Saturdays }</p>
                    <p>Domingos:{" "} {item.schedule.Sundays === ""? "No hay atención": item.schedule.Sundays}</p>
                  </div>
                </div>
              ) : null }
            </>
          )) }
        </div>
      </div>
    </>
  );
};

export default CasasCambio;
