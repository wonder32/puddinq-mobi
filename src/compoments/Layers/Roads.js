import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import GeoJSON from "ol/format/GeoJSON";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import {Fill, Stroke, Style} from "ol/style";
import {Vector as VectorLayer} from "ol/layer";


const Roads = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let vectorSource = new VectorLayer({
            name: 'Wegen',
            description: 'Nationaal wegenbestand Rijkstoverheid, onderdeel wegvakken',
            source: new VectorSource({
                format: new GeoJSON(),
                url: function(extent) {
                    return 'https://geodata.nationaalgeoregister.nl/nwbwegen/wfs?' +
                        'version=2.0.0&service=WFS&request=GetFeature&typename=wegvakken' +
                        '&outputFormat=application/json&srsname=EPSG:3857&' +
                        'bbox=' + extent.join(',') + ',EPSG:3857';
                },
                strategy: bboxStrategy,
            }),
            style: new Style({
                stroke: new Stroke({
                    color: 'black',
                    width: 3
                }),
                fill: new Fill({
                    color: 'rgba(255, 0, 0, 0.2)'
                })
            }),
            visible: false
        });

        map.addLayer(vectorSource);
        vectorSource.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(vectorSource);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Roads;