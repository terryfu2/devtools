import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Httprequest from "./pages/Httprequest/Httprequest";
import Temp from "./pages/Temp"


const Routes = () => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Httprequest" component={Httprequest} />
            <Route path="/Temp" component={Temp} />
        </Switch>
    );
};

export default Routes;