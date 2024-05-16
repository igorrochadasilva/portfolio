/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Picture from './Picture';
import About from './About';

const AboutMe: React.FC = () =>  (    
    <section id='about' className='container py-5'>
        <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
            <div className='row'>
              <Picture />
              <About />
            </div>
        </AnimationOnScroll>
    </section>    
);


export default AboutMe;
