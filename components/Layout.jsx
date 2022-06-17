import Head from 'next/head';
import { AdsSlot } from './ads/AdsSlot';
import { useEffect } from 'react';
import { defineSlot } from '../framework/lib';

export const Layout = ({ children, pageProps: { ads = null }, }) => {
  
  const { div_id:skin } = ads.find(item=>item.name === 'skin');
  const { div_id:top0 } = ads.find(item=>item.name === 'top0');

  // useEffect(() => {
  //   defineSlot();
  // }, [ads])
  
  return (
    <>
      {/* <AdsSlot slodId={skin} /> */}
      {/* <AdsSlot slodId={top0} /> */}
      <main>
        <Head>
          <title>Tipo de Cambio | Dólares a Soles | Precio del dólar en el Perú | compra y venta de dólares en Perú | Cuánto esta el dolar en el Perú</title>
          <meta name="description" content="Tipo de cambio, precio del dólar en soles para hoy - cotización del dolar en el Perú  - SUNAT - SBS y paralelo - Cambios Online - Cambiar dólares a soles"/>
          <meta name="keywords" content="keywords,keywords,keywords"/>
          <link rel="icon" href="/icons/logo.svg" />

          <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js' />
          <script async='async' src='https://embi-media.com/hb_resources/cuanto_esta_el_dolar/3ad87725.js' />
          <script>
            {`var googletag = googletag || {};
              googletag.cmd = googletag.cmd || [];`}
          </script>
        </Head>

        <div className="w-screen sm:max-w-5xl mx-auto">
          { children }
          <footer>
            footer
          </footer>
        </div>

      </main>
    </>
  )
}
