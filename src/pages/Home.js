import React from "react";
import {ThemeContext } from "../contexts/ThemeContext"; 

const Home = () => {
    const { theme } = React.useContext(ThemeContext); 
    return (
        <div>
            <div class = "com" style={{fontSize: "3rem", textAlign: "center", margin: "1%" ,color:theme.font}}>Home</div>

        </div>
    );
};

export default Home;
