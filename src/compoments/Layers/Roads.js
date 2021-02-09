import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import GeoJSON from "ol/format/GeoJSON";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import VectorSource from "ol/source/Source";


const Roads = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let vectorSource = new VectorSource({
            format: new GeoJSON(),
            loader: function(extent, resolution, projection) {
                var proj = projection.getCode();
                var url = 'https://geodata.nationaalgeoregister.nl/nwbwegen/wfs?' +
                    'version=2.0.0&service=WFS&request=GetFeature&typename=wegvakken' +
                    '&outputFormat=application/json&srsname=EPSG:3857&' +
                    'bbox=' + extent.join(',') + ',EPSG:3857';
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                var onError = function() {
                    vectorSource.removeLoadedExtent(extent);
                }
                xhr.onerror = onError;
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        vectorSource.addFeatures(
                            vectorSource.getFormat().readFeatures(xhr.responseText));
                    } else {
                        onError();
                    }
                }
                xhr.send();
            },
            strategy: bboxStrategy
        });
        map.addLayer(vectorSource);

        return () => {
            if (map) {
                map.removeLayer(vectorSource);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Roads;