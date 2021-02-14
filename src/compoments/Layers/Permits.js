import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import GeoJSON from "ol/format/GeoJSON";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import {Vector as VectorLayer} from "ol/layer";
import {Stroke, Style, Fill, Circle} from "ol/style";
import {Vector} from "ol/source";

const Permits = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let permitSource = new Vector({
            format: new GeoJSON(),
            loader: function(extent, resolution, projection) {
                let url = 'https://vergunningen.puddinq.nl/?bbox=' + extent.join(',') + ',EPSG:3857';
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.withCredentials = false;
                let onError = function() {
                    console.log('load error');
                    permitSource.removeLoadedExtent(extent);
                }
                xhr.onerror = onError;
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        permitSource.addFeatures(
                            permitSource.getFormat().readFeatures(xhr.responseText));
                    } else {
                        onError();
                    }
                }
                xhr.send();
            },
            strategy: bboxStrategy
        });

        let permits = new VectorLayer({
            name: 'Vergunningen',
            description: 'Lopende omgevingsvergunningen',
            source: permitSource,
            style : new Style({
                image: new Circle({
                    radius: 15,
                    fill:  new Fill({
                        color: 'rgba(255,255,255, 0.3)'
                    }),
                    stroke: new Stroke({color: 'blue', width: 2})
                })
            }),
            visible: false,
            //declutter: true
        });

        map.addLayer(permits);
        permits.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(permitSource);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Permits;