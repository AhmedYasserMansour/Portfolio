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
                <p  style={{color: darkMode ? '#b2acac' : 'black'}}>Enthusiastic Fresh Front-End Developer with a passion for creating unique user experiences.
                 Quick learner capable of adapting to new technologies and working effectively within multidisciplinary teams.
                 Seeking to join a creative team to enhance my skills and contribute to innovative web applications.</p>
            </div>
            </div>
          </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;