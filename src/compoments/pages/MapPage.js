import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";
import Map from "../Map/Map";
import {osm} from "../Source";
import {Layers, TileLayer} from "../Layers";
import {fromLonLat, get} from 'ol/proj';
import {Controls, FullScreenControl, GeoCoderControl} from "../Controls";

const MapPage = () => {

    const [center, setCenter] = useState([5.121420, 52.090736]);
    const [zoom, setZoom] = useState(16);

    return (
        <>

            <MapContainer>
                <Map center={fromLonLat(center)} zoom={zoom}>
                    <Sidebar/>
                    <Layers>
                        <TileLayer
                            source={osm()}
                            zIndex={0}
                        />
                    </Layers>
                    <Controls>
                        <FullScreenControl/>
                        <GeoCoderControl/>
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
    
    .ol-control button { 
        background-color: rgba(40, 40, 40, 0.8) !important;
    }
    .ol-control button:hover { 
        background-color: rgba(40, 40, 40, 1) !important;
    }
    
    @media (max-width: 800px) {
        .ol-control button {
            margin: 5px;
            font-size: 1.7em;
        }
        
        .ol-geo-decoder button {
        }
        
        .ol-geocoder.gcd-gl-container {
            top: 6.875em;
        }
        .ol-geocoder .gcd-gl-control {
            width: 2.7em;
            height: 2.7em;
        }
        
        .ol-geocoder .gcd-gl-control input{
            margin-left: 10px;
        }
        .ol-geocoder .gcd-gl-expanded {
            width: 16.15em;
            height: 2.7em;
        }
    }
`;