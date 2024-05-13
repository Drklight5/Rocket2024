import React from 'react'
import logo from '../Assets/logo-rocket.png'

export default function Menu() {
  return (
    <div className='Menu'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <a className="link" href="">Desafíos</a>
        <a className="link" href="">Beneficios</a>
        <a className="link" href="">Evento</a>
        <a className="link terminos" href="">Terminos y condiciones</a>
    </div>
  )
}
