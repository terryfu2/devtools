import React from "react";
import {themes,ThemeContext } from "../contexts/ThemeContext"; 

const Home = () => {
    const { theme } = React.useContext(ThemeContext); 
    return (
        <div>
            <div style={{fontSize: "3rem",color:themes.light.text,fontWeight:"bolder"}}>All-in-one Toolbox</div>
            <div style={{fontSize: "3rem",color:theme.font,fontWeight:"bold"}}>for Developers.</div>
        </div>
    );
};

export default Home;
