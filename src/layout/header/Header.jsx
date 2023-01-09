import React from "react";
import "./header.css";


export default function Header() {
  return (
    <div className="navBar">
        <div className="navBarAnchor">
      <img src="https://imgar.zonapropcdn.com/empresas/1/00/30/04/29/65/130x70/logo_ceccarelli-propiedades_1533218261897.jpg" alt="Logo" />
        <a href="#">Inicio</a>
        <a href="#">Propiedades</a>
        <a href="#">Nosotros</a>
        </div>
        <div className="bRight">
          
        </div>
        <div className="aRight">    
        <a href="#">Tasacion</a>
        </div>
    </div>
  );
}
