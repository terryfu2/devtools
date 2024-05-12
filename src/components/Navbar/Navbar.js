import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../global.css'
import {ThemeContext } from "../../contexts/ThemeContext"; 

const favoriteItems = [
    //{ label: "Home", to: "/" },
    { label: "HTTP Request", to: "/HttpRequest" },
    { label: "Git Graph", to: "/HttpRequest" },

    { label: "HTTP Request1", to: "/HttpRequest" },
    { label: "Git Graph2", to: "/HttpRequest" },
    { label: "HTTP Request3", to: "/HttpRequest" },
    { label: "Git Graph4", to: "/HttpRequest" },
    { label: "HTTP Request5", to: "/HttpRequest" },
    { label: "Git Graph6", to: "/HttpRequest" },
    { label: "HTTP Request7", to: "/HttpRequest" },
    { label: "Git Graph8", to: "/HttpRequest" },
    { label: "HTTP Request9", to: "/HttpRequest" },
    { label: "Git Graph10", to: "/HttpRequest" },
    { label: "HTTP Request11", to: "/HttpRequest" },
    { label: "Git Graph12", to: "/HttpRequest" },
    { label: "HTTP Request13", to: "/HttpRequest" },
    { label: "Git Graph14", to: "/HttpRequest" },
    { label: "HTTP Request15", to: "/HttpRequest" },
    { label: "end***", to: "/" },
    { label: "end***", to: "/" },
    

];

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const { theme } = React.useContext(ThemeContext); 
    return (
    
    <div style={{ left:'2%',height: '100vh'}} >
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '97%', padding: '10px', boxSizing: 'border-box', marginLeft: '10px', marginBottom: '10px', color: 'black', backgroundColor: 'white', border: 'none', borderBottom: '1px solid white' }}
        />
        <Sidebar style={{ overflowY: 'auto', height: 'calc(100% - 130px)',width:'100%'}} backgroundColor= {theme.backgroundColor}>
            <Menu
                style={{ backgroundColor: theme.backgroundColor }}
                menuItemStyles={{
                    button: {
                    fontWeight: 'bold',
                    color: theme.text, 
                    backgroundColor: theme.backgroundColor, 
                    '&:hover': { 
                        backgroundColor: theme.hover, 
                    },
                    },
                }}
                renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}
            >

                
            {filterMenuItems(searchTerm,favoriteItems).map(item => (
                <MenuItem component={<Link to={item.to} />}> {item.label}</MenuItem>
            ))}

            </Menu>
            
        </Sidebar>
        
    </div>
);
};

const filterMenuItems = (searchTerm,items) => {
    return items.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default Navbar;
