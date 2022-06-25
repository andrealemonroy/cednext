import React, { useEffect, useState } from "react";
import api from "@framework/api";
import Menu from "../components/Navbar/Menu";
import Title from "../components/Title";
import Footer from "../components/Footer";
import HomeChangeDetails from "../components/homeChangeDetails";
import Money from "../components/Money";
import Image from "next/image";
import CardItem from "../components/CardItem";
import AdsSlot from '../components/ads/AdsSlot';
const initialHome = {
  id: "148",
  longitud: "-77.03248380",
  latitud: "-12.08427698",
  nombre: "Sudameris",
  direccion: "Jr. Ignacio Merino 2001",
  compra: "",
  venta: "",
  tipo: "0",
  destacado: null,
  description: "",
  rutaimagen: null,
  servicios: null,
  bancos: null,
  referencia:
    "En el cruce de Ignacio merino con Jr. Jose bernardo Alcedo / Registrado en la sbs",
  idlocalidad: null,
  id_pais: "1",
  id_departamento: "15",
  id_provincia: "127",
  id_distrito: "1266",
  idusuario: "1",
  correo: "angelinepe@gmail.com",
  password: "",
  heading: "112",
  fov: "0",
  pitch: "0",
  zoom: "0",
  bcp: "",
  interbank: "",
  continental: "",
  scotiabank: "",
  dhl: null,
  wu: null,
  euro: null,
  yen: null,
  pagos: null,
  horario: "",
  telefono: "",
  celular: "",
  web: "",
  services: "",
  mv: "0",
  sbs: "0",
};

const ExchangeHouses = ({
  departaments,
  provinces,
  districts,
  onlineExchangeHouses,
  menu,
  ads
}) => {
  const [departamentos, setDepartamentos] = useState(departaments);
  const [provincias, setProvincias] = useState(provinces);
  const [distritos, setDistritos] = useState(districts);
  const [casasCambio, setCasasCambio] = useState(false);
  const [casaCambio, setCasaCambio] = useState(null);

  const [nombreDistrito, setNombreDistrito] = useState("Cercado de Lima");
  const [departament, setDepartament] = useState("15");
  const [province, setProvince] = useState("127");
  const [district, setDistrict] = useState("1251");
  const [homeChange, setHomeChange] = useState(false);
  const [inicio, setInicio] = useState(true);

  const { div_id: embi } = ads.find((item) => item.name === 'd_embi_ced_39');
  const { div_id: dF728x90 } = ads.find((item) => item.name === 'dF728x90');
  const { div_id: dF300x250 } = ads.find((item) => item.name === 'dF300x250');

  useEffect(() => {
    refresh();
    async function refresh() {
      const { data } = await api.getProvinces(departament);
      setProvincias(data);
    }
  }, [departament]);

  useEffect(() => {
    refresh();
    async function refresh() {
      const { data } = await api.getDistricts(departament, province);
      setDistritos(data);
    }
  }, [province]);

  useEffect(() => {
    refresh();
    async function refresh() {
      const { data } = await api.getHouseChange(
        departament,
        province,
        district
      );
      setCasasCambio(data);
    }
  }, [district]);

  const onHandleCasa = (url) => {
    setCasaCambio(url);
    refresh();
    async function refresh() {
      const { data } = await api.getHomeChange(url);
      setHomeChange(data[0]); //[] true
    }
  };

  const onHandleDepartamento = (e) => {
    const option = e.target.value;
    setDepartament(option);
    // setProvince(-1);
    // setDistrict(-1);
    setHomeChange(false);
    setCasaCambio(null);
    // console.log(casasCambio);
    // console.log(casaCambio);
  };

  const onHandleProvincia = (e) => {
    const option = e.target.value;
    setProvince(option);
    // setDistrict(-1);
  };
  const onHandleDistrito = (e) => {
    const option = e.target.value.split("-");
    const idDistrito = option[0];
    let words = option[1].split(" ");
    if (words.length > 1) {
      let name = words[words.length - 1];
      let name1 = words[1];
      words[words.length - 1] =
        name.toUpperCase().slice(0, 1) + name.toLowerCase().slice(1);
      if (words.length === 4) {
        words[1] =
          name1.toUpperCase().slice(0, 1) + name1.toLowerCase().slice(1);
      }
      option[1] = words.join(" ");
    }
    const nombreDistrito = option[1];
    option[1] === "Cercado de lima" ? "Cercado de Lima" : option[1];
    setDistrict(idDistrito);
    setNombreDistrito(nombreDistrito);
    // setInicio(false);
  };

  const searchExchangeHouses = () => {
    setInicio(false);
  };
  return (
    <div className="h-[100%]">
      <Menu menu={menu} onlineExchangeHouses={onlineExchangeHouses} />
      <AdsSlot slodId={embi} />
      <div className="container grid mb-48 md:mb-40 lg:mb-8 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 pt-10 justify-between ">
        <div className="col-span-1 pl-6 sm:px-6 md:px-6 lg:px-2 align-middle">
          <Title type="h7" text="Cambio de monedas en Perú" align="center" />
        </div>
        <div className="grid pt-2 gap-3 h-[56px] px-6 sm:px-6 lg:grid-cols-4 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 ">
          <select
            id="departaments"
            className="col-span-1 border border-gray bg-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleDepartamento}
          >
            <option className="bg-slate-200" value={-1}>
              Seleccione departamento
            </option>
            {departamentos?.map((departament) => (
              <option
                className="bg-slate-300"
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
            className="col-span-1  border border-gray bg-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleProvincia}
          >
            <option value={-1}>Seleccione provincia</option>
            {provincias?.map((province) => (
              <option
                className="bg-slate-300"
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
            className="col-span-1 border border-gray bg-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-md"
            onChange={onHandleDistrito}
          >
            <option value={-1} name={"No seleccionado"}>
              Seleccione distrito
            </option>
            {distritos?.map((district) => (
              <option
                className="bg-slate-300"
                key={district.id}
                value={district.id + "-" + district.distrito}
              >
                {district.distrito}
              </option>
            ))}
          </select>
          <button
            onClick={() => searchExchangeHouses}
            className="col-span-1 w-auto my-auto bg-lgreen h-9 text-white rounded-3xl shadow-sm shadow-black"
          >
            Buscar
          </button>
        </div>
      </div>
      <div>
        {inicio && (
          <CardItem LocalData={departamentos} className="justify-center" />
        )}
        {homeChange && <HomeChangeDetails datos={homeChange} />}
        {casaCambio === null && !inicio && (
          <h1 className="pl-6 text-4xl text-gray-900 font-black">
            Casas de cambio de | {nombreDistrito}
          </h1>
        )}
        <div className="containerHome pt-4">
          <div>
            {casaCambio === null &&
              !inicio &&
              casasCambio &&
              casasCambio?.map((casas) => (
                <>
                  <div>
                    <ul
                      key={casas.url}
                      className="border-y-2 border-gray grid gap-4 grid-cols-1 md:grid-cols-4"
                    >
                      <div
                        key={casas.url}
                        className="bg-slate-100  p-8  grid-cols-1 md:col-span-3"
                        onClick={() => onHandleCasa(casas.url)}
                      >
                        <a
                          className="no-underline hover:underline"
                          type={casas.url}
                          rel={casas.url}
                        >
                          <h1 className="text-3xl text-[#0096A6] font-black">
                            {casas.nombre}
                          </h1>
                        </a>
                        <h2 className="py-5 text-2xl">
                          Dirección: {casas.direccion}
                        </h2>
                        <h2 className="py-2">Referencia: {casas.referencia}</h2>
                      </div>
                      {casas.referencia.indexOf(" sbs", 0) > 0 && (
                        <div className="col-span-1 pt-0 pl-16 sm:pl-0 sm:pr-8 pb-10 md:pt-14 ">
                          <Image
                            className="w-full border-gray"
                            src="/img/registerSbs.svg"
                            alt="Registrada en la SBS"
                            width={207.21}
                            height={89}
                          />
                        </div>
                      )}
                    </ul>
                  </div>
                </>
              ))}
          </div>
          {/* <div className="Money mb-10">
            <Money />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ExchangeHouses;

export const getStaticProps = async () => {
  const { data: menu } = await api.getmenu();
  const { data: onlineExchangeHouses } = await api.getOnlineExchange();
  const { data: departaments } = await api.getDepartments();
  const idDep = departaments[0].id;
  const { data: provinces } = await api.getProvinces(idDep);
  const idProv = provinces[0].id;
  const { data: districts } = await api.getDistricts(idDep, idProv);
  const { data: ads } = await api.publicidad();
  return {
    props: {
      menu,
      onlineExchangeHouses,
      departaments,
      provinces,
      districts,
      ads
    },
  };
};