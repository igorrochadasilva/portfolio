import React, { useState, useEffect, useContext } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { UserContext } from '../context/AppContext'

import Experience from './Experience'

const Experiences: React.FC = () => {
  const context = useContext(UserContext)
  const MExperiences = context.state.messages.Experiences

  const [isMobile, setIsMobile] = useState(false)

  const windowWidth = () => {
    const screenWidth = window.innerWidth

    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(() => {
    windowWidth()
  }, [])

  // Extract all experiences dynamically
  const experienceKeys = Object.keys(MExperiences).filter((key) => key.startsWith('experiece'))

  return (
    <section id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>
          {MExperiences.title} <span className="dot">.</span>
        </h1>
      </div>
      <div className="container experience-wrapper">
        {experienceKeys.map((key, index) => {
          const isRight = index % 2 === 0
          const animation = isRight ? 'animate__fadeInRight' : isMobile ? 'animate__fadeInRight' : 'animate__fadeInLeft'
          
          return (
            <div key={key} className={`timeline-block ${isRight ? 'timeline-block-right' : 'timeline-block-left'}`}>
              <div className="marker"></div>
              <div className="timeline-content">
                <AnimationOnScroll animateIn={animation} animateOnce={true}>
                  <Experience year={MExperiences[key].year} text={MExperiences[key].text} />
                </AnimationOnScroll>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experiences
