import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './compoments/pages/';
import MapPage from './compoments/pages/MapPage';
import Over from './compoments/pages/Over';
import Handleiding from './compoments/pages/Handleiding';
import Navigation from './compoments/layouts/Navigation';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-K4C9PQ',
};

TagManager.initialize(tagManagerArgs);

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/Handleiding" element={<Handleiding />} />
                <Route path="/over" element={<Over />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
