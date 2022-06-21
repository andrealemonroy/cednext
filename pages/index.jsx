import api from "@framework/api";
import Blog from "../components/Blog";
import Converter from "../components/Converter";
import Footer from "../components/Footer";
import ListOnlineExchange from "../components/ListOnlineExchange";
import Menu from "../components/Navbar/Menu";
import Title from "../components/Title";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import CasasCambio from "../components/CasasCambio/CasasCambio";
import { Layout } from "../components/Layout";
import AdsSlot from "../components/ads/AdsSlot";

import GraphVariation from "../components/GraphVariation";
import Money from "../components/Money";
import BasicInformation from "../components/BasicInformation";
import Questions from "../components/Questions";
import EquivalenceMoney from "../components/EquivalenceMoney";
import Quotation from "../components/Quotation";

import brandDesign from "./brandDesign";


export default function Home({
  dataBuy,
  menu,
  onlineExchangeHouses,
  exchangeDolar,
  exchangeSunat,
  exchangeEuro,
  posts,
  exchangeBanks,
  ads,
}) {
  console.log(menu)
  const { div_id:embi } = ads.find(item=>item.name === 'd_embi_ced_39');
  const { div_id:dF728x90 } = ads.find(item=>item.name === 'dF728x90');

  const [onlineExchange, setOnlineExchange] = useState();
  const [exchangeRate, setExchangeRate] = useState(exchangeSunat);

  const buyDolar = exchangeSunat.buy.cost;
  const saleDolar = exchangeSunat.sale.cost;

  const exportAsPicture = () => {
    var html = document.getElementsByTagName("HTML")[0];
    var body = document.getElementsByTagName("BODY")[0];
    var htmlWidth = html.clientWidth;
    var bodyWidth = body.clientWidth;
    var data = document.getElementById("converter");
    var newWidth = data.scrollWidth - data.clientWidth;
    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }
    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";
    html2canvas(data).then((canvas) => {
      var image = canvas.toDataURL("image/png", 1.0);
      var fileName = currentExport.split("Export")[0] + ".png";
      saveAs(image, fileName);
    });
  };
  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };
  const exchange = (values) => {
    // setOnlineExchange()
    let update;
    values.currencySent === "PEN"
      ? (update = onlineExchangeHouses.map((item) => {
          let obj = { ...item };
          obj.rates[1].sale.cost = parseFloat(
            parseFloat(values.firstValue).toFixed(3) /
              parseFloat(obj.rates[1].sale.cost).toFixed(3)
          ).toFixed(3);
          return obj;
        }))
      : (update = onlineExchangeHouses.map((item) => {
          let obj = { ...item };
          obj.rates[0].buy.cost = parseFloat(
            parseFloat(values.firstValue).toFixed(3) *
              parseFloat(obj.rates[0].buy.cost).toFixed(3)
          ).toFixed(3);
          return obj;
        }));
    setOnlineExchange(update);
  };
  const back = () => {
    fetchOnlineHouses().then((res) => {
      setOnlineExchange(res.data);
    });
  };

  const fetchOnlineHouses = async () => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/exchangehouses`
    ).then((res) => {
      return res.json();
    });
    return response;
  };

  useEffect(() => {
    // setOnlineExchange(onlineExchangeHouses);
    // fetchOnlineHouses().then((res) => {
    //   setOnlineExchange(res.data);
    // });
  }, []);

  return (
    <div>
      <Menu menu={menu} onlineExchangeHouses={onlineExchangeHouses} />
      <div className="px-4">
        <div className="w-full">
          <Title type="h1" text="Precio del dólar hoy en Perú" />
          <div>
            <Title type="h3" text="Actualizado | Dólares a soles/soles a dólares"/>
          </div>
        </div>
        <div id="converter" className="sm:flex justify-between mt-5">
          <div className="mt-10">
            <div className="flex sm:w-[500px]">
              <div className="w-[200px] flex">
                <Title type="h2" text="Cotización" />
                <button className="bg-lgreen ml-2 w-[140px] h-9 text-white px-4 rounded-3xl shadow-sm shadow-black" onClick={exportAsPicture} >
                  Compartir
                </button>
              </div>
              <div className="flex my-auto justify-around w-full">
                <div>
                  <Title type="h4" text="Compra" />
                </div>
                <div>
                  <Title type="h4" text="Venta" />
                </div>
              </div>
            </div>
            <div className=" sm:w-[500px]">
              <div className="flex py-3">
                <div className="w-[350px] flex align-middle">
                  <div className="w-10 my-auto">
                    <img className="w-7 max-h-9" src="/icons/logoSunat.svg" />
                  </div>
                  <Title type="h5" text="Sunat" />
                </div>
                <div className="flex my-auto justify-around w-full">
                  <div>
                    <Title type="h5" text={exchangeSunat?.buy.cost} />
                  </div>
                  <div>
                    <Title type="h5" text={exchangeSunat?.sale.cost} />
                  </div>
                </div>
              </div>
              <div className="flex py-3 bg-gray">
                <div className="w-[350px] flex align-middle">
                  <div className="w-10 my-auto">
                    <img className="w-7 max-h-9" src="/icons/dolar.svg" />
                  </div>
                  <Title type="h5" text="Dólar" />
                </div>
                <div className="flex my-auto justify-around w-full">
                  <div>
                    <Title type="h5" text={exchangeDolar?.buy.cost} />
                  </div>
                  <div>
                    <Title type="h5" text={exchangeDolar?.sale.cost} />
                  </div>
                </div>
              </div>
              <div className="flex py-3">
                <div className="w-[350px] flex align-middle">
                  <div className="w-10 my-auto">
                    <img className="w-7 max-h-9" src="/icons/euro.svg" />
                  </div>
                  <Title type="h5" text="Euro" />
                </div>
                <div className="flex my-auto justify-around w-full">
                  <div>
                    <Title type="h5" text={exchangeEuro?.buy.cost} />
                  </div>
                  <div>
                    <Title type="h5" text={exchangeEuro?.sale.cost} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Converter click={exchange} exchangeRate={exchangeRate} back={back} />
        </div>
        <CasasCambio onlineExchangeHouses={onlineExchangeHouses}/>
        <AdsSlot slodId={ embi } />
        <div className="h-64 bg-lightGray w-full justify-center align-items-center"></div>
        <div className="w-full mt-10">
          <div className="text-center">
            <Title type="h7" text="Cambio Interbancario »" />
            <p className="mt-2">
              Despliega para ver horarios del mercado bancario
            </p>
            <button
              onClick={exportAsPicture}
              className="mt-2 bg-lgreen w-[140px] h-9 text-white px-4 rounded-3xl shadow-sm shadow-black"
            >
              Compartir
            </button>
          </div>
          <div className="flex py-3 mt-5">
            <div className="w-[350px] flex align-middle">
              <div className="w-40 my-auto">
                <img className="w-full max-h-5" src="/icons/logoBCP.svg" />
              </div>
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeBanks?.bcp.buy?.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeBanks?.bcp.sale?.cost} />
              </div>
            </div>
          </div>
          <div className="flex py-3 bg-gray">
            <div className="w-[350px] flex align-middle">
              <div className="w-40 my-auto">
                <img className="w-full max-h-5" src="/icons/logoIBK.svg" />
              </div>
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeBanks?.Interbank.buy?.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeBanks?.Interbank.sale?.cost} />
              </div>
            </div>
          </div>
          <div className="flex py-3">
            <div className="w-[350px] flex align-middle">
              <div className="w-40 my-auto">
                <img className="w-full max-h-5" src="/icons/logoBBVA.svg" />
              </div>
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeBanks?.bbva.buy?.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeBanks?.bbva.sale?.cost} />
              </div>
            </div>
          </div>
          <div className="flex py-3">
            <div className="w-[350px] flex align-middle">
              <div className="w-40 my-auto">
                <img className="w-full max-h-5" src="/icons/logoScotia.svg" />
              </div>
            </div>
            <div className="flex my-auto justify-around w-full">
              <div>
                <Title type="h5" text={exchangeBanks?.scotiabank.buy?.cost} />
              </div>
              <div>
                <Title type="h5" text={exchangeBanks?.scotiabank.sale?.cost} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 bg-lightGray w-full justify-center align-items-center"></div>
        <GraphVariation dataBuy={dataBuy[0].price} />
        <div className="h-24 bg-lightGray w-full justify-center align-items-center"></div>
        <Blog blogData={posts} className="justify-center" />
        <div className="h-64 bg-lightGray w-full justify-center align-items-center"></div>
        <div className="containerMoney pt-10">
          <div className="containerEquivalence">
            <EquivalenceMoney buy={buyDolar} sale={saleDolar} />
          </div>
          <div className="containerDetected">
            <Title type="h2" text="Detecta billetes falsos »" />
            <Money />
          </div>
        </div>
        <AdsSlot slodId={dF728x90} />
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: menu } = await api.getmenu();
  const { data: onlineExchangeHouses } = await api.getOnlineExchange();
  const { data: exchangeSunat } = await api.getExchange("sbs");
  const { data: exchangeDolar } = await api.getExchange("calle");
  const { data: exchangeEuro } = await api.getExchange("euro");
  const { data: exchangeBanks } = await api.getExchange("interbank");
  const { data: posts } = await api.getPosts();
  const { data: ads } = await api.publicidad();
  const { data: dataBuy } = await api.getBuy();
  return {
    props: {
      menu,
      onlineExchangeHouses,
      exchangeSunat,
      exchangeDolar,
      exchangeEuro,
      posts,
      exchangeBanks,
      ads,
      dataBuy,
    },
  };
};

Home.Layout = Layout
