import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const favoriteItems = [
    { label: "Home", to: "/" },
    
    { label: "Http Request", to: "/HttpRequest" },
   
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', backgroundColor:'#19212a' }}>
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px', color: 'black', backgroundColor: 'white', border: 'none', borderBottom: '1px solid white' }}
        />
        <Sidebar style={{ overflowY: 'auto', height: 'calc(100% - 40px)' }} backgroundColor="#19212a">
            <Menu
                style={{ backgroundColor: '#19212a' }}
                menuItemStyles={{
                    button: {
                    fontWeight: 'bold',
                    color: 'white', 
                    backgroundColor: '#19212a', 
                    '&:hover': { 
                        backgroundColor: '#464646', 
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
