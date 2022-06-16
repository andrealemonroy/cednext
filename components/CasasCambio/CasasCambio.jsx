import React from 'react'
import s from './CasasCambio.module.css'

export const CasasCambio = ({onlineExchangeHouses}) => {
  return (
    <>
      <p className="text-gray-800 font-bold text-2xl pb-4 mt-2">Cambio online</p>
      <div className={`${s.casasContainer}`}>
        <div className={`${s.izquierda}`}>
          {
            onlineExchangeHouses.map(({img, color, rates}, index)=>
              index%2 == 0 && 
              <div key={index} className={`${s.CasaOnline}`}>
                <div className={`${s.casaImg}`}>
                  <img src={img} alt="" />
                </div>
                <span className="arrow">
                  <svg className="ico-collapsed" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.5" cy="11.5" r="11" stroke="#8E8E8E"></circle>
                    <path d="M5.33366 9.28789C4.88878 9.67175 4.88878 10.2941 5.33366 10.678L11.5 16L17.6663 10.678C18.1112 10.2941 18.1112 9.67175 17.6663 9.28789C17.2215 8.90403 16.5002 8.90403 16.0553 9.28789L11.5 13.2198L6.9447 9.28789C6.49982 8.90403 5.77853 8.90403 5.33366 9.28789Z" fill="#8E8E8E"></path>
                  </svg>
                </span>
                <div className={`${s.CasaBtn}`} style={{ background: color }}>
                  Cambiar
                </div>
                <div className="compra">{rates[0].buy.cost}</div>
                <div className="venta">{rates[1].sale.cost}</div>
              </div>
            )
          }
        </div>
        <div className={`${s.derecha}`}>
          {
            onlineExchangeHouses.map(({img, color, rates}, index)=>
              index%2 != 0 && 
              <div key={index} className={`${s.CasaOnline}`}>
                <div className={`${s.casaImg}`}>
                  <img src={img} alt="" />
                </div>
                <span className="arrow">
                  <svg className="ico-collapsed" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.5" cy="11.5" r="11" stroke="#8E8E8E"></circle>
                    <path d="M5.33366 9.28789C4.88878 9.67175 4.88878 10.2941 5.33366 10.678L11.5 16L17.6663 10.678C18.1112 10.2941 18.1112 9.67175 17.6663 9.28789C17.2215 8.90403 16.5002 8.90403 16.0553 9.28789L11.5 13.2198L6.9447 9.28789C6.49982 8.90403 5.77853 8.90403 5.33366 9.28789Z" fill="#8E8E8E"></path>
                  </svg>
                </span>
                <div className={`${s.CasaBtn}`} style={{ background: color }}>
                  Cambiar
                </div>
                <div className="compra">{rates[0].buy.cost}</div>
                <div className="venta">{rates[1].sale.cost}</div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default CasasCambio;
