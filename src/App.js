import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Home from './compoments/pages/';
import MapPage from './compoments/pages/MapPage';
import Over from './compoments/pages/Over';
import Navigation from "./compoments/layouts/Navigation";


class App extends React.Component {
    render() {
        return (
            <>
                <Navigation/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/map"><MapPage/></Route>
                    <Route exact path="/over"><Over/></Route>
                </Switch>
            </>
        );
    }
}

export default App;
