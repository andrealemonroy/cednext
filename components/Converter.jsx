import React, { useState, useEffect } from "react";

const Converter = (props) => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [currencySent, setCurrencySent] = useState("PEN");
  const [currencyReceived, setCurrencyReceived] = useState("USD");
  const [enable, setEnable] = useState(true);
  const exchange = () => {
    props.click({ firstValue, secondValue, currencySent });
    setEnable(false);
  };
  const back = () => {
    props.back();
    setEnable(true);
  };
  // useEffect(() => {
  //   exchangeDefault()
  // }, [firstValue]);

  // useEffect(() => {
  //   exchangeDefault()
  // }, [secondValue]);

  const exchangeDefault = (value) => {
    value != 0 && currencySent == "PEN"
      ? setSecondValue(
          parseFloat(
            value / parseFloat(props.exchangeRate.sale.cost).toFixed(3)
          ).toFixed(3)
        )
      : setSecondValue(
          parseFloat(
            value * parseFloat(props.exchangeRate.buy.cost).toFixed(3)
          ).toFixed(3)
        );
  };

  const exchangeDefaultFirstValue = () => {
    firstValue != 0 && currencyReceived == "PEN"
      ? setFirstValue(secondValue / props.exchangeRate.sale.cost)
      : setFirstValue(secondValue * props.exchangeRate.buy.cost);
  };

  const onChangeSecondValue = (e) => {
    setSecondValue(e);
  };
  const onChangeFirstValue = (e) => {
    setFirstValue(e);
    exchangeDefault(e);
  };

  const currencyIcon = (sent) =>
    sent ? (
      <div className="p-1 focus:outline-none focus:shadow-outline flex mr-2">
        {currencySent === "USD" ? (
          <img src="icons/flagUSA.svg" />
        ) : (
          <img src="icons/flagPeru.svg" />
        )}
        <span className="font-bold text-xl">{currencySent}</span>
      </div>
    ) : (
      <div className="p-1 focus:outline-none focus:shadow-outline flex mr-2">
        {currencyReceived === "USD" ? (
          <img src="icons/flagUSA.svg" />
        ) : (
          <img src="icons/flagPeru.svg" />
        )}
        <span className="font-bold text-xl">{currencyReceived}</span>
      </div>
    );
  const change = () => {
    setCurrencySent(currencyReceived);
    setCurrencyReceived(currencySent);
    firstValue != 0 && currencySent == "PEN"
      ? setSecondValue(
          parseFloat(
            firstValue * parseFloat(props.exchangeRate.buy.cost).toFixed(3)
          ).toFixed(3)
        )
      : setSecondValue(
          parseFloat(
            firstValue / parseFloat(props.exchangeRate.sale.cost).toFixed(3)
          ).toFixed(3)
        );
  };
  return (
    <div className="relative containerConverter">
      <div className="flex space-x-2">
        <div className="flex bg-third px-2 rounded-t-lg shadowPromote">
          <img src="/icons/promote.svg" />
          <div className="ml-1">
            <p className="transformText">¡Hola!</p>
            <p className="text-white">Auspicia aquí</p>
          </div>
        </div>
        <div className="my-auto">
          <p className="text-sm sm:text-sm md:text-base">
            Compra: {props.exchangeRate.buy.cost}
          </p>
          <div className="w-[100px] h-1 bg-secondary"></div>
        </div>
        <div className="my-auto">
          <p className="text-sm sm:text-sm md:text-base">
            Venta: {props.exchangeRate.sale.cost}
          </p>
          <div className="w-[100px] h-1 bg-secondary"></div>
        </div>
      </div>
      <div className="bg-secondary sm:w-[95%] rounded-lg relative">
        <div className="pt-2">
          <div className="mx-auto w-[90%] sm:w-[90%] md:w-[90%]">
            <p className="text-white uppercase font-semibold text-xs mb-2">
              Tú envías {currencySent === "PEN" ? "SOLES" : "DÓLARES"}
            </p>
            <div className="relative divide-x divide-lgray">
              <input
                value={firstValue}
                onChange={(e) => onChangeFirstValue(e.target.value)}
                className="w-full py-2 px-2 rounded-md"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                {currencyIcon(true)}
              </span>
            </div>
          </div>
        </div>

        <div
          className="mx-auto my-4 bg-primary rounded-full border-2 w-10 h-10 flex align-middle justify-center p-1.5 shadow-md shadow-black cursor-pointer"
          onClick={change}
        >
          <img src="icons/change.svg" />
        </div>
        <div>
          <div className="mx-auto w-[90%] sm:w-[90%] md:w-[90%]">
            <div className="relative divide-x h-auto divide-lgray">
              <input
                value={secondValue}
                onChange={(e) => onChangeSecondValue(e.target.value)}
                className="w-full py-2 px-2 rounded-md"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                {currencyIcon(false)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white uppercase font-semibold text-xs mt-2">
                Tú recibes {currencyReceived === "USD" ? "DÓLARES" : "SOLES"}
              </span>
              <span className="text-lgray text-xs mt-2">
                *Valor referencial SUNAT
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 pb-4">
          {enable ? (
            <button
              className="bg-lgreen w-40 h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
              onClick={exchange}
            >
              Convertir
            </button>
          ) : (
            <button
              className="bg-lgreen w-40 h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
              onClick={back}
            >
              Regresar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;
