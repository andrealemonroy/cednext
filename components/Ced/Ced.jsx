import Image from 'next/image';
import React from 'react'
import s from './Ced.module.css'

const Ced = () => {
  return (
    <div className={`${s.card}`}>
      <Image height="89" width="167" src="/img/logo.svg" alt="cuánto está el dólar"/>
      <h1>cuantoestaeldolar.pe</h1>
      <p>Somos una plataforma que tiene como propósito democratizar el precio del dólar en el Perú, su información es actualizada a diario.</p>
    </div>
  )
}

export default Ced;