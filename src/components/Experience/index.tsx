import React, { useState, useEffect, useContext } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import UserContext from "../context/AppContext";


import Experience from "./Experience";

const Experiences: React.FC = () => {

  const context = useContext(UserContext)
  const MExperiences = context.state.messages.Experiences 
  
  const [isMobile, setIsMobile] = useState(false);

  const windowWidth = () => {
    let screenWidth = window.innerWidth;

    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    windowWidth();
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>
          {MExperiences.title} <span className="dot">.</span>
        </h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
                <Experience
                    year={MExperiences.experiece1.year}
                    text={MExperiences.experiece1.text}                   
                />
            </AnimationOnScroll>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn={
                isMobile ? `animate__fadeInRight` : `animate__fadeInLeft`
              }
              animateOnce={true}
            >
                <Experience
                    year={MExperiences.experiece2.year}
                    text={MExperiences.experiece2.text}                     
                />
            </AnimationOnScroll>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
                <Experience
                    year={MExperiences.experiece3.year}
                    text={MExperiences.experiece3.text}                    
                />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences  ;
