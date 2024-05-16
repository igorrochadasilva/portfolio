/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import UserContext from '../context/AppContext';

import Service from './Service';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { iconCart, iconCode, iconDesktop, iconMail } from '../icons/Icons';


const Services: React.FC = () => {
  
  const context = useContext(UserContext)
  const MServices = context.state.messages.Services

  return (
    <section id='services' className='services'>
      <h1 className='py-5'>
        {MServices.title} <span className='dot'>.</span>
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
            >
              <Service               
                icon={iconDesktop}
                title={MServices.box1.title}
                text={MServices.box1.text}
              />              
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={100}
            >
              <Service               
                icon={iconCart}
                title={MServices.box2.title}
                text={MServices.box2.text}
              />   
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={200}
            >
              <Service               
                icon={iconCode}
                title={MServices.box3.title}
                text={MServices.box3.text}
              />              
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={300}
            >
              <Service               
                icon={iconMail}
                title={MServices.box4.title}
                text={MServices.box4.text}
              />                 
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
