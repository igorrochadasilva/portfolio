import React, { ReactElement } from "react";

import LazyLoad from 'react-lazyload';

interface IImages {
    imgSrc: string
    alt: string
    openPopupbox: () => void
    icon: ReactElement;
}

const BoxImage: React.FC <IImages> = ({imgSrc, alt, openPopupbox, icon}) => (

    <div className="portfolio-image-box" onClick={openPopupbox}>
        <figure>
            <LazyLoad height={120}>
                <img
                    className="portfolio-image"
                    src={imgSrc}
                    alt={alt}
                    width="200px"
                    height="120px"                
                />
            </LazyLoad>
            
            <div className="overflow"></div>
            {icon}
        </figure>
    </div>
)

export default BoxImage