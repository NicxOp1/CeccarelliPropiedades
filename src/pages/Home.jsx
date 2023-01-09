import React from "react";
import { useState, useRef, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import "boxicons";
import propertyActions from '../redux/actions/propertyActions'
import { BASE_URL } from "../api/url";
import axios from "axios";

export default function Home() {
  let locationRef = useRef(null)
  let priceRef = useRef(null)
  let typeRef = useRef(null)
  let [allProperties,allPropertiesSet]=useState([])
  const dispatch= useDispatch()
  const {getProperty}=propertyActions
  
  
  useEffect(()=>{
    axios.get(`${ BASE_URL }/Properties/`)
        .then(res => allPropertiesSet(res.data.properties))
        .catch(err => console.log(err.message))
  },[])
  allProperties= allProperties.map((e)=>e.typeProperty).sort()

  allProperties = Array.from(new Set(allProperties))

  let valores ={}
  const selectEvent  = (e) => {
    e.preventDefault()
    valores = {
      location: "location="+locationRef.current.value, 
      typeProperty: "&typeProperty="+typeRef.current.value,
      price: priceRef.current.value
    }
    dispatch(getProperty(valores))
    /* console.log("se enviaron los datos") */
  };

  return (
    <div className="homeContainer">
      <div className="wordsHome">
        <h1 className="titleHome">Tu proximo hogar en nuestras manos.</h1>
        <h3 className="subTitleHome">
          Con <span>Ceccarelli Propiedades</span> podes encontrar todo eso que
          vos buscas!
        </h3>
        <button>Explora propiedades</button>
      </div>
      <img
        className="photo1Home"
        src="https://cdn.discordapp.com/attachments/1035256110887747676/1059974275605467287/IMG-20221230-WA0005.jpg"
        alt="photoHome"
      />
      <img
        className="photo2Home"
        src="https://imgar.zonapropcdn.com/avisos/1/00/50/53/76/30/720x532/1836089889.jpg"
        alt="photoHome"
      />
      <footer>
        <div className="footerHome">
          <h5>Busca tu propiedad</h5>
          <form className="preFormHome">
            <input
              type="search"
              placeholder="Locacion"
              name="Locacion"
              id="Locacion"
              ref={locationRef}
              
            />
            <div className="iconLocation">
              <box-icon size="sm" type="solid" name="map" />
            </div>
            <select
              className="selectType"
              name="Tipo de Vivienda"
              id="TipoDeVivienda"
              ref={typeRef}
               
            >
              <option value="">Tipo de Propiedad</option>
              {
              allProperties.length>0?
                allProperties.map((e,i)=><option key={i} value={e}>{e}</option>):
                <option value="">No se encuentra un tipo de propiedad</option>
            }
            </select>
            <input
              className="Budget"
              type="text"
              name="Presupuesto"
              id="Presupuesto"
              placeholder="Presupuesto"
              ref={priceRef} 
            />
            <div className="iconLocation">
              <box-icon size="sm" name="money-withdraw"></box-icon>
            </div>
            <button type="submit" onClick={selectEvent}>Buscar</button>
            <div className="iconLocation">
              <box-icon color="black" size="sm" name="search"></box-icon>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}
