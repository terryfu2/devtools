// contexts/ThemeContext.js
import React, { createContext, useState } from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    backgroundColor:'#ffffff',
    text: '#1876d2',
    font: 'black',
    hover:'#091E4224'
  },
  dark: {
    background: '#19212a',
    backgroundColor:'#19212a',
    text: '#ffffff',
    font: 'white',
    hover: '#464646'
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
