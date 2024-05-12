import React, { useState, useEffect, useRef } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../global.css'
import { ThemeContext } from "../../contexts/ThemeContext"; 

import {routeItems} from "./Items/Items"

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "/") {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []); 

    const { theme } = React.useContext(ThemeContext); 

    return (
        <div style={{ left: '2%', height: '100vh' }}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search... (ctrl + /)"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                    width: '97%', padding: '10px', boxSizing: 'border-box',
                    marginLeft: '10px', marginBottom: '10px', color: 'black',
                    backgroundColor: 'white', border: 'none', borderBottom: '1px solid white'
                }}
            />
            <Sidebar style={{ overflowY: 'auto', height: 'calc(100% - 130px)', width: '100%' }} backgroundColor={theme.backgroundColor}>
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
                            '&:hover::after': { 
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                width: '100%', 
                                height: '2px', 
                                backgroundColor: theme.text, 
                                animation: 'drawLine 0.4s forwards', 
                            },
                        },
                    }}
                    renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}
                >
                    {filterMenuItems(searchTerm, routeItems).map(item => (
                        <MenuItem key={item.label} component={<Link to={item.to} />}>
                            {/* Render the icon component if available */}
                            {item.icon && <item.icon style={{ marginRight: '8px' }} />}
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>
            </Sidebar>
        </div>
    );
};

const filterMenuItems = (searchTerm, items) => {
    return items.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default Navbar;
