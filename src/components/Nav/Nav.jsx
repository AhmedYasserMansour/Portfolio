import React, { useEffect, useRef, useState } from 'react';
import './Nav.css';
import Logo from '../../assets/Logo.png';
import Toggle from './../Toggle/Toggle';

const Nav = _ => {
    const list = useRef();
    const scroll = useRef(null); 
    const [height, setHeight] = useState(0);
    useEffect(() => {
      const calculateHeight = () => {
        setHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight);
      };
      calculateHeight();
    }, [height]);
    useEffect( _ => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
          scroll.current.style.width = `${(scrollTop / height) * 100}%`;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [height]);
    
    const handlebutton = _ => {
        list.current.classList.toggle('show');
    }
    return ( 
        <div className="nav">
             <div className='scroll' ref={scroll}></div>
           <div className="header">
           <div className="logo">
                <img src={Logo} alt="Logo" />
              <Toggle/>
            </div>
            <div className="list">
                <div onClick={handlebutton} className="spans">
                <span></span>
                <span></span>
                <span></span>
                </div>
                <ul ref={list}>
                    <li><a className='active' href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
           </div>
        </div>
     );
}
 
export default Nav;