import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ThemeContext } from "./contexts/ThemeContext"; 
import './global.css';
import Routes from "./Routes"

const App = () => {
    const { theme } = React.useContext(ThemeContext); 
    return (
        <div style={{minHeight: '100vh',backgroundColor:theme.backgroundColor}}>
            <Router basename="/devtools">
                <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: theme.backgroundColor }}>
                    <div style = {{backgroundColor: theme.background}}>  
                        <Header />
                    </div>
                    <div style={{ position: 'absolute', top: '80px', left: '0', width: '19%', height: 'calc(100% - 80px)', }}>
                        <Navbar />
                    </div>
                    <div style={{ position: 'absolute', top: '80px', marginLeft: '200px', left: '10%',width:"70%" }}>
                        <Routes />
                    </div>
                </div>
                <Footer/>
            </Router>
        </div>

    );
};

export default App;
