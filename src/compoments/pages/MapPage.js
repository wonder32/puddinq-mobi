import React from 'react';
import styled from "styled-components";
import Sidebar from "../layouts/Sidebar";
import Map from "../Map/Map";
import {osm} from "../Source";
import {Layers, TileLayer, Aerial, Roads, Kadaster, Buildings, Permits, Popup} from "../Layers";
import {Controls, FullScreenControl, GeoCoderControl} from "../Controls";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MapPage = () => {

    let center =[570811.17, 6814781.96];
    let zoom = 16;
    let rotation = 0;

    if (window.location.hash !== '') {
        // try to restore center, zoom-level and rotation from the URL
        let hash = window.location.hash.replace('#map=', '');
        let parts = hash.split('/');

        if (parts.length === 4) {
            zoom = parseInt(parts[0], 10);
            center = [
                parseFloat(parts[1]),
                parseFloat(parts[2])
            ];
            rotation = parseFloat(parts[3]);
        }
    }

    return (
        <>
            <HelmetProvider>
            <MapContainer>
                <Helmet
                    title="Puddinq.mobi - Map web applicatie"
                    meta={[
                        { property: "og:title", content: "Puddinq.mobi | applicatie" },
                        { property: "description", content: "Web applicatie met publieke overheidsgegevens rond uw huis of bedrijf." },
                        { property: "og:description", content: "Web applicatie met publieke overheidsgegevens rond uw huis of bedrijf." },
                        { property: "og:type", content: "website" },
                        { property: "og:url", content: "https://www.puddinq.mobi/map/" },
                        { property: "og:image", content: "https://www.puddinq.mobi/combination-twee.png" },
                        // Any other meta tags go here as objects or you can just add children directly inside this component.
                    ]}
                >
                    <link rel="canonical" href="https://www.puddinq.mobi/map/" />
                </Helmet>
                <Map center={center} zoom={zoom} rotation={rotation}>

                    <Layers>
                        <TileLayer
                            name='Kaart'
                            description='Kaartgegevens afkomstig van de open street map'
                            source={osm()}
                            zIndex={0}
                        />
                        <Aerial
                            name='Luchtfoto 2016'
                            description='PDOK luchtfotos rgb 2016'
                            zIndex={2}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2016_ortho25'
                            srs='EPSG:3857'
                        />
                        {/*https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0?&request=GetCapabilities&service=wms*/}
                        <Aerial
                            name='Luchtfoto 2017'
                            description='PDOK luchtfotos rgb 2017'
                            zIndex={4}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2017_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2018'
                            description='PDOK luchtfotos rgb 2018'
                            zIndex={6}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2018_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2019'
                            description='PDOK luchtfotos rgb 2019'
                            zIndex={8}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2019_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2020'
                            description='PDOK luchtfotos rgb 2020'
                            zIndex={9}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2020_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2022'
                            description='PDOK luchtfotos rgb 2022'
                            zIndex={11}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2022_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2023'
                            description='PDOK luchtfotos rgb 2023'
                            zIndex={12}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2023_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2024'
                            description='PDOK luchtfotos rgb 2024'
                            zIndex={13}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2024_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Luchtfoto 2025'
                            description='PDOK luchtfotos rgb 2025'
                            zIndex={14}
                            url='https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='2025_ortho25'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Hoogtes 0.5m/px'
                            description='0.5 meter per pixel'
                            zIndex={15}
                            url='https://geodata.nationaalgeoregister.nl/ahn3/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='ahn3_05m_dsm'
                            srs='EPSG:3857'
                        />
                        <Aerial
                            name='Hoogtes 5m/px'
                            description='5 meter per pixel'
                            zIndex={16}
                            url='https://geodata.nationaalgeoregister.nl/ahn1/wms/v1_0'
                            service='WMS'
                            request='GetMap'
                            layers='ahn1_5m'
                            srs='EPSG:3857'
                        />
                        <Roads
                            zIndex={17}
                            />
                        <Kadaster
                            zIndex={18}
                            />
                        <Buildings
                            zIndex={19}
                            />
                        <Permits
                            zIndex={20}
                        />
                        <Popup />
                    </Layers>
                    <Sidebar/>
                    <Controls>
                        <FullScreenControl/>
                        <GeoCoderControl/>
                    </Controls>
                </Map>
            </MapContainer>
                </HelmetProvider>
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
