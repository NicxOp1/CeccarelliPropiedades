import React from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "boxicons";
import propertyActions from "../redux/actions/propertyActions";
import { BASE_URL } from "../api/url";
import axios from "axios";
import FotoProperty from "../components/FotoProperty";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";

export default function Properties() {
  let bedroomArray = [1, 2, 3, 4, 5];
  let locationRef = useRef(null);
  let priceRef = useRef(null);
  let typeRef = useRef(null);
  let roomRef = useRef(null);
  let [allProperties, allPropertiesSet] = useState([]);
  const dispatch = useDispatch();
  const { getProperty } = propertyActions;
  let property = useSelector((state) => state.propertyReducer.property);
  
  
  useEffect(() => {
    axios
    .get(`${BASE_URL}/Properties/`)
      .then((res) => allPropertiesSet(res.data.properties))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(property)
  let properties = allProperties;
  allProperties = allProperties.map((e) => e.typeProperty).sort();
  allProperties = Array.from(new Set(allProperties));

  let valores = {};
  
  const selectEvent = (e) => {
    e.preventDefault();
    valores = {
      location: "location=" + locationRef.current.value,
      typeProperty: "&typeProperty=" + typeRef.current.value,
      rooms: "&rooms=" + roomRef.current.value,
      price: priceRef.current.value,
    };
    dispatch(getProperty(valores));
  };

  const deleteEvent = (e) => {
   e.preventDefault();
   dispatch(getProperty(valores));
   locationRef.current.value=""
   typeRef.current.value=""
   roomRef.current.value=""
   priceRef.current.value=""
   console.log("click")
  };
  let breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    2000: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };

  return (
    <div className="containerProperties">
      <form className="filterProperties">
        <input
          type="search"
          placeholder="Locacion"
          name="Locacion"
          id="Locacion"
          ref={locationRef}
        />
        <select
          className="bedroomFilter"
          name="Ambientes"
          id="Ambientes"
          ref={roomRef}
        >
          <option value="">Ambientes</option>
          {bedroomArray.map((e, i) => (
            <option key={i} value={e}>
              {e} Ambientes
            </option>
          ))}
        </select>
        <select
          className="selectType"
          name="Tipo de Vivienda"
          id="TipoDeVivienda"
          ref={typeRef}
        >
          <option value="">Tipo de Propiedad</option>
          {allProperties.length > 0 ? (
            allProperties.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))
          ) : (
            <option value="">No se encuentra un tipo de propiedad</option>
          )}
        </select>
        <input
          className="Budget"
          type="text"
          name="Presupuesto"
          id="Presupuesto"
          placeholder="Presupuesto"
          ref={priceRef}
        />

        <button type="submit" onClick={selectEvent}>
          Buscar
        </button>
        {property.length!=properties.length? (
          <button
            className="btnDeleteFilter"
            type="submit"
            onClick={deleteEvent}
          >
            Borrar Filtros
          </button>
        ) : (
          <></>
        )}
      </form>

      <div className="cardContainerProperties">
        {property.length>0
          ? property.map((e) => (
              <div className="cardProperties">
                <button className="btnSeeMoreDetails" type="submit" onClick={selectEvent}>
          Detalles
        </button>
                <div className="swiperCard">
                  <Swiper
                    /* style={{padding:"0rem .5rem"}} */
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {e.photoProperties.map((a) => (
                      <SwiperSlide
                        id="sSlide"
                        style={{
                          height: "auto",
                          width: "auto",
                          minHeight: "auto",
                        }}
                      >
                        <FotoProperty photo={a} name={e.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="cardMinDetails">
                  <p className="titleCardDetail">{e.title}</p>
                  <div className="microDetails">
                    <p>
                      <box-icon name="grid"></box-icon> {e.rooms} ambientes
                    </p>
                    <p>
                      <box-icon type="solid" name="bed"></box-icon> {e.bedrooms}{" "}
                      dormitorio/os
                    </p>
                    <p>
                      <box-icon name="watch" type="solid"></box-icon>
                      {e.antiquity} Años
                    </p>
                    <p>
                      <box-icon name="expand"></box-icon>
                      {e.mt2Total} metros cuadrados totales
                    </p>
                    <p>
                      <box-icon type="solid" name="map"></box-icon>
                      {e.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : properties.map((e) => (
              <div className="cardProperties">
                <div className="swiperCard">
                  <Swiper
                    /* style={{padding:"0rem .5rem"}} */
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    onSlideChange={() => console.log("slide change")}
                    /* onSwiper={(swiper) => console.log(swiper)} */
                  >
                    {e.photoProperties.map((a) => (
                      <SwiperSlide
                        id="sSlide"
                        style={{
                          height: "auto",
                          width: "auto",
                          minHeight: "auto",
                        }}
                      >
                        <FotoProperty photo={a} name={e.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="cardMinDetails">
                  <p className="titleCardDetail">{e.title}</p>
                  <div className="microDetails">
                    <p>
                      <box-icon name="grid"></box-icon> {e.rooms} ambientes
                    </p>
                    <p>
                      <box-icon type="solid" name="bed"></box-icon> {e.bedrooms}{" "}
                      dormitorio/os
                    </p>
                    <p>
                      <box-icon name="watch" type="solid"></box-icon>
                      {e.antiquity} Años
                    </p>
                    <p>
                      <box-icon name="expand"></box-icon>
                      {e.mt2Total} metros cuadrados totales
                    </p>
                    <p>
                      <box-icon type="solid" name="map"></box-icon>
                      {e.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        {/* swiper de fotos de la casa */}
        {/* titulo de la propiedad */}
        {/* cantidad de ambientes */}
        {/* metros 2 totales */}
        {/* boton ver mas detalles  */}
      </div>
    </div>
  );
}
