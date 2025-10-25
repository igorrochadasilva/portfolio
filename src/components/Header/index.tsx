import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'

import { iconMenu } from '../icons/Icons'

import ToggleButton from './ToggleButton'
import { UserContext } from '../context/AppContext'

const Header: React.FC = () => {
  const context = useContext(UserContext)
  const MNavbar = context.state.messages.Navbar

  const [menu, SetMenu] = useState(false)

  const openMenu = () => SetMenu(!menu)

  return (
    <header role="banner">
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light" role="navigation" aria-label="Navegação principal">
        <div className="container">
          <a className="navbar-brand" href="/" aria-label="Igor Rocha - Página inicial">
            <figure>
              <img className="logo" src={logo} alt="Logo Igor Rocha - Desenvolvedor FullStack" loading="lazy" width="84px" height="59px" />
            </figure>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={menu}
            aria-label="Alternar menu de navegação"
            onClick={openMenu}
          >
            {iconMenu}
          </button>

          <div className={`collapse navbar-collapse  ${menu && `show`}`} id="navbarSupportedContent">
            <ul className="navbar-nav" role="menubar">
              <li className="nav-item" role="none">
                <a className="nav-link" href="#about" role="menuitem">
                  {MNavbar.text1}
                </a>
              </li>
              <li className="nav-item" role="none">
                <a className="nav-link" href="#knowledge" role="menuitem">
                  {MNavbar.text2}
                </a>
              </li>
              <li className="nav-item" role="none">
                <a className="nav-link" href="#services" role="menuitem">
                  {MNavbar.text3}
                </a>
              </li>
              <li className="nav-item" role="none">
                <a className="nav-link" href="#portfolio" role="menuitem">
                  {MNavbar.text4}
                </a>
              </li>

              <li className="nav-item" role="none">
                <a className="nav-link" href="#contacts" role="menuitem">
                  {MNavbar.text5}
                </a>
              </li>
              <li role="none">
                <div className="main-wrg-toggle">
                  <ToggleButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
