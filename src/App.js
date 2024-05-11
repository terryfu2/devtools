import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './global.css';

import Home from "./pages/Home";
import Httprequest from "./pages/Httprequest/Httprequest";


const RoutedContent = () => {
  // Add event listener to prevent scrolling
  React.useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Httprequest" component={Httprequest} />
    </Switch>
  );
};

const App = () => {
    return (
      <Router>
        <div style={{ position: 'relative', backgroundColor: '#19212a', minHeight: '100vh' }}>
          <Header />
          <div style={{ position: 'absolute', top: '80px', left: '0', width: '200px', height: 'calc(100% - 80px)', backgroundColor: '#19212a' }}>
            <Navbar />
          </div>
          <div style={{ position: 'absolute',top: '80px',marginLeft: '200px',left:'25%' }}>
                <RoutedContent />
            </div>
        </div>
        <Footer/>
      </Router>
    );
  };

export default App;
