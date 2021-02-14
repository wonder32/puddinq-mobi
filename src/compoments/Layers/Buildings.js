import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import GeoJSON from "ol/format/GeoJSON";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import {Vector as VectorLayer} from "ol/layer";
import {Stroke, Style, Fill} from "ol/style";

const Buildings = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let buildingSource = new VectorLayer({
            name: 'Panden',
            description: 'Gebouwgrenzen uit het kadaster',
            source: new VectorSource({
                format: new GeoJSON(),
                url: function(extent) {
                    return 'https://geodata.nationaalgeoregister.nl/bag/wfs/v1_1?' +
                        'request=GetFeature&service=wfs&version=2.0.0&typename=pand' +
                        '&outputFormat=application/json&srsname=EPSG:3857&' +
                        'bbox=' + extent.join(',') + ',EPSG:3857';
                },
                strategy: bboxStrategy
            }),
            style: new Style({
                stroke: new Stroke({
                    color: 'black',
                    width: 2
                }),
                fill: new Fill({
                    color: 'rgba(255, 0, 0, 0.2)'
                })
            }),
            visible: false
        });

        map.addLayer(buildingSource);
        buildingSource.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(buildingSource);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Buildings;