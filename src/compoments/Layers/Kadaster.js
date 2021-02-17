import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import GeoJSON from "ol/format/GeoJSON";
import {bbox as bboxStrategy} from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import {Vector as VectorLayer} from "ol/layer";
import {Fill, Stroke, Style} from "ol/style";



const Kadaster = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let kadasterSource = new VectorLayer({
            name: 'Kadaster',
            description: 'Perceelrenzen afkomstig uit het kadaster',
            source: new VectorSource({
                format: new GeoJSON(),
                url: function(extent) {
                    return 'https://geodata.nationaalgeoregister.nl/kadastralekaart/wfs/v4_0?request=GetFeature' +
                        '&service=WFS&version=2.0.0&typeName=kadastralekaartv4:perceel&outputFormat=application/json' +
                        '&srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
                },
                strategy: bboxStrategy
            }),
            style: new Style({
                stroke: new Stroke({
                    color: 'black',
                    width: 2
                }),
                fill: new Fill({
                    color: 'rgba(255, 0, 0, 0.0)'
                })
            }),
            visible: false
        });

        map.addLayer(kadasterSource);
        kadasterSource.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(kadasterSource);
            }
        };
    }, [map, zIndex])

    return null;
};
export default Kadaster;