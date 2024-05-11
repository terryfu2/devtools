import React from "react";
import "./Header.css"
import styled from "styled-components";
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';


const Logo = styled.div`
  position: fixed;
  color: white;
  top: 1em;
  left: 2em;
  opacity: 0.3;
  transition: opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    opacity: 1;
  }
  & > h1 {
    font-size: 40px;
    margin: 0 0;
    & > a {
      text-decoration: none;
      position: relative;
      color: black;
    }
  }
  @media (max-width: 960px) {
    position: relative;
    display: grid;
    left: -6em;
    font-size: 10px;
  }
`;

const Header = () => {
    return (
      <div>
        <Link to="/">
          <Logo><h1> <CodeIcon fontSize = "large"/> devtools</h1></Logo>
        </Link>
        
      </div>
    );
  };

export default Header;
