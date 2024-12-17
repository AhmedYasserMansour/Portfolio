import React, { useContext, useEffect, useRef } from 'react';
import './Home.css';
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';
import Insta from '../../assets/instagram.png';
import Ahmed from '../../assets/Ahmed.png';
import Cv from './Ahmed-Yasser-CV.pdf';
import { themeContext } from '../../Context';

const Home = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const refAhmed = useRef();
    const me = useRef();
    useEffect(() => {
        refAhmed.current.style.transform = 'translateY(0)';
        me.current.style.transform = 'translateX(0)';
        
    }, []);
    return ( 
        <div className="home" id='home' style={{backgroundColor : darkMode ? 'black': 'white'}}>
            <div className="container">
                <div className="row">
               <div className="big-box">
                <div className="box">
                <div className="h-left" ref={me}>
                <div className="h-name">
                    <span style={{color : darkMode ? '#747272': 'black'}}>Hello, It's Me</span>
                    <span>Ahmed Yasser</span>
                    <p  style={{color : darkMode ? '#747272': 'black'}}>Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work.</p>
                </div>
                <a className='download' href={Cv} download>
                 <button className="button cv">Download CV</button>
                </a>
                <div className="h-icons">
                    <a target='blank' href='https://github.com/AhmedYasserMansour'>
                    <img src={Github} alt="Github" />
                    </a>
                   <a target='blank' href='https://www.linkedin.com/in/ahmed-yasser-mansour'>
                    <img src={LinkedIn} alt="LinkedIn" />
                   </a>
                   <a target='blank' href='https://www.instagram.com/ahmed.yasser.mansour'>
                    <img src={Insta} alt="Insta" />
                   </a>
                </div>
            </div>
                </div>
               </div>
           <div className="big-box">
            <div className="box">
            <div className="h-right">
                <div ref={refAhmed} className="ahmed">
                    <img src={Ahmed} alt="Ahmed-pic" />
                </div>
            </div>
            </div>
           </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;