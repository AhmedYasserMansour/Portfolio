import React, { useContext } from 'react';
import './Footer.css';
import { themeContext } from './../../Context';

const Footer = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="footer" style={{backgroundColor : darkMode ? 'black' : 'white'}}>
            <h2>Ahmed Yasser</h2>
            <h3><span style={{color : darkMode ? 'white' : 'black'}}>Gmail :</span> ahmedyassermansour111</h3>
            <h4><span style={{color : darkMode ? 'white' : 'black'}}>Tel :</span> +2 01006352442</h4>
        </div>
     );
}
 
export default Footer;