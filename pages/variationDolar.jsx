import LineChart from "../components/LineChart";
import Title from "../components/Title";
import Menu from "../components/Navbar/Menu";

const variationDolar = ( onlineVariationDolar, menu ) => {
  return (
    <>
    {/* <Menu menu={menu} onlineVariationDolar={onlineVariationDolar} /> */}
      <div className="containerTitle">
        <Title
          type="h2"
          text="Variación del precio del dólar en el Perú"
        />
        <Title
          type="h3"
          text="Sigue el tipo de cambio en línea y encuentra el mejor momento para comprar o vender dolares en el Perú" 
        />
        <button>Compartir</button>
      </div>
      <div className="containerGraph">
        <LineChart />
      </div>
    </>
  )
}

export default variationDolar;
