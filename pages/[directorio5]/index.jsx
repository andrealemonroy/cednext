import React from "react";
import api from "@framework/api";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter/Filter";
import Menu from "../../components/Navbar/Menu";

export const directorio = ({menu, departaments}) => {
  return (
    <div className="h-[100%]">
      <Menu menu={menu} />
      <div className="grid grid-cols-6 pt-10 ">
        <div className="w-[100%] align-middle col-span-1 ">
          <Title type="h6" text="Cambio de monedas en Perú" />
        </div>
        <Filter departaments={departaments}/>
      </div>

      <div className="mt-5">
        <p className="text-gray-800 font-bold text-2xl pb-4 mt-2">Casas de Cambio</p>
        <div className="grid gap-4 grid-cols-3">
          {
            departaments.map( ({id, departamento}, i) =>
            <div key={i}>
              <img src={`img/lugares/${departamento.replaceAll(' ','-').toLowerCase()}.jpg`} alt="" />
              <h2>{departamento}</h2>
            </div>
            )
          }
        </div>
      </div>

      <div className="min-h-screen">
      </div>
      <Footer/>
    </div>
  );
}

export const getStaticProps = async ({params}) => {
  const { data: departaments } = await api.getDepartments();
  const { data: menu } = await api.getmenu();
  const { directorio5 } = params;

  if( directorio5 != 'directorio5' ) return { notFound: true }

  return {
    props: {
      menu,
      departaments
    },
  };

}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export default directorio;
