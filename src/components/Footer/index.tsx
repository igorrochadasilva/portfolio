import React, { useContext } from "react";

import UserContext from "../context/AppContext";
import { iconLinkedin } from "../icons/Icons";

const Footer: React.FC = () => {
  const context = useContext(UserContext);
  const MContacts = context.state.messages.Footer;
  const MNavbar = context.state.messages.Navbar;

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="d-flex">
              <p>{MContacts.city} São Paulo </p>
            </div>
            <div className="d-flex">
              <a href="tel:(11) 94967-3001">(11) 94967-3001</a>
            </div>
            <div className="d-flex">
              <p>igor082011@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#about">{MNavbar.text1}</a>
                <br />
                <a href="#knowledge">{MNavbar.text2}</a>
                <br />
                <a href="#services">{MNavbar.text3}</a>
              </div>
              <div className="col">
                <a href="#portfolio">{MNavbar.text4}</a>
                <br />
                <a href="#contacts">{MNavbar.text5}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 align-items-center">
            <div className="d-flex justify-content-left">
              <aside className="icon-linkedin">
                <a
                  href="https://www.linkedin.com/in/igor-rocha-silva/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconLinkedin} 
                  <span>Linkedin</span>
                </a>
                <p className="text-center">
                  &copy; {new Date().getFullYear()}&nbsp; Igor Rocha.
                </p>
              </aside>              
            </div>            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
