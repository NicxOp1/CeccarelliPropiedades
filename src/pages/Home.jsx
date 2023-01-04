import React from 'react'
import 'boxicons'

export default function Home() {
  return (<div className='homeContainer'>
    <div className='wordsHome'>
    <h1 className='titleHome'>Tu proximo hogar en nuestras manos.</h1>
    <h3 className='subTitleHome'>Con <span>Ceccarelli Propiedades</span> podes encontrar todo eso que vos buscas!</h3>
    <button>Explora propiedades</button>
    </div>
    <img className='photo1Home' src="https://cdn.discordapp.com/attachments/1035256110887747676/1059974275605467287/IMG-20221230-WA0005.jpg" alt="photoHome" />
    <img className='photo2Home' src='https://imgar.zonapropcdn.com/avisos/1/00/50/53/76/30/720x532/1836089889.jpg' alt='photoHome'/>
    <footer>
      <div className='footerHome'>
        <h5>Busca tu propiedad</h5>
        <form>
          <input type="search" placeholder='Locacion' name="Locacion" id="Locacion" /><div className="iconLocation"><box-icon  size="md" type='solid' name='map'/></div>
          <select className='selectType' name="Tipo de Vivienda" id="TipoDeVivienda">
            <option value="Tipo De Propiedad">Tipo de Propiedad</option>
            <option value="Chalet">Chalet</option>
            <option value="Departamento">Departamento</option>
          </select>
          <input className='Budget' type="text" name="Presupuesto" id="Presupuesto" placeholder='Presupuesto' /><div className="iconLocation"><box-icon size='md' name='money-withdraw'></box-icon></div>
          <button type="submit">Buscar</button><div className="iconLocation"><box-icon color='white' size="md" name='search'></box-icon></div>
        </form>
      </div>
</footer>
  </div>)
}
