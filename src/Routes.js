import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Httprequest from "./pages/Httprequest/Httprequest";
import Temp from "./pages/Temp"
import LiGenerator from "./pages/LiGenerator/LiGenerator"
import Jsonmb from "./pages/Json/Jsonmb";


const Routes = () => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <Switch>
            <Route path="/Httprequest" component={Httprequest} />
            <Route path="/Temp" component={Temp} />
            <Route path="/LiGenerator" component={LiGenerator} />
            <Route path="/Jsonmb" component={Jsonmb} />
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Routes;