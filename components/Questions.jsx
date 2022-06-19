import React from "react";
import Title from "./Title";
function Questions() {
  return (
    <>
      <div className="relative overflow-hidden">
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
            h-14  
            pt-3 pl-4
            flex-items-center
            align-center
            mx-auto pt-2 pl-14 pr-8 pb-6 grid grid-cols-1 gap-4
          "
        >
          <Title type="h2" text="Preguntas frecuentes" />
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
              bg-background: #F9F9F9;
              overflow-hidden
              transition-all duration-500
              max-h-0 peer-checked:max-h-full
          "
        >
          <div className="p-4 pr-14">
            <div className="pl-10 pt-6 text-justify">
              <Title type="h2" text="¿Qué tipos de cambio puedo conseguir?" />
              <p className="pt-6 text-[18px]">
                El dólar interbancario es el dólar que consigues en las agencias
                bancarias.
              </p>
              <p className="pt-4 pb-6 text-[18px]">
                Su precio es generalmente mayor al del dólar paralelo. Se conoce
                como dólar paralelo al dólar que consigues en las casas de
                cambio o con cambistas. En el Perú, existen casas de cambio
                fisicas y online.
              </p>
            </div>
            <div className="pl-10 pt-6 text-justify">
              <Title
                type="h2"
                text="¿Existe un directorio de casas de cambio físicas?"
              />
              <p className="pt-6 text-[18px]">
                Si.{" "}
                <a
                  href="https://cuantoestaeldolar.pe/"
                  className="text-black-600 text-xl visited:text-black-800 font-black"
                >
                  cuantoestaeldolar.pe
                </a>{" "}
                cuenta con un directorio de casas de cambio en Lima, Cusco,
                Arequipa, Piura, Huancayo, Ayacucho, Huaral, Puno, Loreto,
                Tacna, Chiclayo y Trujillo. Puedes ver el directorio completo y
                buscar la casa de cambio que más te convenga.
              </p>
            </div>
            <div className="pl-10 pt-6  text-justify">
              <Title
                type="h2"
                text="¿Son seguras las casas de cambio online?"
              />
              <p className="pt-6 text-[18px]">
                SI. Las casas de cambio online suelen estar registradas en la
                Superintendencia de Banca, Seguros y AFP (SBS). Además, las
                transacciones y depósitos se realizan a través de entidades
                autorizadas por la SBS.
              </p>
              <p className="pt-6 text-[18px]">
                Otras de las características de las casas de cambio online es
                que puedes realizar la transacción desde la comodidad de tu casa
                u oficina, ahorrándote tiempo que sueles perder en las colas o
                en el tráfico.
              </p>
              <p className="pt-6 text-[18px]">
                Finalmente, y tal vez la característica más atractiva para los
                usuarios de las casas de cambio online es que su tipo de cambio
                es más competitivo, es decir, que obtienes un mejor tipo de
                cambio que en las agencias bancarias.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white p-8"></div>
      </div>
    </>
  );
}

export default Questions;
