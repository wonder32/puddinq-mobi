import React from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";


const Map = () => {

    return (
        <>
            <Sidebar />
        <MapContainer className="home-main-container">

        <div className="container">
            map
        </div>
        </MapContainer>
            </>
    )

}

export default Map;

//  STYLED COMPONENTS STYLES
const MapContainer = styled.div`

`;