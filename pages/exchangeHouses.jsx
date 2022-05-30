import React, { useEffect, useState } from "react";
import api from "@framework/api";
import Menu from "../components/Navbar/Menu";
import Title from "../components/Title";

const exchangeHouses = ({ cities, onlineExchangeHouses, menu }) => {
  const [districs, setDistrics] = useState();
  const [citySelected, setCitySelected] = useState()
  const options = [
    { id: 1, value: "Lima" },
    { id: 2, value: "Cusco" },
    { id: 3, value: "Piura" },
    { id: 4, value: "Huancayo" },
    { id: 5, value: "Arequipa" },
    { id: 6, value: "Ayacucho" },
    { id: 7, value: "Huaral" },
    { id: 8, value: "Huaura" },
    { id: 9, value: "Barranca" },
    { id: 10, value: "Loreto" },
    { id: 11, value: "Puno" },
    { id: 12, value: "Tacna" },
    { id: 13, value: "Chiclayo" },
    { id: 14, value: "San Martín" },
    { id: 15, value: "Trujillo" },
  ];

  // useEffect(()=>{
    // const { data } = api.getDistrics();
    // setDistrics(data)
  // }, [citySelected])
  const searchExchangeHouses = () => {};
  return (
    <div>
      <Menu menu={menu} onlineExchangeHouses={onlineExchangeHouses} />
      <div className="flex space-x-4 mt-10 justify-center">
        <div className="w-[150px]">
          <Title type="h6" text="Cambio de monedas en Perú" />
        </div>
        <select
          id="countries"
          className="bg-gray w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {cities?.map((city) => (
            <option key={city.id} value={city.id} onClick={()=>setCitySelected(city.id)}>
              {city.departamento}
            </option>
          ))}
        </select>
        <select
          id="countries"
          className="bg-gray w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {districs?.map((distric) => (
            <option key={distric.id} value={distric.id}>
              {distric.departamento}
            </option>
          ))}
        </select>
        <button
          onClick={() => searchExchangeHouses}
          className="my-auto bg-lgreen w-40 h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default exchangeHouses;

export const getStaticProps = async () => {
  const { data: cities } = await api.getCities();
  const { data: menu } = await api.getmenu();
  const { data: onlineExchangeHouses } = await api.getOnlineExchange();

  return {
    props: {
      menu,
      onlineExchangeHouses,
      cities
    },
  };
};
