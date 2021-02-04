import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";
import Map from "../Map/Map";
import {osm} from "../Source";
import {Layers, TileLayer} from "../Layers";
import {fromLonLat, get} from 'ol/proj';
import {Controls, FullScreenControl} from "../Controls";

const MapPage = () => {

    const [center, setCenter] = useState([5.121420, 52.090736]);
    const [zoom, setZoom] = useState(16);

    return (
        <>
            <Sidebar/>
            <MapContainer>
                <Map center={fromLonLat(center)} zoom={zoom}>
                    <Layers>
                        <TileLayer
                            source={osm()}
                            zIndex={0}
                        />
                    </Layers>
                    <Controls>
                        <FullScreenControl />
                    </Controls>
                </Map>
            </MapContainer>
        </>
    )

}

export default MapPage;

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