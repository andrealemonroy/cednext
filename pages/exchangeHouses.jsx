import React, { useEffect, useState } from "react";
import api from "@framework/api";
import Menu from "../components/Navbar/Menu";
import Title from "../components/Title";

const exchangeHouses = ({
  departaments,
  provinces,
  districts,
  onlineExchangeHouses,
  menu,
}) => {
  const [departament, setDepartament] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");

  const onHandleOnChange = (e) => {
    console.log(e.target.name);
    switch (e.target.value) {
      case "departament": {
        setDepartament(e.target.value);
        refresh();
        const refresh = async () => {
          const { data: provinces } = await api.getProvinces(departament);
        };
        console.log(provinces);
        break;
      }
      case "province":
        setProvince(e.target.value);
        refresh1();
        const refresh1 = async () => {
          const { data: districts } = await api.getDistricts(
            departament,
            province
          );
        };
        console.log(districts);
        break;
      case "district":
        setDistrict(e.target.value);
        refresh2();
        const refresh2 = async () => {
          const { data: homeChange } = await api.getDistricts(
            departament,
            province,
            district
          );
        };
        console.log(homeChange);
        break;
      default:
        break;
    }
  };

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
          id="departaments"
          className="bg-gray w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {departaments?.map((departament) => (
            <option
              name="departament"
              key={departament.id}
              value={departament.id}
              onChange={onHandleOnChange}
            >
              {departament.departamento}
            </option>
          ))}
        </select>
        <select
          id="provinces"
          className="bg-gray w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {provinces?.map((province) => (
            <option
              name="province"
              key={province.id}
              value={province.id}
              onChange={() => setCitySelected(province.id)}
            >
              {province.provincia}
            </option>
          ))}
        </select>

        <select
          id="districts"
          className="bg-gray w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {districts?.map((district) => (
            <option name="district" key={district.id} value={district.id}>
              {district.distrito}
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
  const { data: menu } = await api.getmenu();
  const { data: onlineExchangeHouses } = await api.getOnlineExchange();
  const { data: departaments } = await api.getDepartments();
  const { data: provinces } = await api.getProvinces();
  const { data: districts } = await api.getDistricts();
  return {
    props: {
      menu,
      onlineExchangeHouses,
      departaments,
      provinces,
      districts,
    },
  };
};
