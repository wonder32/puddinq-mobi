import React from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";
import Map from "../Map/Map";
import {osm} from "../Source";
import {Layers, TileLayer, Aerial} from "../Layers";
import {fromLonLat} from 'ol/proj';
import {Controls, FullScreenControl, GeoCoderControl} from "../Controls";

const MapPage = () => {

    const center =[5.121420, 52.090736];
    const zoom = 16;

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
                        <Aerial
                            name='Infrarood 2016'
                            description='PDOK luchtfotos infrarood 2016'
                            zIndex={1}
                            url='https://geodata.nationaalgeoregister.nl/luchtfoto/infrarood/wms'
                            service='WMS'
                            request='GetMap'
                            layers='2016_ortho25IR'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2016'
                            description='PDOK luchtfotos rgb 2016'
                            zIndex={2}
                            url='https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wms'
                            service='WMS'
                            request='GetMap'
                            layers='2016_ortho25'
                            srs='EPSG:3857'
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