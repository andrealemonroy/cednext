import { useState } from 'react'
import { useRouter } from 'next/router'
import s from './Filter.module.css'

export const Filter = ({departaments:departamentos}) => {
  const router = useRouter()
  const [provincia, setProvincia] = useState([]);
  const [distrito, setDistrito] = useState([]);

  /**
   * trae provincias
   */
  const handlerDepartamento = async({target})=>{
    const id = target.value
    fetch(`api/provincia?id=${id}`)
      .then( res => res.json())
      .then( ({data}) => {
        setProvincia(data)
      })
  }

  /**
   * trae distritos
   */
  const handlerProvincia = async({target})=>{
    const id = target.value
    const id2 = document.querySelector("#provinces").value
    fetch(`api/distrito?id=${id}&id2=${id2}`)
      .then( res => res.json())
      .then( ({data}) => {
        setDistrito(data)
        document.querySelector("#buscar").disabled=false;
      })
  }

  /**
   * buscar
   */
  const handlerBuscar = ()=>{
    const id = document.querySelector("#departaments").value
    const id2 = document.querySelector("#provinces").value
    const id3 = document.querySelector("#districts").value
    const { departamento:dep } = departamentos.find(item=>item.id === id);
    const { provincia:pro }    = provincia.find(item=>item.id === id2);
    const { distrito:dis }     = distrito.find(item=>item.id === id3);
    const path = `${dep.replaceAll(' ','-')}/${pro.replaceAll(' ','-')}/${dis.replaceAll(' ','-')}`.toLowerCase();
    router.push(path)
  }

  return (
    <>
    <div className="container lg:flex gap-4 px-2 sm:grid col-span-4">
      <select id="departaments" className={`${s.select}`} onChange={handlerDepartamento}>
        <option value={-1}>Seleccione departamento</option>
        { departamentos.map(({id, departamento}, i) => <option key={i} value={id}>{departamento}</option> ) }
      </select>
      <select id="provinces" className={`${s.select}`}  onChange={handlerProvincia}>
        <option value={-1}>Seleccione provincia</option>
        { provincia.map(({id, provincia}, i) => <option key={i} value={id}>{provincia}</option> ) }
      </select>
      <select id="districts" className={`${s.select}`} >
        <option value={-1}>Seleccione distrito</option>
        { distrito.map(({id, distrito}, i) => <option key={i} value={id}>{distrito}</option> ) }
      </select>
    </div>
    <button id="buscar" className={`${s.button}`} onClick={handlerBuscar}>
      Buscar
    </button>
    </>
  )
}

export default Filter
