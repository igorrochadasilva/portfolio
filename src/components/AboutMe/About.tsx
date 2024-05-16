import React, {useContext} from 'react';
import UserContext from '../context/AppContext';

const About: React.FC = () => {

  const context = useContext(UserContext);
  const MAbout = context.state.messages.AboutMe
  
    return(
        <div className='col-lg-6 col-xm-12'>
            <h1 className='about-heading'>
               {MAbout.title} <span className='dot'>.</span>
            </h1>
            <p>
                {MAbout.text}
            </p>
        </div>
    )
}

export default About

