import React, { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import * as Bs from "react-icons/bs";
import Overlay from 'ol/Overlay';

const Popup = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let
            container = document.getElementById('popup'),
            content_element = document.getElementById('popup-content'),
            closer = document.getElementById('popup-closer');

        closer.onclick = function() {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };

        let overlay = new Overlay({
            element: container,
            autoPan: true,
            offset: [0, -10]
        });
        map.addOverlay(overlay);

        map.on('click', function(evt) {
            let features = [];
            map.forEachFeatureAtPixel(evt.pixel,
                function(feature, layer) {
                    features.push(feature);
            });
            if (features.length > 0) {
                let geometry = features[0].getGeometry();
                let coordinates = geometry.getCoordinates();

                let content = '<b>' + features[0].get('overheid') + '</b><br>' + features[0].get('onderwerp') + '<br>';
                content += features[0].get('titel');
                content += ' <a href="' + features[0].get('url') + '" target="_blank">bekijk</a>';
                if (features.length > 1) {
                    content += '<br><br><b>Andere vergunningen hier</b><br>';
                    for (let i = 1; i < features.length; i++) {
                        content += features[i].get('onderwerp') + ' <a href="' + features[i].get('url') + '" target="_blank">bekijk</a>' + '<br>';
                        console.log(features[i]);
                    }
                }

                content_element.innerHTML = content;
                overlay.setPosition(coordinates);
                console.table(features);
            }
        });

        return () => {
            if (map) {
                //map.removeLayer(buildingSource);
            }
        };
    }, [map, zIndex])

    return (

        <div id="popup" className="ol-popup">
            <Bs.BsXSquare className='out' id="popup-closer"/>
            <div id="popup-content"></div>
        </div>

    );
};
export default Popup;
