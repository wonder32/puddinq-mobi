import React from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";


const Map = () => {

    return (
        <>
            <Sidebar />
        <MapContainer className="map-container">
            <div id="map" className="map">
            </div>
        </MapContainer>
            </>
    )

}

export default Map;

//  STYLED COMPONENTS STYLES
const MapContainer = styled.div`
    width: 100%;
    height: calc(100% - 56px);
    
    @media (min-width: 1000px) {
        padding-left: 30px;
    } 
    
    #map {
        height:100%;
    }
`;