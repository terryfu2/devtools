// components/Header/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { themes, ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const Logo = styled.div`
    position: fixed;
    color: ${({ theme }) => theme.text};
    top: 1em;
    left: 2em;
    opacity: 0.6;
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
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div>
      <Link to="/">
        <Logo theme={theme}><h1> <CodeIcon sx={{ fontSize: 40 }}/> devtools</h1></Logo>
      </Link>
      <div style={{ position: 'fixed', top: '1em', right: '2em', cursor: 'pointer' }} onClick={toggleTheme}>
        {theme === themes.light ? <LightModeIcon sx={{ fontSize: 30,color:themes.light.text }} /> : <Brightness3Icon sx={{ fontSize: 30, color:"white"}} />}
      </div>
    </div>
  );
};

export default Header;
