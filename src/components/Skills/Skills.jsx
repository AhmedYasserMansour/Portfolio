import React, { useContext, useEffect, useRef } from 'react';
import './Skills.css';
import Html from '../../assets/Html.png';
import Css from '../../assets/Css.png';
import Js from '../../assets/JS.png';
import Ts from '../../assets/TS.png';
import Git from '../../assets/Git.png';
import Github from '../../assets/Github-black.png';
import Command from '../../assets/command.png';
import Bootstrap from '../../assets/bootstrap.png';
import ReactLibrary from '../../assets/React.png';
import Data from '../../assets/Data.png';
import { themeContext } from './../../Context';

const Skills = _ => {
    const refImgs = useRef([]);
    const refSkills = useRef();
    const refData = useRef();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
      const handleScroll = _ => {
        if(window.scrollY >= (refSkills.current.offsetTop - 500)){
            refImgs.current.forEach(img => {
                img.style.transform = 'translateX(0px)';
            });
            refData.current.style.transform = 'translateY(0em)';
        } else {
            refImgs.current.forEach(img => {
                img.style.transform = 'translateX(-600px)';
            });
            refData.current.style.transform = 'translateY(25em)';
        }
      }
       window.addEventListener("scroll", handleScroll);
       return ()=> {
        window.removeEventListener("scroll", handleScroll);
       }
},[]);
    return ( 
        <div className="skills" id='skills' ref={refSkills} style={{backgroundColor : darkMode ? '#242d49' : 'white'}}>
            <h2>My <span>Skills</span></h2>
            <div className="container">
                <div className="row">
                    <div className="big-box">
                            <div className="s-images">
                                <img ref={e => refImgs.current[0] = e}src={Html} alt="Html" />
                                <img ref={e => refImgs.current[1] = e} src={Css} alt="Css" />
                                <img ref={e => refImgs.current[2] = e}  src={Js} alt="Js" />
                                <img ref={e => refImgs.current[3] = e}  src={Ts} alt="Ts" />
                                <img ref={e => refImgs.current[4] = e}  src={Git} alt="Git" />
                                <img ref={e => refImgs.current[5] = e}  src={Github} alt="Github" />
                                <img ref={e => refImgs.current[6] = e}  src={Command} alt="Command" />
                                <img ref={e => refImgs.current[7] = e}  src={Bootstrap} alt="Bootstrap" />
                                <img ref={e => refImgs.current[8] = e}  src={ReactLibrary} alt="ReactLibrary" />
                            </div>
                    </div>
                    <div className="big-box">
                        <div className="box">
                                <img className='data' ref={refData} src={Data} alt="Data" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;