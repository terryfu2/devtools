import React from "react";
import {ThemeContext } from "../../contexts/ThemeContext"; 

const Httprequest = () => {
    const { theme } = React.useContext(ThemeContext); 
    return (
    
        <div style={{fontSize: "3rem", textAlign: "center", margin: "1%", color:theme.font}}>Http Request</div>
    
    );
};

export default Httprequest;