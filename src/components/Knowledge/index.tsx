import React, { useContext } from "react";

import Knowledge from "./Knowledge"

//images
import iconReact from "../../images/logos/icon-react.svg";
import iconHtml from "../../images/logos/icon-html5.svg";
import iconJavascript from "../../images/logos/icon-javascript.svg";
import iconCss from "../../images/logos/icon-css3.svg";

import iconNode from "../../images/logos/icon-node.svg";
import iconJquery from "../../images/logos/icon-jquery.svg";
import iconGit from "../../images/logos/icon-git.svg";
import iconSass from "../../images/logos/icon-sass.svg";

import iconTypescript from "../../images/logos/icon-typescript.svg";
import iconWordpress from "../../images/logos/icon-wordpress.svg";
import iconVtex from "../../images/logos/icon-vtex.svg";
import iconWebpack from "../../images/logos/icon-webpack.svg";

import iconRedux from "../../images/logos/icon-redux.svg";
import iconStyledComponent from "../../images/logos/icon-styled-component.svg";
import iconNext from "../../images/logos/icon-next.svg";
import iconGraphql from "../../images/logos/icon-graphql.svg";
// import iconGatsby from "../../images/logos/icon-gatsby.svg";
 


import { AnimationOnScroll } from "react-animation-on-scroll";
import UserContext from "../context/AppContext";

const Knowledges: React.FC = () => {

  const context = useContext(UserContext)
  const MKnowledges = context.state.messages.Knowledges 

  return (
    <section id="knowledge" className="knowledge">
      <h1>
        {MKnowledges.title} <span className="dot">.</span>
      </h1>
      <div className="container">
        <div className="row justify-content-center cards">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <Knowledge
              icon={iconReact}
              tecnology="React"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <Knowledge
              icon={iconCss}
              tecnology="Css3"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <Knowledge
              icon={iconHtml}
              tecnology="Html5"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <Knowledge
              icon={iconJavascript}
              tecnology="Javascript"                          
            />            
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <Knowledge
              icon={iconNode}
              tecnology="Node"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <Knowledge
              icon={iconJquery}
              tecnology="Jquery"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <Knowledge
              icon={iconGit}
              tecnology="Git"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <Knowledge
              icon={iconSass}
              tecnology="Sass"                          
            />  
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <Knowledge
              icon={iconTypescript}
              tecnology="Typescript"                          
            />              
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <Knowledge
              icon={iconWordpress}
              tecnology="Wordpress"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <Knowledge
              icon={iconVtex}
              tecnology="Vtex"                          
            />            
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <Knowledge
              icon={iconWebpack}
              tecnology="Webpack"                          
            />           
          </AnimationOnScroll>
           <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}            
          >
            <Knowledge
              icon={iconRedux}
              tecnology="Redux"                          
            />           
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}           
               delay={100}
          >
            <Knowledge
              icon={iconStyledComponent}
              tecnology="Styled Components"                          
            />           
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}           
               delay={200}
          >
            <Knowledge
              icon={iconNext}
              tecnology="Next"                          
            />           
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}           
               delay={300}
          >
            <Knowledge
              icon={iconGraphql}
              tecnology="Graphql"                          
            />           
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Knowledges;
