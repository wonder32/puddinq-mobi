import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import {Tile} from "ol/layer";
import TileWMS from "ol/source/TileWMS";


const Aerial = ({ zIndex = 0, url, service, request, layers, srs, name, description }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let tileLayer = new Tile({
            name: name,
            description: description,
            source: new TileWMS({
                preload: Infinity,
                url: url,
                serverType:'geoserver',
                crossOrigin: 'anonymous',
                params:{
                    'service' : service,
                    'request' : request,
                    'layers' : layers,
                    'srs': srs
                }
            }),
            visible: true
        });
        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(tileLayer);
            }
        };
    }, [map, zIndex, url, service, request, layers, srs, name, description])

    return null;
};
export default Aerial;