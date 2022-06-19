import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './AdsSlot.module.css'

export default function AdsSlot ({slodId, className='simple', variant}) {

  const classNames = cn(
    {
        [s.skin]: variant === 'skin',
    },
    className
  ) 
  
  return ( 
  <div id={slodId} className={`${classNames} ${ classNames=='simple' ? s.simple : '' }`}/> 
  )
}