import React, { useEffect, useState } from "react";
import api from "@framework/api";
import Menu from "../components/Navbar/Menu";
import Title from "../components/Title";
import Footer from "../components/Footer";

const exchangeHouses = ({
  departaments,
  provinces,
  districts,
  onlineExchangeHouses,
  menu,
}) => {
  
  const [departamentos, setDepartamentos ] = useState(departaments);
  const [provincias, setProvincias ] = useState(provinces);
  const [distritos, setDistritos ] = useState(districts);
  const [casasCambio, setCasasCambio ] = useState(null);
  const [casaCambio, setCasaCambio ] = useState(null);
  
  const [nombreDistrito, setNombreDistrito] = useState('Prueba')
  const [departament, setDepartament] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [homeChange, setHomeChange] = useState("");

  useEffect(() => {
    refresh();
    async function  refresh()  {
      const { data } = await api.getProvinces(departament);
      setProvincias(data);
    };

  }, [departament])

  useEffect(() => {
    refresh();
    async function refresh()  {
      const { data  } = await api.getDistricts(departament, province);
      setDistritos(data);
    };
  }, [province])

  useEffect(() => {
    refresh();
    async function refresh()  {
      const { data  } = await api.getHouseChange(departament, province, district);
      setCasasCambio(data);
    };
  }, [district])

  // useEffect(() => {
  //   refresh();
  //   async function refresh()  {
  //     const { data  } = await api.getHomeChange(casaCambio.url);
  //     setCasaCambio(data);
  //   };
  // }, [casaCambio])

  const onHandleCasa = (e) => {
    const option = e.target.value;
    setCasaCambio(option);
  }

  const onHandleDepartamento = (e) => {
    const option = e.target.value;
    setDepartament(option);
    setProvince(-1);
    setDistrict(-1);
  }
  const onHandleProvincia = (e) => {
    const option = e.target.value;
    setProvince(option);
    setDistrict(-1);
  }
  const onHandleDistrito = (e) => {
    const option = e.target.value;
    setDistrict(option);
  }

  const searchExchangeHouses = () => {};
  return (
    <div className="h-[100%]">
      <Menu menu={menu} onlineExchangeHouses={onlineExchangeHouses} />
      <div className="grid grid-cols-6 pt-10 ">
        <div className="w-[100%] align-middle col-span-1 ">
          <Title type="h6" text="Cambio de monedas en Perú" />
        </div>
        <div className="container lg:flex gap-4 px-2 sm:grid col-span-4">
          <select
            id="departaments"
            className="bg-slate-200 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleDepartamento}
          >
            <option value={-1}>Seleccione departamento</option>
            {departamentos?.map((departament) => (
              <option
                name="departament"
                key={departament.id}
                value={departament.id}
              >
                {departament.departamento}
              </option>
            ))}
          </select>
          <select
            id="provinces"
            className="bg-slate-200 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleProvincia}
          >
            <option value={-1}>Seleccione provincia</option> 
            {provincias?.map((province) => (
              <option
                name="province"
                key={province.id}
                value={province.id}
              >
                {province.provincia}
              </option>
            ))}
          </select>

          <select
            id="districts"
            className="bg-slate-200 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleDistrito}
          >
            <option value={-1}>Seleccione distrito</option>
            {distritos?.map((district) => (
              <option name="district" key={district.id} value={district.id}>
                {district.distrito}
              </option>
            ))}
          </select>
        </div>
        <button col-span-1
          onClick={() => searchExchangeHouses}
          className="my-auto bg-lgreen w-40 h-9 text-white rounded-3xl shadow-sm shadow-black"
        >
          Buscar
        </button>

      </div>
      <div className="min-h-screen">
          {district>0 &&<h1 className="py-10 text-4xl text-gray-900 font-black">
                  Casas de cambio de {nombreDistrito}
            </h1>          
          }
          {casasCambio && 
            casasCambio?.map((casas) => (
            
            <>
              <div className="bg-slate-100 rounded-lg drop-shadow-md border-2 p-8" onClick={onHandleCasa} url={casas.url} >

                <h1 className="text-3xl text-[#0096A6] font-black">
                  {casas.nombre}
                </h1>
                <h2 className="py-5 text-2xl">
                Dirección: {casas.direccion}
                </h2>
                <h2 className="py-2">
                Referencia: {casas.referencia}
                </h2>
              </div>
            </>
            
          ))}
        </div>
      <Footer/>
    </div>
  );
};

export default exchangeHouses;

export const getStaticProps = async () => {
  const { data: menu } = await api.getmenu();
  const { data: onlineExchangeHouses } = await api.getOnlineExchange();
  const { data: departaments } = await api.getDepartments();
  const idDep = departaments[0].id;
  const { data: provinces } = await api.getProvinces(idDep);
  const idProv = provinces[0].id;
  const { data : districts} = await api.getDistricts(idDep, idProv);
  return {
    props: {
      menu,
      onlineExchangeHouses,
      departaments,
      provinces,
      districts
    },
  };
};
