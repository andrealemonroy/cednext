import React from "react";
import Title from "./Title";
function Questions() {
  return (
    <>
      <div className="relative w-[1000px] overflow-hidden">
        <input
          type="checkbox"
          className="
              peer
              absolute top-0 inset-x-0
              w-full h-12
              opacity-0 z-10 cursor-pointer
            "
        />
        <div
          className="
            bg-gray-200
            h-14 w-full 
            pt-2 pl-4
            flex-items-center
            align-middle
          "
        >
          <Title type="h2" text="DÓLARES" />
        </div>
        <div
          className="
            absolute top-3 right-3
            text-black
            transition-transform duration-500
            rotate-0 peer-checked:rotate-180
          "
        >
          {/* arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className="
              overflow-hidden
              transition-all duration-500
              max-h-0 peer-checked:max-h-full
          "
        >
          <div className="p-4">
            <div className="pl-10 pt-6 text-justify">
              <Title type="h2" text="$ 100 >>" />
            </div>
            <div className="pl-10 pt-6 text-justify">
              <Title type="h2" text="$ 50 >>" />
            </div>
            <div className="pl-10 pt-6  text-justify">
              <Title type="h2" text="$ 20 >>" />
            </div>
          </div>
        </div>
        <div className=" bg-white p-8"></div>
      </div>
      <div className="relative w-[1000px] overflow-hidden">
        <input
          type="checkbox"
          className="
              peer
              absolute top-0 inset-x-0
              w-full h-12
              opacity-0 z-10 cursor-pointer
            "
        />
        <div
          className="
            bg-gray-200
            h-14 w-full 
            pt-2 pl-4
            flex-items-center
            align-middle
          "
        >
          <Title type="h2" text="SOLES" />
        </div>
        <div
          className="
            absolute top-3 right-3
            bg-emerald-700
            text-black
            transition-transform duration-500
            rotate-0 peer-checked:rotate-180
          "
        >
          {/* arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className=" 
              overflow-hidden
              transition-all duration-500
              max-h-0 peer-checked:max-h-full
          "
        >
          <div className="p-4 ">
            <div className="pl-0 pt-0 text-justify bg-emerald-700 cursor-pointer border-b-2 border-slate-50">
              <h2
                href="https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/"
                className="backgroundMoney"
              >
                {"S / 200 >>"}
              </h2>
            </div>
            <div className="pl-0 pt-0 text-justify bg-emerald-700 cursor-pointer border-b-2 border-slate-50">
              <h2
                href="https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/"
                className="backgroundMoney"
              >
                {"S / 100 >>"}
              </h2>
            </div>
            <div className="pl-0 pt-0 text-justify bg-emerald-700 cursor-pointer border-b-2 border-slate-50">
              <h2
                href="https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/"
                className="backgroundMoney"
              >
                {"S / 50 >>"}
              </h2>
            </div>
            <div className="pl-0 pt-0 text-justify bg-emerald-700 cursor-pointer border-b-2 border-slate-50">
              <h2
                href="https://cuantoestaeldolar.pe/blog/7-claves-para-detectar-si-un-billete-de-s-200-es-falso/"
                className="backgroundMoney"
              >
                {"S / 10 >>"}
              </h2>
            </div>
          </div>
        </div>
        <div className=" bg-white p-8"></div>
      </div>
    </>
  );
}

export default Questions;
