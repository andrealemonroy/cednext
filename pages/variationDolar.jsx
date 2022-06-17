import LineChart from "../components/LineChart";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "@framework/api";
import GraphVariation from "../components/GraphVariation";
import { formatDate } from "../utils/dateFormat";

export default function variationDolar({ dataBuy }) {
  return (
    <>
      <Navbar />
      <GraphVariation dataBuy={dataBuy} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await api.getBuy();
  const dataBuy = data[0].price;
  return {
    props: {
      dataBuy,
    },
  };
}
