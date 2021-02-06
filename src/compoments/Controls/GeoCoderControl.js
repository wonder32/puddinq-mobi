import { useContext, useEffect } from "react";
import Geocoder from "ol-geocoder";
import MapContext from "../Map/MapContext";
import "ol-geocoder/dist/ol-geocoder.min.css";

const GeoCoderControl = () => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;
        let geoCoderControl = new Geocoder('nominatim', {
            provider: 'osm',
            //key: '__some_key__',
            lang: 'nl-NL', //en-US, fr-FR
            autoComplete : true,
            autoCompleteMinLength: 5,
            placeholder: 'Zoek term',
            //targetType: 'text-input',
            limit: 5,
            keepOpen: false,
            preventDefault: true
        });

        map.controls.push(geoCoderControl);
        geoCoderControl.on('addresschosen', function(evt){
            console.info(evt);
            map.getView().animate({
                    center: evt.coordinate,
                    duration: 1
                }
            )
        });

        return () => map.controls.remove(geoCoderControl);
    }, [map]);

    return null;
};
export default GeoCoderControl;