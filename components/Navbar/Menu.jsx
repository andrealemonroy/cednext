import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

const Menu = ({ menu, onlineExchangeHouses }) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!scrolled ? (
        <div className="justify-between h-20 w-screen sm:w-full bg-primary px-6 py-1 flex mb-4">
          <Image
            height="51"
            width="96"
            className="h-12 my-auto cursor-pointer"
            src="/icons/logoBlack.svg"
            alt="Logo de cuánto está el dólar"
            onClick={() => router.push("/")}
          />
          <nav className="hidden sm:flex align-middle items-center justify-between sm:max-w-4xl mx-auto">
            <ul className="flex">
              {menu?.map(({ id, name, path }) => {
                return (
                  <Link key={id} href={path}>
                    <a className="font-medium cursor-pointer mx-3">{name}</a>
                  </Link>
                );
              })}
            </ul>
            <div className="mx-3">
              <FaFacebook className="text-2xl cursor-pointer" />
            </div>
            <div className="mx-3">
              <FaYoutube className="text-2xl cursor-pointer" />
            </div>
            <div className="mx-3">
              <FaTwitter className="text-2xl cursor-pointer" />
            </div>
          </nav>
          {openNav ? (
            <div
              onClick={() => setOpenNav(false)}
              className="w-12 h-12 bg-primary rounded-full mt-2 text-center grid justify-center items-center"
            >
              <Image
                height="40"
                width="40"
                alt="Logo de casa de cambio"
                className="m-auto"
                src="/icons/close.svg"
              />
            </div>
          ) : (
            <div
              className="grid mt-5 overflow-hidden sm:hidden"
              onClick={() => setOpenNav(true)}
            >
              <Image
                height="10"
                width="10"
                alt="Menu"
                className="mx-auto mt-2"
                src="/icons/menu.svg"
              />
              <span className="text-[10px]">MENÚ</span>
            </div>
          )}
        </div>
      ) : (
        <div className="h-20 w-screen sm:w-fit bg-white px-6 flex space-between fixed top-0 z-50 shadow-lg">
          <Image
            height="51"
            width="96"
            className="h-12 my-auto"
            src="/icons/logo.svg"
            alt="Logo de cuánto está el dólar "
          />
          {!openNav ? (
            <div className="flex max-w-xs sm:max-w-4xl mt-1">
              <div className="nav-data overflow-hidden">
                <div className="wrapper">
                  <div className="target flex">
                    {onlineExchangeHouses?.map((onlineExchangeHouse, index) => (
                      <div key={index} className="flex mx-2 sm:mx-4 sm:w-64">
                        <div className="w-24 sm:max-w-32 sm:w-32 flex align-middle">
                          <img
                            src={"/" + onlineExchangeHouse.img}
                            alt="Logo de casa de cambio: TuCambista"
                            className="w-32 pr-2 sm:w-40 sm:max-w-40 sm:max-h-8 my-auto"
                          />
                        </div>

                        <div className="mx-2 my-auto">
                          <p className="text-secondary">Compra</p>
                          <p>{onlineExchangeHouse.rates[0].buy.cost}</p>
                        </div>
                        <div className="mx-2">
                          <p className="text-secondary">Venta</p>
                          <p>{onlineExchangeHouse.rates[1].sale.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="hidden sm:block cursor-pointer"
                onClick={() => setOpenNav(true)}
              >
                <div className="w-12 h-12 bg-primary rounded-full mt-2 text-center grid justify-center pt-2">
                  <Image
                    height="10"
                    width="10"
                    alt="Logo de casa de cambio: TuCambista"
                    className="mx-auto"
                    src="/icons/menu.svg"
                  />
                  <span className="text-[10px]">MENÚ</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex">
              <nav className="flex align-middle items-center justify-between max-w-4xl min-w-max mx-10">
                <ul className="flex">
                  {menu.map(({ id, name, path }) => {
                    return (
                      <Link key={id} href={path}>
                        <a className="font-medium cursor-pointer mx-4">
                          {name}
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </nav>
              <div
                className="cursor-pointer mt-1"
                onClick={() => setOpenNav(false)}
              >
                <div className="w-12 h-12 bg-primary rounded-full mt-2 text-center grid justify-center items-center">
                  <Image
                    height="48"
                    width="96"
                    alt="Logo de casa de cambio: TuCambista"
                    className="m-auto"
                    src="/icons/close.svg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {openNav && (
        <div>
          <nav className="block absolute bg-white w-screen z-50 shadow-sm sm:hidden align-middle items-center justify-between sm:max-w-4xl mx-auto">
            <ul className="grid divide-y divide-lgray">
              {menu.map(({ id, name, path }) => {
                return (
                  <Link key={id} href={path}>
                    <a className="p-5 sm:p-0 font-medium cursor-pointer mx-3">
                      {name}
                    </a>
                  </Link>
                );
              })}
            </ul>
            <div className="mx-3">
              <FaFacebook className="text-2xl cursor-pointer" />
            </div>
            <div className="mx-3">
              <FaYoutube className="text-2xl cursor-pointer" />
            </div>
            <div className="mx-3">
              <FaTwitter className="text-2xl cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
export default Menu;
