import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import {Tile} from "ol/layer";
import {BingMaps} from "ol/source";


const Bing = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let tileLayer = new Tile({
            name: 'Bing foto',
            description: 'Luchtfotos van microsoft bing',
            preload: Infinity,
            source: new BingMaps({
                key: 'AuR-3BKnYGj7anf74lsV5BHsvdcU1hSCKMwYWXigQ1LrJEk19ywBiFp8Jty1i_6W',
                imagerySet: 'Aerial',
                // use maxZoom 19 to see stretched tiles instead of the BingMaps
                // "no photos at this zoom level" tiles
                maxZoom: 19
            }),
            visible: false
        });
        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(tileLayer);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Bing;