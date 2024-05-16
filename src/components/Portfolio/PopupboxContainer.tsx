import React from 'react'

// REACT POPUPBOX
import { PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const PopupboxContainers: React.FC = () => {
    
  // config Rihappy popupbox  
  const popupboxConfigRihappy = {
    titleBar: {
      enable: true,
      text: "Ri Happy",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Vivenda popupbox  
  const popupboxConfigVivenda = {
    titleBar: {
      enable: true,
      text: "Vivenda do Camarão",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Phooto popupbox  
  const popupboxConfigPhooto = {
    titleBar: {
      enable: true,
      text: "Loja Phooto",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Katmandu popupbox  
  const popupboxConfigKatmandu = {
    titleBar: {
      enable: true,
      text: "Katmandu",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Sbed popupbox  
  const popupboxConfigSbed = {
    titleBar: {
      enable: true,
      text: "SBED",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config SaoCristovao popupbox  
  const popupboxConfigSaoCristovao = {
    titleBar: {
      enable: true,
      text: "São Cristovão",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Caido popupbox  
  const popupboxConfigCaiado = {
    titleBar: {
      enable: true,
      text: "Caiado Pneus",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // config Bardahl popupbox  
  const popupboxConfigBardahl = {
    titleBar: {
      enable: true,
      text: "Bardahl",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
    
    return (
        <>
            <PopupboxContainer {...popupboxConfigRihappy} />
            <PopupboxContainer {...popupboxConfigVivenda} />
            <PopupboxContainer {...popupboxConfigPhooto} />
            <PopupboxContainer {...popupboxConfigKatmandu} />
            <PopupboxContainer {...popupboxConfigSbed} />
            <PopupboxContainer {...popupboxConfigSaoCristovao} />
            <PopupboxContainer {...popupboxConfigCaiado} />
            <PopupboxContainer {...popupboxConfigBardahl} />
        </>
    )
}

export default PopupboxContainers