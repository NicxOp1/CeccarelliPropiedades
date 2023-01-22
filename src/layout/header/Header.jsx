import React from "react";
import "./header.css";
import { Link as LinkRouter } from "react-router-dom";


export default function Header() {
  return (
    <div className="navBar">
      <div className="navBarAnchor">      
      <img src="https://imgar.zonapropcdn.com/empresas/1/00/30/04/29/65/130x70/logo_ceccarelli-propiedades_1533218261897.jpg" alt="Logo" />
      <LinkRouter to="/" className="btn-header">
        inicio
      </LinkRouter>
      <LinkRouter to="/Propiedades" className="btn-header">
        Propiedades
      </LinkRouter>
      <LinkRouter to="/Nosotros" className="btn-header">
        Nosotros
      </LinkRouter>
        </div>
        <div className="bRight">
          
        </div>
        <div className="aRight">    
        <a href="#">Tasacion</a>
        </div>
    </div>
  );
}
