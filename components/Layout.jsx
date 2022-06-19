import Head from 'next/head';
import { useEffect } from 'react';
import AdsSlot from './ads/AdsSlot';
import { useRouter } from "next/router";
import { appendembi, appendgtm, refreshSlots, removeembi, removegtm } from '../framework/lib/scripts';

export const Layout = ({ children, pageProps: { ads = null }, }) => {
  const router = useRouter();

  const { div_id:skin } = ads.find(item=>item.name === 'skin');
  const { div_id:top0 } = ads.find(item=>item.name === 'top0');
  
  useEffect(()=>{
    appendgtm();
    appendembi();
    router.events.on('routeChangeComplete', ()=>{
      removegtm();
      const rem = removeembi();
      appendgtm();
      appendembi();
      if(rem) refreshSlots();
    })
    return () => {
      router.events.off('routeChangeComplete', ()=>{ })
    }
  },[router.events])
  
  return (
    <>
      <AdsSlot slodId={top0} />
      <AdsSlot slodId={skin} className={''} variant={'skin'}/>
      <main style={{maxWidth:"960px", margin:"0 auto", background: "#fff", position: "relative"}}>
        <Head>
          <title>Tipo de Cambio | Dólares a Soles | Precio del dólar en el Perú | compra y venta de dólares en Perú | Cuánto esta el dolar en el Perú</title>
          <meta name="description" content="Tipo de cambio, precio del dólar en soles para hoy - cotización del dolar en el Perú  - SUNAT - SBS y paralelo - Cambios Online - Cambiar dólares a soles"/>
          <meta name="keywords" content="keywords,keywords,keywords"/>
          <link rel="icon" href="/icons/logo.svg" />
        </Head>

        <div style={{ width:"100%" }}>
          { children }
          <footer>
            footer
          </footer>
        </div>

      </main>
    </>
  )
}
