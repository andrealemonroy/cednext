import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const brandDesign = () => {
  return (
    <>
        <Navbar className="mb-20"/>
        <div className="w-[970px] h-[540px] gradient pt-10">
            <a href=""></a>
          <h1 className="titleBrand font-serif pt-16">
                Diseño de marcas para fintech
          </h1>
          <div className='py-[112px] pl-[95px]'>
            <img width={460} height={290.53} src='img/logofintech.png'/>
           </div>
           <div className='titleDesign'>
               Somos como tú, emprendedores con experiencia en diseño gráfico para productos digitales exitosos.
           </div>
        </div>
        <div className="container mx-auto pt-14 px-4 grid grid-cols-3 gap-4" >
            <div className='col-span-2'>
                <div className='text-[34px] sm:text-[38px] text-center pt-3'>
                    Todos somos la experiencia
                </div>
                <div className='text-[14px] sm:text-[16px] text-justify pt-3'>
                    Una marca es multiplataforma y multicanal, no solo el logo.
                    Los canales de contacto requieren de estrategias a largo plazo que perduren positivamente en la memoria de sus audiencias y clientes, quieres a su vez crecerán de la mano de sus marcas favoritas
                </div>
            </div>
            <div className='pt-3 pl-2 justify-center'>
                <img width={200} height={200} src='img/foto.png'/>
           </div>
        </div>
        <div className="text-[14px] sm:text-[16px] text-justify pt-3 pr-14">
        <p className='p-4'>Tendemos a pensar que hacer el logo resolvera problemas de base del producto y esto es nada más que un hábito de improvisación, es casi como llevar al batallón a la guerra pero sin estrategia. Una estrategia en comunicación visual, se puede empezar desarrollando un cuestionario que te ayudará a aclarar que es lo más importante a nivel empresa que deseas comunicar y proyectar a tus clientes y colaboradores. La estrategia es importante, porque muchas veces solo por ser ordenado, uno puede evitar el caos. Y en este caso, nos referimos a un caos netamente visual.
        </p>
        <p className='p-4'>¿Pero que tendrá  que ver el orden con el tema del diseño y la experiencia de la marca?
        Y la respuesta es ¨mucho¨ porque para lograr una experiencia de marca, los complementos gráficos (no sólo el logo) hablamos de un espectro amplio de componentes y elementos gráficos que serán manipulados, escalados, combinados, por todas las personas que gestionaran nuestra marca para darle la vida en nuestros canales de atención a diario. Estos componentes como códigos de color, tipografías, variaciones de logo, fotografías, videos y recursos para el diseño de interfaces, son ordenados y estandarizados en herramientas colaborativas alojadas en la nube para que su equipo de comunicaciones pueda acceder a los recursos a demanda.
        </p>
        <p className='p-4 pb-10'>Hoy en día las personas no solo compran productos y servicios tangibles e intagibles, compramos productos, servicios  y sus procesos para ser producidos, somos una empresa comprometida con la responsabilidad social, la inclusividad, la accesibilidad, lo cual trataremos que se vea reflejado en los proyectos que ayudemos a mejorar.
        </p>
        </div>
        <Footer/>
    </>
  )
}

export default brandDesign