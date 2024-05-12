import React from "react";
import {ThemeContext } from "../contexts/ThemeContext"; 
import ConstructionIcon from '@mui/icons-material/Construction';

const Temp = () => {
    const { theme } = React.useContext(ThemeContext); 
    return (
        <div>
            <div style={{fontSize: "3rem",color:theme.font,fontWeight:"bolder"}}> <ConstructionIcon fontSize="large"/> Page coming soon...</div>
            
        </div>
    );
};

export default Temp;
