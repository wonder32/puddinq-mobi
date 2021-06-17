import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './compoments/pages/';
import MapPage from './compoments/pages/MapPage';
import Over from './compoments/pages/Over';
import Handleiding from './compoments/pages/Handleiding';
import Navigation from "./compoments/layouts/Navigation";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-K4C9PQ'
}

TagManager.initialize(tagManagerArgs);

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/map"><MapPage/></Route>
                    <Route exact path="/Handleiding"><Handleiding/></Route>
                    <Route exact path="/over"><Over/></Route>
                </Switch>
                </Router>
            </>
        );
    }
}

export default App;
