import React, { useContext } from "react";
import { themeContext } from './../../Context';
import "./Toggle.css";
import Dark from '../../assets/dark_mode.png'; 
import Light from '../../assets/light_mode.png'; 

const Toggle = _ => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = _ => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <img src={Dark} alt="Dark" />
      <img src={Light} alt="Light" />
      <div
        className="circle"
        style={darkMode ? { left: "3px" } : { right: "3px" }}
      ></div>
    </div>
  );
};
    
export default Toggle;