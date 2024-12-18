import React, { useContext, useEffect, useRef } from 'react';
import './About.css';
import Website from '../../assets/website.png'
import { themeContext } from '../../Context';

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const aboutRight = useRef();
    useEffect(()=>{
       const handleScroll = ()=>{
        if(window.scrollY >= (aboutRight.current.offsetTop - 500)){
            aboutRight.current.style.transform =  'scale(1)'
        }
        else {
            aboutRight.current.style.transform =  'scale(0)'
        }
       }
        window.addEventListener('scroll', handleScroll)
    },[]);
    return ( 
        <div className="about" id='about' style={{backgroundColor: darkMode ? '#242D49' : '#eee'}}>
            <div className="container">
                <div className="row">
             <div className="big-box">
                <div className="box">
                <div className="a-left">
                <img src={Website} alt="Website" />
            </div>
                </div>
             </div>
          <div className="big-box">
            <div className="box">
            <div className="a-right" ref={aboutRight}>
                <h2>
                    About
                    <span> Me</span>
                </h2>
                <h2>Front-End 
                    <span> Developer</span>
                </h2>
                <p  style={{color: darkMode ? '#b2acac' : 'black'}}>Enthusiastic and driven Front-End Developer with a passion for crafting exceptional user experiences.
                     With a keen eye for design and a strong understanding of front-end technologies, I am always eager to learn and adapt to emerging trends.
                      I thrive in collaborative, multidisciplinary environments and am committed to continuously improving my skills.
                     I am excited to contribute to innovative web applications and work with a creative team to bring unique ideas to life.</p>
            </div>
            </div>
          </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;