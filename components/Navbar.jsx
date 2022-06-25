import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // console.log(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!scrolled ? (
        <div className="h-20 w-full bg-primary px-6 py-1 flex">
          <img className="h-12 my-auto" src="icons/logoBlack.svg" />
          <nav className="flex align-middle items-center justify-between max-w-4xl mx-auto">
            {navLinks.map((link, index) => {
              return (
                <ul key={index} className="mx-1">
                  <Link href={link.path}>
                    <li key={index} className="font-medium cursor-pointer">
                      {link.name}
                    </li>
                  </Link>
                </ul>
              );
            })}
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
      ) : (
        <div className="h-20 w-full bg-white px-6 py-1 flex space-between fixed top-0 z-50 shadow-lg sm:max-w-5xl">
          <img className="h-12 my-auto" src="icons/logo.svg" />
          {!openNav ? (
            <div className="flex max-w-4xl">
              <div className="nav-data overflow-hidden">
                <div className="wrapper">
                  <div className="target flex">
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/tucambista.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/cambiafx.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/dollarhouse.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/tkambio.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-2">
                  <div className="target-2 flex">
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/tucambista.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/cambiafx.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/dollarhouse.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                    <div className="flex mx-4 ">
                      <div className="mx-2">
                        <img src="/icons/tkambio.svg" />
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Compra</p>
                        <p>3.300</p>
                      </div>
                      <div className="mx-2">
                        <p className="text-secondary">Venta</p>
                        <p>3.300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer ml-2"
                onClick={() => setOpenNav(true)}
              >
                <div className="w-12 h-12 bg-primary rounded-full mt-2 text-center grid justify-center">
                  <img className="mx-auto mt-2" src="icons/menu.svg" />
                  <span className="text-[10px]">MENÚ</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex">
              <nav className="flex align-middle items-center justify-between max-w-4xl min-w-max mx-10">
                {navLinks.map((link, index) => {
                  return (
                    <ul key={index} className="mx-4">
                      <Link href={link.path}>
                        <li key={index} className="font-medium cursor-pointer">
                          {link.name}
                        </li>
                      </Link>
                    </ul>
                  );
                })}
              </nav>
              <div className="cursor-pointer" onClick={() => setOpenNav(false)}>
                <div className="w-12 h-12 bg-primary rounded-full mt-2 text-center grid justify-center items-center">
                  <img className="m-auto" src="icons/close.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
