import React from "react";
interface IExperience{
  year: string
  text: string[]  
}

const Experience: React.FC <IExperience> = ({year, text}) => {
  
  const renderExperience = () => {
    return text.map((item, i) => {        
        return <p key={i}>{item}</p>      
    })
  }

  return(
    <>
      <h2>{year}</h2>
      {renderExperience()}
    </>
  )

}

export default Experience;
