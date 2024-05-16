import React, { ReactElement } from 'react'
interface IService{
    icon: ReactElement
    title: string
    text: string
}

const Service: React.FC <IService> = ({icon, title, text}) => {
    
    return(
        <div className='box'>
            <div className='circle'>
                {icon}
            </div>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Service