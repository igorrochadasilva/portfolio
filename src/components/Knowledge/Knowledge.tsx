import React from 'react'

interface IKnowledgeProps{
    icon: string,
    tecnology: string
}

const Knowledge: React.FC <IKnowledgeProps> = ({icon, tecnology}) => {
    
    return(
        <div className="cardBox">
            <div className="cardBox__icon">
                <figure>
                  <img src={icon} alt={tecnology} width="100px" height="100px" loading="lazy"/>
                </figure>
            </div>
            <div className="cardBox__title">
                <p>{tecnology}</p>
            </div>
        </div>
    )
}

export default Knowledge