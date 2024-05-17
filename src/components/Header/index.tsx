import React, { useContext, useState } from 'react'
import logo from '../../assets/logos/logo.png'

import { iconMenu } from '../icons/Icons'

import ToggleButton from './ToggleButton'
import { UserContext } from '../context/AppContext'

const Header: React.FC = () => {
  const context = useContext(UserContext)
  const MNavbar = context.state.messages.Navbar

  const [menu, SetMenu] = useState(false)

  const openMenu = () => SetMenu(!menu)

  return (
    <header>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <figure>
              <img className="logo" src={logo} alt="logo..." loading="lazy" width="84px" height="59px" />
            </figure>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={openMenu}
          >
            {iconMenu}
          </button>

          <div className={`collapse navbar-collapse  ${menu && `show`}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {MNavbar.text1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#knowledge">
                  {MNavbar.text2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  {MNavbar.text3}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  {MNavbar.text4}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  {MNavbar.text5}
                </a>
              </li>
              <li>
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
